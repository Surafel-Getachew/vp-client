import {
    CREATE_ROOM,
    LOAD_PSYCH_ROOM,
    DELETE_ROOM,
    GET_ALL_ROOMS,
    GET_ROOMS_BY_CATEGORY,
    SEARCH_FOR_ROOM,
    PSYCH_SEARCH_ROOM
} from "./types"

const initialState = {
    room:null,
    psychRooms:[],
    allRooms:[],
    roomsByCategory:[],
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
        case GET_ALL_ROOMS:
            return {
                ...state,
                allRooms:action.payload
            }    
        case GET_ROOMS_BY_CATEGORY:
            return {
                ...state,
                roomsByCategory:action.payload
            }
        case SEARCH_FOR_ROOM:
            return {
                ...state,
                allRooms:[],
                allRooms:action.payload
            }
        case PSYCH_SEARCH_ROOM:
            return {
                ...state,
                psychRooms:[],
                psychRooms:action.payload
            }
        default:
            return state;
    }
}