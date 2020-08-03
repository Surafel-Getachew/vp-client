import {combineReducers} from "redux";
import Psych_profile_reducer from "./PsychProfile/psych_profile_reducer";
import Psych_social_reducer from "./PsychSocial/psych_social_reducer";

export default combineReducers({
    psychProfile:Psych_profile_reducer,
    psychSocial:Psych_social_reducer
})