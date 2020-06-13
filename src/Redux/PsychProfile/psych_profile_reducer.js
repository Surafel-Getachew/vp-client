import { ADD_PSYCH_PROFILE, PSYCH_PROFILE_EROOR } from "./types";

const initialState = {
  psychProfiles: [],
  psychProfile: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PSYCH_PROFILE:
      return {
        psychProfile: action.payload,
      };
    case PSYCH_PROFILE_EROOR:
      return {
        error: action.psyload,
      };

    default:
      return state;
  }
};
