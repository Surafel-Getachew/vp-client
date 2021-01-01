import {
    CREATE_ROOM,
    LOAD_PSYCH_ROOM,
    DELETE_ROOM
} from "./types"

const initialState = {
    room:null,
    psychRooms:[],
    refresh:false
}

export default (state=initialState,action) => {
    switch(action.type) {
        case CREATE_ROOM:
            return {
                ...state,
                refresh:!state.refresh
            }
        case LOAD_PSYCH_ROOM:
            return {
                ...state,
                psychRooms:action.payload
            }
        case DELETE_ROOM:
            return {
                ...state,
                refresh:!state.refresh
            }    
        default:
            return state;
    }
}