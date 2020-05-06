import React, { useReducer } from "react";
import io from "socket.io-client";
import axios from "axios";

import GroupChatContext from "./groupChatContext";
import GroupChatReducer from "./groupChatReducer";
import { CREATE_ROOM, LOAD_ROOM,SET_CURRENT_ROOM,ROOM_ERROR,NEW_MESSAGE,SET_CURRENT_MESSAGE } from "../../types";

const GroupChatState = (props) => {
  const socket = io("http://localhost:5000");

  const initialState = {
    rooms: [],
    error: null,
    currentRoom:null,
    newMessage:null,
    currentMessage:null
  };

  const [state, dispatch] = useReducer(GroupChatReducer, initialState);

  const loadRooms = async() => {
    try {
        const res = await axios.get("/vp/room");
        dispatch({type:LOAD_ROOM,payload:res.data});
    } catch (error) {
        dispatch({type:ROOM_ERROR})
    }
  };

 

  const createRoom = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/vp/room", formData, config);
    dispatch({ type: CREATE_ROOM, payload: res.data });
  };

  const setCurrentRoom = (roomData) => {
    dispatch({type:SET_CURRENT_ROOM,payload:roomData});
    socket.emit("join",roomData)
  }

  socket.on("message",(message) => {
      dispatch({type:NEW_MESSAGE,payload:message});
  });

  const setCurrentMessage = (message) => {
    socket.emit("send",message);
    dispatch({type:SET_CURRENT_MESSAGE,payload:message.text})
  }

  return (
    <GroupChatContext.Provider
      value={{
        rooms: state.rooms,
        newMessage:state.newMessage,
        currentRoom:state.currentRoom,
        error: state.error,
        loadRooms,
        createRoom,
        setCurrentRoom,
        setCurrentMessage
      }}
    >
      {props.children}
    </GroupChatContext.Provider>
  );
};

export default GroupChatState;
