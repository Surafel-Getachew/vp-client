import { CREATE_ROOM, LOAD_ROOM, GET_ROOM,ROOM_ERROR } from "../../types";

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
      };
    default:
      return state;
  }
};
