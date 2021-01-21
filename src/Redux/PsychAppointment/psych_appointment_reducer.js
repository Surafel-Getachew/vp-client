import  {
    GET_PSYCH_APPOINTMENT,
    GET_ALL_PSYCH_APPOINTMENT,
    PSYCH_APPOINTMENT_ERROR,
    GET_APPOINTED_USERS_PROFILE,
    GET_PSYCHS_TOTAL_APPOINTMENT,
    GET_TOTAL_APPT_EACH_DAY
} from "./types";

const initialState = {
    psychAppointment:null,
    allPsychAppointment:null,
    psychAppointmentError:null,
    appointedUsersProfile:[],
    psychTotalAppointment:"",
    totalApptEachDay:null
}

export default (state = initialState,action) => {
    switch(action.type) {
        case GET_PSYCH_APPOINTMENT:
            console.log("psych appointment");
            return {
                ...state,
                psychAppointment:action.payload
            };
        case GET_ALL_PSYCH_APPOINTMENT:
            // console.log("psych appointment");
            return {
                ...state,
                allPsychAppointment:action.payload
            };
        case PSYCH_APPOINTMENT_ERROR:
            return {
                ...state,
                psychAppointmentError:action.payload
            }
        case GET_APPOINTED_USERS_PROFILE:
            return {
                ...state,
                appointedUsersProfile:action.payload
            }
        case GET_PSYCHS_TOTAL_APPOINTMENT:
            return{
                ...state,
                psychTotalAppointment:action.payload
            }
        case GET_TOTAL_APPT_EACH_DAY:
            return {
                ...state,
                totalApptEachDay:action.payload
            }    
        default: 
            return state;    
    }
}