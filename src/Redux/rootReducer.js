import {combineReducers} from "redux";
import Psych_profile_reducer from "./PsychProfile/psych_profile_reducer";

export default combineReducers({
    psychProfile:Psych_profile_reducer
})