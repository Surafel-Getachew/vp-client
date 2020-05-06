import React,{useReducer} from 'react';
import io from "socket.io-client";
import axios from "axios";

import GroupChatContext from "./groupChatContext";
import GroupChatReducer from "./groupChatReducer";
import {CREATE_ROOM} from "../../types"


const GroupChatState = (props) => {

    const socket = io("http://localhost:5000");

    const initialState = {
        rooms:[]
    }

    const [state,dispatch] = useReducer(GroupChatReducer,initialState);

    const loadRoom = async() => {
        const res = await axios.get("/vp/room");
        // dispatch({type:})
    }

    const createRoom = async(formData) => {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res = await axios.post("/vp/room",formData,config);
        dispatch({type:CREATE_ROOM,payload:res.data})
    }

    return (
        <GroupChatContext.Provider value = {{
            rooms:state.rooms,
            createRoom
        }}>
            {props.children}
        </GroupChatContext.Provider>
    )
}

export default GroupChatState;
