import React,{useReducer} from "react";
import axios from "axios"
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

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
         token:localStorage.getItem("token"), //were goinig to look for an item called token
         isAuthenticated:null,
         loading:true,
         user:null,
         error:null
     };

     const [state,dispatch] = useReducer(AuthReducer,initialState);

    //  Load User

    //  Reister User
     const register = async (formData) => {
        const config = {
            headers:{"Content-Type": "application/json"}
        }
        const res = await axios.post("/user/",formData,config);

        dispatch({type:REGISTER_SUCCESS,payload:res.data})
     }
    // Login User

    // Logout

    // Clear Errors

    return (
        <AuthContext.Provider value = {{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error
        }}>
            {props.children}
        </AuthContext.Provider>
    )

 }

 export default AuthState;