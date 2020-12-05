import {combineReducers} from "redux";
import Psych_profile_reducer from "./PsychProfile/psych_profile_reducer";
import Psych_social_reducer from "./PsychSocial/psych_social_reducer";
import Schedule_reducer from "./Schedule/schedule_reducer";
import User_appt_reducer from "./UserAppointment/user_appt_reducer";
import Psych_appointment from "./PsychAppointment/psych_appointment_reducer";
import Video_call_reducer from "./VideoCall/video_call_reducer"
export default combineReducers({
    psychProfile:Psych_profile_reducer,
    psychSocial:Psych_social_reducer,
    schedule:Schedule_reducer,
    userAppt:User_appt_reducer,
    psychAppointment:Psych_appointment,
    videoCall:Video_call_reducer
})