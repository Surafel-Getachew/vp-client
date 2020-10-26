import { CREATE_ROOM, LOAD_ROOM,SET_CURRENT_ROOM,NEW_MESSAGE,ROOM_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_ROOM:{
        return{
            ...state,
            rooms:action.payload,
            error:null
        }
    }

    case CREATE_ROOM:
      return {
          ...state,
          rooms:[...state.rooms,action.payload],
          error:null
      }

    case SET_CURRENT_ROOM:{
        return {
            ...state,
            currentRoom:action.payload
        }
    }
    case NEW_MESSAGE:{
        return {
            ...state,
            newMessage:action.payload
        }
    }
    default:
      return state;
  }
};
