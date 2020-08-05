import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_SUCCESS_PSYCHIATRIST,
  REGISTER_FAIL,
  USER_LOADED,
  PSYCHIATRIST_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  PSYCHIATRIST_LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_PSYCHIATRIST,
  CLEAR_ERRORS,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: [],
    error: null,
    role: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    // load token in global header
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/vp/users");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const loadPsychiatrist = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/vp/psychiatrist");
      dispatch({ type: PSYCHIATRIST_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };


  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/vp/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });

      loadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };

  const registerPsychiatrist = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/vp/psychiatrist", formData, config);
      dispatch({ type: REGISTER_SUCCESS_PSYCHIATRIST, payload: res.data });

      loadPsychiatrist();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };

  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/vp/users/login", formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };

  const psychiatristLogin = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/vp/psychiatrist/login", formData, config);
      dispatch({ type: PSYCHIATRIST_LOGIN_SUCCESS, payload: res.data });
      loadPsychiatrist();
    
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };

  const logout = async () => {
    try {
      await axios.post("/vp/users/logout");
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.error(error);
    }
  };

  const psychiatristLogout = () => {
    dispatch({type:LOGOUT_PSYCHIATRIST})
  }

  const clearErrors = () => dispatch({ type: { CLEAR_ERRORS } });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        role: state.role,
        error: state.error,
        loadUser,
        loadPsychiatrist,
        register,
        registerPsychiatrist,
        login,
        psychiatristLogin,
        logout,
        psychiatristLogout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
