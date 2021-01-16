import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_WITH_GOOGLE,
  PSYCHIATRIST_LOGIN_SUCCESS,
  LOGIN_FAIL,
  RESET_PASSWRORD_EMAIL,
  RESET_PASSWRORD_EMAIL_ERROR,
  RESET_PASSWRORD,
  LOGOUT,
  LOGOUT_PSYCHIATRIST,
  CLEAR_ERRORS,
  REGISTER_SUCCESS_PSYCHIATRIST,
  PSYCHIATRIST_LOADED,
  FOUND_LOGGEDIN_USER,
  SHOW_FORGOT_PASSWORD,
  DELETE_PSYCHIATRIST
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FOUND_LOGGEDIN_USER: {
      return {
        foundLoggedInUser: action.payload,
      };
    }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        role: action.payload.role,
        // user:[...state.user,action.payload],
      };
    case PSYCHIATRIST_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        psychiatrist: action.payload,
        role: action.payload.role,
        // psychiatrist:[...state.psychiatrist,action.payload],
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS_PSYCHIATRIST:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        // token:action.payload.token,
        // role:action.payload.role,
      };
    case LOGIN_WITH_GOOGLE:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,  // if any error happens it may be because of this try to remove it and check.
        isAuthenticated: true,
        loading: false,
        token: action.payload,
        error: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        role: action.payload.role,
        // token: action.payload.token,
        // error: null,
      };
    case PSYCHIATRIST_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        role: action.payload.role,
        // token: action.payload.token,
        // error: null,
      };
    // case REGISTER_FAIL:
    // case AUTH_ERROR:
    // case LOGIN_FAIL:
    case LOGOUT:
    case LOGOUT_PSYCHIATRIST:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case AUTH_ERROR:  
    case LOGIN_FAIL:  
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token:null,
        error: action.payload,
        isAuthenticated:false,
        loading:false,
        token:null
        // emailInUse: action.payload,
      };
    case RESET_PASSWRORD_EMAIL:
      return {
        ...state,
        successMsg: action.payload,
        responseMsg:action.payload,
      };

    case RESET_PASSWRORD_EMAIL_ERROR:
      return {
        ...state,
        error: action.payload,
        responseMsg:action.payload,
      };
    case RESET_PASSWRORD: {
      return {
        ...state,
      };
    }
    case SHOW_FORGOT_PASSWORD:
      return {
        ...state,
        showForgotPasswordState: !state.showForgotPasswordState,
      };
    case DELETE_PSYCHIATRIST:
      return {
        ...state,
        refresh:!state.refresh
      }
    default:
      return state;
  }
};
