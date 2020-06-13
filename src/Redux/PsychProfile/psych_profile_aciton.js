import axios from "axios";
import {ADD_PSYCH_PROFILE,PSYCH_PROFILE_EROOR} from "./types";

export const addPsychProfile = (formData) => async(dispatch) => {
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    try {
        const res = await axios.post("/vp/psych/profile", formData,config);
        dispatch({type:ADD_PSYCH_PROFILE,payload:res.data});
    } catch (error) {
        dispatch({type:PSYCH_PROFILE_EROOR,payload:error});
    }
}