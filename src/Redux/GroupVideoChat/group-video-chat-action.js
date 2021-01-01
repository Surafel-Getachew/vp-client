import axios from "axios";
import {CREATE_ROOM,LOAD_PSYCH_ROOM,DELETE_ROOM} from "./types"
const config = {
    headers:{
        "Content-Type":"application/json"
    }
}
const fileConfig = {
    header:{
        "Content-Type":"multipart/form-data"
    }
}
export const createRoom = (formData) => async(dispatch) => {
    try {
        const res = await axios.post("/vp/groupVideoChat/createGroup",formData,fileConfig);   
        dispatch({type:CREATE_ROOM})   
    } catch (error) {
        
    }
}

export const getMyRooms = () => async(dispatch) => {
    try {
        const res = await axios.get("/vp/groupVideoChat/myRooms")
        dispatch({type:LOAD_PSYCH_ROOM,payload:res.data})
    } catch (error) {
        
    }
}

export const deleteRoom = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/vp/groupVideoChat/${id}`);
        dispatch({type:DELETE_ROOM})
    } catch (error) {
        
    }
}

