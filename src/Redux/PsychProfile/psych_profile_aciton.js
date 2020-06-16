import axios from "axios";
import { ADD_PSYCH_PROFILE, PSYCH_PROFILE_EROOR, PSYCH_PROFILE_FORM} from "./types";

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

export const psychProfileForm =  (formData) => (dispatch) => {
    dispatch({ type: PSYCH_PROFILE_FORM,payload:formData});
    console.log(formData)
}

export const psychProfileFormSubmit = () => (dispatch) => {

}