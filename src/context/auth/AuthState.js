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
  LOGIN_WITH_GOOGLE,
  LOGIN_FAIL,
  RESET_PASSWRORD_EMAIL,
  RESET_PASSWRORD,
  RESET_PASSWRORD_EMAIL_ERROR,
  LOGOUT,
  LOGOUT_PSYCHIATRIST,
  CLEAR_ERRORS,
  FOUND_LOGGEDIN_USER,
  SHOW_FORGOT_PASSWORD,
  DELETE_PSYCHIATRIST,
  CHANGE_PSYCH_PASSWORD,
  CHANGE_PSYCH_PASSWORD_ERROR,
  TOTAL_PSYCHIATRISTS,
  TOTAL_USERS,
  CHANGE_USER_PASSWORD,
  CHANGE_USER_PASSWORD_ERROR
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: [],
    foundLoggedInUser: [],
    psychiatrist: [],
    error: null,
    successMsg: null,
    responseMsg:null,
    role: null,
    emailInUser: "",
    showForgotPasswordState: false,
    refresh:false,
    totalUsers:"",
    totalPsychiatrists:""
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const loadUser = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get("/vp/users");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const loadPsychiatrist = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get("/vp/psychiatrist");
      dispatch({ type: PSYCHIATRIST_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const findLoggedInUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/vp/users");
      dispatch({ type: FOUND_LOGGEDIN_USER, payload: res.data });
    } catch (error) {
      try {
        const res = await axios.get("/vp/psychiatrist");
        dispatch({ type: FOUND_LOGGEDIN_USER, payload: res.data });
      } catch (error) {}
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

  const resetPasswordEmail = async (email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/vp/users/sendResetPasswordEmail",
        email,
        config
      );
      dispatch({ type: RESET_PASSWRORD_EMAIL, payload: res.data.msg });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: RESET_PASSWRORD_EMAIL_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const resetPassword = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/vp/users/resetPassword", data, config);
      dispatch({ type: RESET_PASSWRORD, payload: res. data });
    } catch (error) {}
  };

  const logout = async () => {
    try {
      await axios.post("/vp/users/logout");
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithGoogle = async (accessToken) => {
    try {
      const res = await axios.post("/vp/users/google", {
        access_token: accessToken,
      });
      dispatch({ type: LOGIN_WITH_GOOGLE, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const deletePsychiatrist = async(id) => {
    const res = await axios.delete(`/vp/psychiatrist/${id}`)
    dispatch({type:DELETE_PSYCHIATRIST})
  }

  const changePassword = async(formData) => {
    try {
      // const res = await axios.post("vp/psychiatrist/changePassword",formData,config);
      const res = await axios.post("/vp/psychiatrist/changePassword",formData,config)
      dispatch({type:CHANGE_PSYCH_PASSWORD,payload:res.data.msg})
    } catch (error) {
      dispatch({type:CHANGE_PSYCH_PASSWORD_ERROR,payload:error.response.data.msg})
    }
  }

  const changeUserPassword = async (formData) => {
    try {
      const res = await axios.post("/vp/users/changePassword",formData,config);
        dispatch({type:CHANGE_USER_PASSWORD,payload:res.data.msg});
    } catch (error) {
      dispatch({type:CHANGE_USER_PASSWORD_ERROR,payload:error.response.data.msg});
    }
  }

  const getTotalUsers = async() => {
    try {
      const res = await axios.get("/vp/users/admin/total");
      dispatch({type:TOTAL_USERS,payload:res.data})
    } catch (error) {
      
    }
  }

  const getTotalPsychiatrists = async() => {
    try {
      const res = await axios.get("/vp/psychiatrist/admin/total");
      dispatch({type:TOTAL_PSYCHIATRISTS,payload:res.data})
    } catch (error) {
      
    }
  }

  const showForgotPassword = () => {
    dispatch({ type: SHOW_FORGOT_PASSWORD });
  };

  const psychiatristLogout = () => {
    dispatch({ type: LOGOUT_PSYCHIATRIST });
  };

  const clearErrors = () => {
    setTimeout(() => {
      dispatch({type:CLEAR_ERRORS});
    },5000)
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        foundLoggedInUser: state.foundLoggedInUser,
        psychiatrist: state.psychiatrist,
        loading: state.loading,
        role: state.role,
        error: state.error,
        successMsg: state.successMsg,
        emailInUse: state.emailInUse,
        responseMsg:state.responseMsg,
        showForgotPasswordState: state.showForgotPasswordState,
        refresh:state.refresh,
        totalUsers:state.totalUsers,
        totalPsychiatrists:state.totalPsychiatrists,
        loadUser,
        loadPsychiatrist,
        register,
        registerPsychiatrist,
        login,
        loginWithGoogle,
        psychiatristLogin,
        resetPasswordEmail,
        resetPassword,
        logout,
        psychiatristLogout,
        clearErrors,
        findLoggedInUser,
        showForgotPassword,
        deletePsychiatrist,
        changePassword,
        getTotalUsers,
        getTotalPsychiatrists,
        changeUserPassword
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
