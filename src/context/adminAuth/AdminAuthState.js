import React,{useReducer} from "react";
import AdminAuthContext from "./adminAuthContext";
import AdminAuthReducer from "./adminAuthReducer";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";

import {
    ADMIN_SIGNUP,
    ADMIN_SIGNUP_FAIL,
    ADMIN_SIGNIN,
    ADMIN_SIGNIN_FAIL,
    LOAD_ADMIN,
    ADMIN_AUTH_ERROR,
    LOGOUT_ADMIN,
    ADMIN_CHANGE_PASSWORD,
    ADMIN_CHANGE_PASSWORD_ERROR
} from "./types"
import { CHANGE_PSYCH_PASSWORD } from "../../types";

const AdminAuthState = (props) => {
    const initialState = {
        token:localStorage.getItem("token"),
        isAuthenticated:null,
        loading:true,
        admin:[],
        error:null,
        successMsg:null,        
    }
    const [state,dispatch] = useReducer(AdminAuthReducer,initialState)
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    const loadAdmin = async() => {
        setAuthToken(localStorage.token)
        try {
            const res = await axios.get("/vp/admin");
            dispatch({type:LOAD_ADMIN,payload:res.data})
        } catch (error) {
            dispatch({type:ADMIN_AUTH_ERROR})
        }
    }

    const signupAdmin = async (formData) => {
        try {
            const res = await axios.post("/vp/admin/signup",formData,config)
            dispatch({type:ADMIN_SIGNUP,payload:res.data})
            loadAdmin();
        } catch (error) {
            dispatch({type:ADMIN_SIGNUP_FAIL,payload:error.response.data.msg})
        }
    }

    const signinAdmin = async (formData) => {
        try {
            const res = await axios.post("/vp/admin/signin",formData,config);
            dispatch({type:ADMIN_SIGNIN,payload:res.data});
            loadAdmin();
        } catch (error) {
            dispatch({type:ADMIN_SIGNIN_FAIL,payload:error.response.data.msg})
        }
    }

    const adminChangePassword = async (formData) => {
        try {
            const res = await axios.post("/vp/admin/changePassword",formData,config);
            dispatch({type:ADMIN_CHANGE_PASSWORD,payload:res.data.msg});
        } catch (error) {
            dispatch({type:ADMIN_CHANGE_PASSWORD_ERROR,payload:error.response.data.msg});
        }
    }

    const logoutAdmin = () => {
        dispatch({type:LOGOUT_ADMIN})
    }

    return (
        <AdminAuthContext.Provider value = {{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:false,
            admin:state.admin,
            adminChangePassword,
            loadAdmin,
            signupAdmin,
            signinAdmin,
            logoutAdmin
        }}>
            {props.children}
        </AdminAuthContext.Provider>
    )
}

export default AdminAuthState;