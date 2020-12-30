import axios from "axios";
import {CREATE_ROOM} from "./types"
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
    } catch (error) {
        
    }
}