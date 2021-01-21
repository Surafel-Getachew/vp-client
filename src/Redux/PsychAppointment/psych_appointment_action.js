import axios from "axios";
import {
    GET_PSYCH_APPOINTMENT,
    GET_ALL_PSYCH_APPOINTMENT,
    PSYCH_APPOINTMENT_ERROR,
    GET_APPOINTED_USERS_PROFILE,
    GET_PSYCHS_TOTAL_APPOINTMENT,
    GET_TOTAL_APPT_EACH_DAY
} from "./types"

export const getAllPsychAppointment = () => async(dispatch) => {
    try {
        const res = await axios.get("/vp/psych/appointment");
        dispatch({type:GET_ALL_PSYCH_APPOINTMENT,payload:res.data});
    } catch (error) {
        dispatch({type:PSYCH_APPOINTMENT_ERROR,payload:error.response.data.msg});
    }
}

export const getPsychAppointment = (date) => async(dispatch) => {
    try {
        const res = await axios.get(`/vp/psych/appointment/my-appointment/${date}`);
        dispatch({type:GET_PSYCH_APPOINTMENT,payload:res.data});
    } catch (error) {
        dispatch({type:PSYCH_APPOINTMENT_ERROR,payload:error.response.data.msg});
    }
}

export const getAppointedUsersProfile = (date) => async (dispatch) => {
    try {
        const res = await axios.get(`/vp/psych/appointment/appointedUserProfile/${date}`);
        dispatch({type:GET_APPOINTED_USERS_PROFILE,payload:res.data});
    } catch (error) {
    }
}

export const getPsychTotalAppointment = () => async (dispatch) => {
    try {
        const res = await axios.get("/vp/psych/appointment/totalNumbeOfAppt");
        dispatch({type:GET_PSYCHS_TOTAL_APPOINTMENT,payload:res.data});
    } catch (error) {
        
    }
}

export const getTotalApptEachDay = () => async(dispatch) => {
    try {
        const res = await axios.get("/vp/psych/appointment/admin/allAppointment")
        dispatch({type:GET_TOTAL_APPT_EACH_DAY,payload:res.data})
    } catch (error) {
        
    }
}
