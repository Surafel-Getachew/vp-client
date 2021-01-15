import {
    ADMIN_SIGNUP,
    ADMIN_SIGNUP_FAIL,
    ADMIN_SIGNIN,
    ADMIN_SIGNIN_FAIL,
    LOAD_ADMIN,
    LOGOUT_ADMIN
} from "./types"

export default (state,action) => {
    switch(action.type) {
        case LOAD_ADMIN:
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                admin:action.payload
            }
        case ADMIN_SIGNUP:
            localStorage.setItem("token",action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }
        case ADMIN_SIGNIN:
            localStorage.setItem("token",action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }
        case ADMIN_SIGNUP_FAIL:
        case ADMIN_SIGNIN_FAIL:
            return {
                ...state,
                token:null,
                error:action.payload,
                isAuthenticated:false,
                token:null
            }
        case LOGOUT_ADMIN:
            localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                admin:null,
            }
        default:
            return state
    }
}