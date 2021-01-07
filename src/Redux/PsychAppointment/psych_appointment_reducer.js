import  {
    GET_PSYCH_APPOINTMENT,
    GET_ALL_PSYCH_APPOINTMENT,
    PSYCH_APPOINTMENT_ERROR,
    GET_APPOINTED_USERS_PROFILE
} from "./types";

const initialState = {
    psychAppointment:null,
    allPsychAppointment:null,
    psychAppointmentError:null,
    appointedUsersProfile:[]
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
        default: 
            return state;    
    }
}