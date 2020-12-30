import {
    CREATE_ROOM
} from "./types"

const initialState = {
    room:null
}

export default (state=initialState,action) => {
    switch(action.type) {
        case CREATE_ROOM:
            return {
                ...state
            }

        default:
            return state;
    }
}