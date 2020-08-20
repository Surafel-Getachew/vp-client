import React,{useReducer} from 'react';
import VideoChatContext from "./videoChatContext";
import VideoChatReducer from "./VideoChatReducer";
import {ADD_PARTICIPANT} from "./types"

const VideoChatState = (props) => {
    const initialState = {
        participants:[],
    }

    const [state,dispatch] = useReducer(VideoChatReducer,initialState);

    const addParticipant = (participantName) => {
        dispatch({type:ADD_PARTICIPANT,payload:participantName});
    }    
    return (
        <VideoChatContext.Provider
            value = {{
                participants: state.participants,
                addParticipant,
            }}
        >
         {props.children}   
        </VideoChatContext.Provider>
    )
}

export default VideoChatState
