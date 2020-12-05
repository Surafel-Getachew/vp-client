import axios from "axios";
import {
    GET_PSYCH_APPOINTMENT,
    PSYCH_APPOINTMENT_ERROR
} from "./types"

export const getPsychAppointment = () => async(dispatch) => {
    try {
        const res = await axios.get("/vp/psych/appointment");
        dispatch({type:GET_PSYCH_APPOINTMENT,payload:res.data});
    } catch (error) {
        dispatch({type:PSYCH_APPOINTMENT_ERROR,payload:error.response.data.msg});
    }
}