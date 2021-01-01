import axios from "axios";
import {
    ADD_USER_PROFILE,
    LOAD_USER_PROFILE
} from "./types"
const fileConfig = {
    header:{
        "Content-Type":"multipart/form-data"
    }
}

export const addUserProfile = (formData) => (dispatch) => {
    try {
        const res = axios.post("/vp/user/profile",formData,fileConfig)
        dispatch({type:ADD_USER_PROFILE})
    } catch (error) {
        
    }
}

export const loadUserProfile = () => async(dispatch) => {
    try {
        const res = await axios.get("/vp/user/profile/me");
        dispatch({type:LOAD_USER_PROFILE,payload:res.data});
    } catch (error) {
        
    }
}