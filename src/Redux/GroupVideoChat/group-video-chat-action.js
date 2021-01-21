import axios from "axios";
// import PsychGroupVideoChat from "../../pages/Psychiatrist/PsychGroupVideoChat/PsychGroupVideoChat";
import {CREATE_ROOM,LOAD_PSYCH_ROOM,DELETE_ROOM, GET_ALL_ROOMS,GET_ROOMS_BY_CATEGORY,SEARCH_FOR_ROOM,PSYCH_SEARCH_ROOM,ADMIN_DELETE_GROUP,SET_CURRENT_ROOM,
    UPDATE_ROOM,TOTAL_ROOM} from "./types"
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

export const getAllRooms = () => async (dispatch) => {
    try {
        const res = await axios.get("/vp/groupVideoChat/all")
        dispatch({type:GET_ALL_ROOMS,payload:res.data});
    } catch (error) {
        
    }
}

export const getRoomsByCategory = (category) => async (dispatch) => {
    console.log("Category",category);
    try {
        const res = await axios.post("/vp/groupVideoChat/category",category,config);
        dispatch({type:GET_ROOMS_BY_CATEGORY,payload:res.data})
    } catch (error) {
        
    }
}

export const searchForRoom = (searchText) => async (dispatch) => {
    try {
        const res = await axios.post("/vp/groupVideoChat/search/all",searchText,config);
        dispatch({type:SEARCH_FOR_ROOM,payload:res.data});
    } catch (error) {
        
    }
}

export const searchRoomForPsych = (searchText) => async(dispatch) => {
    console.log(searchText);
    try {
        const res = await axios.post("/vp/groupVideoChat/psychiatrist/search",searchText,config);
        dispatch({type:PSYCH_SEARCH_ROOM,payload:res.data});
    } catch (error) {
        
    }
}

export const setCurrentRoom = (room) => (dispatch) => {
    dispatch({type:SET_CURRENT_ROOM,payload:room});
} 

export const adminDeleteRoom = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`/vp/groupVideoChat/admin/${id}`)
        dispatch({type:ADMIN_DELETE_GROUP})
    } catch (error) {
        
    }
}

export const updateRoom = (id,formData) => async(dispatch) => {
    try {
        const res = await axios.patch(`/vp/groupVideoChat/${id}`,formData,fileConfig);
        dispatch({type:UPDATE_ROOM});
        console.log(formData)
    } catch (error) {
        
    }
}

export const getTotalRooms = () => async (dispatch) => {
    try {
        const res = await axios.get("/vp/groupVideoChat/admin/total");
        dispatch({type:TOTAL_ROOM,payload:res.data});
    } catch (error) {
        
    }
}