import  {
    GET_PSYCH_APPOINTMENT,
    PSYCH_APPOINTMENT_ERROR
} from "./types";

const initialState = {
    psychAppointment:null,
    psychAppointmentError:null
}

export default (state = initialState,action) => {
    switch(action.type) {
        case GET_PSYCH_APPOINTMENT:
            console.log("psych appointment");
            return {
                ...state,
                psychAppointment:action.payload
            };
        case PSYCH_APPOINTMENT_ERROR:
            return {
                ...state,
                psychAppointmentError:action.payload
            }
        default: 
            return state;    
    }
}