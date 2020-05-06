import React, { useReducer } from "react";
import io from "socket.io-client";
import axios from "axios";

import GroupChatContext from "./groupChatContext";
import GroupChatReducer from "./groupChatReducer";
import { CREATE_ROOM, LOAD_ROOM,ROOM_ERROR } from "../../types";

const GroupChatState = (props) => {
//   const socket = io("http://localhost:5000");

  const initialState = {
    rooms: [],
    error: null,
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

  return (
    <GroupChatContext.Provider
      value={{
        rooms: state.rooms,
        error: state.error,
        loadRooms,
        createRoom,
        
      }}
    >
      {props.children}
    </GroupChatContext.Provider>
  );
};

export default GroupChatState;
