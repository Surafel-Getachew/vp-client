import {
    GET_MESSAGES
} from "./types";

const initialState = {
    messageTexts : []
}

export default (state=initialState,action) => {
    switch(action.type){
        case GET_MESSAGES:
            return {
                ...state,
                messageTexts:action.payload
            }
        default: 
            return state;
    }

}