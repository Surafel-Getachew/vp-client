import {ADD_PARTICIPANT} from "./types"
export default (state,action) => {
    switch (action.type) {
        case ADD_PARTICIPANT: 
        return {
            ...state,
            participants:[...state.participants,action.payload]
        }
        default: return state;
    }
}