import io from "socket.io-client";
import {
    STORE_CLIENT_INFO,
    MAKE_CALL,
    RECIVE_CALL,
    SET_STREAM,
    RECIVE_TXT_MESSAGE,
    SEND_TXT_MESSAGE,
    RECIVE_VIDEO_CALL,
    MAKE_VIDEO_CALL
} from "./types"
const socket = io();
// let socket
export const storeClientInfo = (id) => (dispatch) => {
    console.log("From client",id);
    socket.emit("storeClientInfo",{customId:id});
    dispatch({type:STORE_CLIENT_INFO})
}

export const callUser = (id,caller) => (dispatch) => {
    socket.emit("callUser",id,caller);
    dispatch({type:MAKE_CALL})
}

export const reciveCall = () => (dispatch) => {
    socket.on("reciveeCall",caller => {
        console.log("RecivingCall",caller);
        dispatch({type:RECIVE_CALL,payload:caller})
    })
}

export const sendTextMessage = (reciver,message) => (dispatch) => {
    socket.emit("sendMessage",reciver,message);
    dispatch({type:SEND_TXT_MESSAGE});
}

export const reciveTextMessage = () => (dispatch) => {
    socket.on("msg", msg => {
        console.log("message recived");
        console.log(msg);
        // dispatch({type:RECIVE_TXT_MESSAGE,payload:msg})
    })
}

export const makeVideoCall = (userToCall,peerId) => (dispatch) => {
    console.log("making video call");
    socket.emit("videoCall",userToCall,peerId);
    dispatch({type:MAKE_VIDEO_CALL});
}

export const reciveVideoCall = () => (dispatch) => {
    console.log("reciving video call");
    socket.on("user-connected", (userId) => {
        console.log("reciving video call with userId",userId);
        dispatch({type:RECIVE_VIDEO_CALL,payload:userId});
    })
}







// socket.on("reciveCall",(data) => (dispatch) => {
//     console.log("reciving a call");
//     dispatch({type:RECIVE_CALL,payload:data})
// })

export const initializeStream = () => (dispatch) => {
    navigator.mediaDevices.getUserMedia(({
        video:true,
        audio:true
    })).then((stream) => {
        dispatch({type:SET_STREAM,payload:stream})
    })
}
