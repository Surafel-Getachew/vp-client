import {
    CREATE_ROOM,
    LOAD_PSYCH_ROOM,
    DELETE_ROOM,
    GET_ALL_ROOMS,
    GET_ROOMS_BY_CATEGORY,
    SEARCH_FOR_ROOM,
    PSYCH_SEARCH_ROOM,
    ADMIN_DELETE_GROUP,
    SET_CURRENT_ROOM,
    UPDATE_ROOM,
    TOTAL_ROOM
} from "./types"

const initialState = {
    room:null,
    psychRooms:[],
    allRooms:[],
    roomsByCategory:[],
    refresh:false,
    currentRoom:null,
    totalRooms:""
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
        case ADMIN_DELETE_GROUP:
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
        case SET_CURRENT_ROOM:
            return {
                ...state,
                currentRoom:action.payload
            }
        case UPDATE_ROOM:{
            return {
                ...state,
                refresh:!state.refresh
            }
        }
        case TOTAL_ROOM:{
            return {
                ...state,
                totalRooms:action.payload
            }
        }    
        default:
            return state;
    }
}