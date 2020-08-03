import { ADD_PSYCH_PROFILE,LOAD_PSYCH_PROFILE,PSYCH_PROFILE_EROOR,PSYCH_PROFILE_FORM,SUBMIT_PSCY_PROFILE_FORM } from "../types";

const initialState = {
  psychProfiles: [],
  psychProfile: null,
  psychProfileForm:{},
  error: null,
};

export default (state = initialState, action) => {
  const {type,payload} = action
  // const {psychProfileForm} = initialState
  switch (type) {
    case ADD_PSYCH_PROFILE:
      return {
        ...state,
        psychProfile:payload,
      };
    case LOAD_PSYCH_PROFILE:
      return {
        ...state,
        psychProfile:payload
      }
    case PSYCH_PROFILE_FORM:
      return {
        psychProfileForm:payload,
        ...state,
      }  
    case PSYCH_PROFILE_EROOR:
      return {
        error: action.psyload,
      };
    case SUBMIT_PSCY_PROFILE_FORM:
      return {

      }  
      
    default:
      return state;
  }
};
