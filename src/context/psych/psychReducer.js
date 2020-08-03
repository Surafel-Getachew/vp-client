import { LOAD_ALL_PSYCH } from "./types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_ALL_PSYCH:
      return {
        ...state,
        psychs: action.payload,
      };
    default:
      return state;
  }
};
