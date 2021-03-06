import { ADD_USER_APPT, USER_APPT_ERROR,CLEAR_APPT_MSG,TODAYS_APPT,DELETE_USER_APPT
} from "./types";

const initialState = {
  successMsg: "",
  errorMsg: "",
  todaysAppt:null,
  refresh:false
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
    case  TODAYS_APPT:
      return {
        ...state,
        todaysAppt:action.payload
      }
    case DELETE_USER_APPT:
      return {
        ...state,
        refresh:!state.refresh
      }    
    default:
      return state;
  }
};
