import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    PSYCHIATRIST_LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOGOUT_PSYCHIATRIST,
    CLEAR_ERRORS,
    REGISTER_SUCCESS_PSYCHIATRIST,
    PSYCHIATRIST_LOADED,
  } from "../../types"

export default (state,action) => {
    switch (action.type){
        case USER_LOADED:   
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                user:action.payload,
                role:action.payload.role,
            }
        case PSYCHIATRIST_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                user:action.payload,
                role:action.payload.role
            }    
        case REGISTER_SUCCESS:
            localStorage.setItem("token",action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false,
                error:null
            }
        case REGISTER_SUCCESS_PSYCHIATRIST:
            localStorage.setItem("token",action.payload.token);
            return {
                ...state,
                ...action.payload,
                // token:action.payload.token,
                // role:action.payload.role,
                isAuthenticated:true,
                loading:false,
                error:null
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token",action.payload.token);
            return {
                ...state,
                token:action.payload.token,
                isAuthenticated:true,
                role:action.payload.role,
                loading:false,
                error:null
            }
        case PSYCHIATRIST_LOGIN_SUCCESS:
            localStorage.setItem("token",action.payload.token);
            return {
                ...state,
                token:action.payload.token,
                isAuthenticated:true,
                role:action.payload,
                loading:false,
                error:null
            }        
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case LOGOUT_PSYCHIATRIST:
            localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }    
        default:
            return state
    }
}

