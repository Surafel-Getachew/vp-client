import axios from "axios";
import {
    GET_MESSAGES
} from "./types"


export const getMessages = (sender,reciver) => async(dispatch) => {
    try {
        const res = await axios.get(`/vp/psych/message/${sender}/${reciver}`);
        dispatch({type:GET_MESSAGES,payload:res.data});
    } catch (error) {
        
    }
}