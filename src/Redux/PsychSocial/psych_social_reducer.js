import { ADD_PSYCH_SOCIAL, PSYCH_SOCIAL_EROOR } from "../types";

const initialState = {
  psychSocial: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PSYCH_SOCIAL: {
      return {
        ...state,
        psychSocial: action.payload,
      };
    }
    case PSYCH_SOCIAL_EROOR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
