import { ADD_PSYCH_PROFILE,LOAD_PSYCH_PROFILE,PSYCH_PROFILE_EROOR,PSYCH_PROFILE_FORM,LOAD_ALL_PSYCH_PROFILE} from "../types";

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
    case LOAD_ALL_PSYCH_PROFILE:
      return {
        ...state,
        // psychProfiles:[...state.psychProfiles,payload]
        psychProfiles:payload
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
   
      
    default:
      return state;
  }
};
