import { ADD_PSYCH_PROFILE,LOAD_PSYCH_PROFILE,PSYCH_PROFILE_EROOR,PSYCH_PROFILE_FORM,LOAD_ALL_PSYCH_PROFILE} from "../types";
import {GET_AVATAR,DOESNT_HAVE_AVATAR,LOAD_ALL_PSYCHS_BASIC_PROFILE, LOAD_PSYCH_BASIC_PROFILE,GET_PSYCH_CREDENTIAL} from "./type";
const initialState = {
  psychProfiles: [],
  psychProfile: null,
  psychsBasicProfile:[],
  psychBasicProfile:null,
  psychProfileForm:{},
  error: null,
  avatar:null
};

export default (state = initialState, action) => {
  const {type,payload} = action
  // const {psychProfileForm} = initialState
  switch (type) {
    case GET_AVATAR:
      return {
        ...state,
        avatar:payload
      }
    case DOESNT_HAVE_AVATAR: 
      return {
        ...state,
        avatar:null
      }  
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
        psychProfiles:payload
        // psychProfiles:[...state.psychProfiles,payload]
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
    case LOAD_ALL_PSYCHS_BASIC_PROFILE:
      return {
        ...state,
        psychsBasicProfile:payload
      }
    case LOAD_PSYCH_BASIC_PROFILE:
      return {
        ...state,
        psychBasicProfile:payload
      }  
    default:
      return state;
  }
};
