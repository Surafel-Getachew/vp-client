import { CREATE_ROOM } from "../../types";

export default (state, action) => {
  switch (action.payload) {
    case CREATE_ROOM:
      return {
          ...state,
          rooms:[...state.rooms,action.payload]
      };
    default:
      return state;
  }
};
