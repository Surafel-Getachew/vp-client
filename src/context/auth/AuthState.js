import React,{useReducer} from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";


import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
  } from "../../types"

const AuthState = (props) => {
    
    const initialState = {
        
        token:localStorage.getItem("token"),
        isAuthenticated:null,
        loading:true,
        user:null,
        error:null
    } 

    const [state,dispatch] = useReducer(AuthReducer,initialState);

    const loadUser = async() => {
        // load token in global header
        if(localStorage.token) {
            setAuthToken(localStorage.token)
        }

        try {
            const res =  await axios.get("/vp/users");
            dispatch({type:USER_LOADED,payload:res.data})

        } catch (error) {
            dispatch({type:AUTH_ERROR})
        }
        
    }

    const register = async (formData) => {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/vp/users",formData,config);
            dispatch({type:REGISTER_SUCCESS,payload:res.data})

            loadUser();
        } catch (error) {
            dispatch({type:REGISTER_FAIL,payload:error.response.data.msg})
        }
    }

    const login = async (formData) => {

        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        try {
            
            const res = await axios.post("/vp/users/login",formData,config);
            dispatch({type:LOGIN_SUCCESS,payload:res.data})

            loadUser()

        } catch (error) {
            dispatch({type:LOGIN_FAIL,payload:error.response.data.msg})
        }
    }

    const clearErrors = () => dispatch({type:{CLEAR_ERRORS}})

    return (
        <AuthContext.Provider value = {{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            user:state.user,
            loading:state.loading,
            error:state.error,
            loadUser,
            register,
            login,
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;