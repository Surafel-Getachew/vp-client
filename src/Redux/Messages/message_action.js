import axios from "axios";
import {
    GET_MESSAGES,
    SAVE_MESSAGES
} from "./types"


export const getMessages = (sender,reciver) => async(dispatch) => {
    try {
        const res = await axios.get(`/vp/psych/message/${sender}/${reciver}`);
        dispatch({type:GET_MESSAGES,payload:res.data});
    } catch (error) {
        
    }
}

export const saveMessage = (formData) => async (dispatch) => {
    const config = {
        headers: {
          "Content-Type":"application/json"
        }
      }
    try {
        const res = await axios.post("/vp/psych/message",formData,config)
        dispatch({type:SAVE_MESSAGES});
    } catch (error) {
        
    }
}