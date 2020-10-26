import { ADD_USER_APPT, USER_APPT_ERROR,CLEAR_APPT_MSG } from "./types";

const initialState = {
  successMsg: "",
  errorMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_APPT:
      return {
        ...state,
        successMsg: action.payload,
      };
    case USER_APPT_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case CLEAR_APPT_MSG: 
      return {
        ...state,
        errorMsg:"",
        successMsg:""
      }
    default:
      return state;
  }
};
