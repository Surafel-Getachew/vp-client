import { LOAD_ALL_PSYCH,LOAD_PSYCHIATRISTS_PROFILE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_ALL_PSYCH:
      return {
        ...state,
        psychs: action.payload,
      };
    case LOAD_PSYCHIATRISTS_PROFILE:
      return {
        ...state,
        psychProfiles:action.payload
      }
    default:
      return state;
  }
};
