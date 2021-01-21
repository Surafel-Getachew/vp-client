import axios from "axios";
import {
    ADD_USER_PROFILE,
    LOAD_USER_PROFILE,
    GET_USER_PROFILE,
    GET_ALL_USERS_PROFILE,
    DELETE_USER,
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

export const getUserProfile = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/vp/user/profile/${id}`)
        dispatch({type:GET_USER_PROFILE,payload:res.data})
    } catch (error) {
        
    }
}

export const getAllUsersProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("/vp/user/profile/all/basic")
        dispatch({type:GET_ALL_USERS_PROFILE,payload:res.data});
    } catch (error) {
        
    }    

}

export const deleteUser = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/vp/users/${id}`);
        dispatch({type:DELETE_USER,payload:res.data});
    } catch (error) {
        
    }
}