import {
    RECIVE_CALL,
    MAKE_CALL,
    SET_STREAM,
    SET_PARTNER_STREAM,
    SET_CALLER_SIGNAL,
    RECIVE_TXT_MESSAGE,
    RECIVE_VIDEO_CALL,
    DECLINE_CALL
} from "./types"
const initialState = {
    ringing:false,
    msg:"",
    reciver:"",
    caller:"",
    recivedTxtMessage:null,
    stream:null,
    userVideo:null,
    partnerStream:null,
    callerSignal:null,
    peerId:"",
}

export default (state = initialState,action) => {
    switch(action.type) {
        case RECIVE_CALL:
            return {
                ...state,
                ringing:true,
                caller:action.payload
            }
        case MAKE_CALL: 
            console.log("calling");  
            return {
                ...state,
                reciver:action.payload
            }
        case SET_STREAM:
            return {
                ...state,
                stream:action.payload,
                // userVideo:action.payload.userVideo
            }
        case SET_PARTNER_STREAM:
            return {
                ...state,
                partnerStream:action.payload
            }
        case SET_CALLER_SIGNAL:
            return {
                ...state,
                callerSignal:action.payload
            } 
        case RECIVE_TXT_MESSAGE:
            return {
                ...state,
                recivedTxtMessage:action.payload
            }
        case RECIVE_VIDEO_CALL:
            return {
                ...state,
                peerId:action.payload
            }
        case DECLINE_CALL:
            return {
                ...state,
                ringing:false
            }
        default:
            return state
    }
}