import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// context
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ArticleState from "./context/article/ArticleState";
import PsychState from "./context/psych/PsychState";
// import ChatContext from "./context/groupChat/GroupChatState";
import VideoChatState from "./context/video_chat/VideoChatState";

// private route
import PsychPrivateRoute from "./component/Routes/PsychPrivateRoute"
import UserPrivateRoute from "./component/Routes/UserPrivateRoute"
// Landing pages
import Landing from "./pages/Landing/Landing";

// UserPage
import UserDashBoard from "./pages/User/Dashboard/UserDashBoard";
import PsychiatristList from "./pages/User/List_of_psychiatrist/PsychiatristList";
import Signup from "./pages/User/Auth/NewAuth/SignUp";
import Signin from "./pages/User/Auth/NewAuth/SignIn";
import UserAppointment from "./pages/User/Appointment/UserAppointment";
// psych pages
import PsychiatristDashboard from "./pages/Psychiatrist/PsychDashboard/PsychDashboard";
import PsychSignin from "./pages/Psychiatrist/PsychAuth/NewAuth/SignIn";
import PsychSignup from "./pages/Psychiatrist/PsychAuth/NewAuth/SignUp";
import PsychArticle from "./pages/Psychiatrist/PsychArticle/PsychArticle";
import PsychiatristProfileForm from "./pages/Psychiatrist/PsychProfile/PsychiatristProfileForm";
import PsychSocial from "./pages/Psychiatrist/PsychSocial/PsychSocial";
import PsychSchedule from "./pages/Psychiatrist/PsychSchedule/PsychSchedule";
import PsychMessage from "./pages/Psychiatrist/PsychMessage/PsychMessage";
// import PsychSchedule from "./pages/Psychiatrist/PsychSchedule/PsychAppointment";
import PsychVideoChat from "./pages/Psychiatrist/PsychVideoChat/PsychVideoChat";
import PsychDetailProfile from "./pages/Psychiatrist/PsychProfile/PsychDetailProfile";
// import VideoChatRoom from "./pages/Psychiatrist/PsychVideoChat/VideoChatRoom";

// video chats that are not yet decided and completed.
import VideoCall from "./pages/Psychiatrist/videoChat/Video";

import ForgotPasswordEmail from "./component/ForgotPasswordEmail/ForgotPasswordEmail";
import ResetPassword from "./component/ResetPassword/ResetPassword";

import IncomingCall from "./component/IncomingCall/IncomingCall";
import UserLayout from "./pages/User/Layout/Layout"
// adding auth token to global header so that will not send it every time.
import setAuthToken from "./utils/setAuthToken";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Apps = () => {
  return (
    <AuthState>
      <AlertState>
        <ArticleState>
          <PsychState>
            <VideoChatState>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  {/* <Route exact path = "/videochat" component = {VideoTrial}/> */}
                  <Route exact path="/forgot" component={ForgotPasswordEmail} />
                  <Route exact path="/incoming" component={IncomingCall} />
                  <Route exact path="/userlayout" component={UserLayout} />
                  <Route
                    exact
                    path="/reset-password"
                    component={ResetPassword}
                  />
                  <Route
                    exact
                    path="/vp/videocall"
                    component={VideoCall}
                  />
                  <UserPrivateRoute
                    exact
                    path="/vp/user/dashboard"
                    component={UserDashBoard}
                  />
                  <Route exact path="/vp/user/signup" component={Signup} />
                  <Route exact path="/vp/user/signin" component={Signin} />
                  <UserPrivateRoute
                    exact
                    path="/vp/user/psychiatrists"
                    component={PsychiatristList}
                  />
                  <Route 
                    exact 
                    path = "/vp/user/appointment"
                    component = {UserAppointment}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/dashboard"
                    component={PsychiatristDashboard}
                  />
                  <Route
                    exact
                    path="/vp/psychiatrist/signin"
                    component={PsychSignin}
                  />
                  <Route
                    exact
                    path="/vp/psychiatrist/signup"
                    component={PsychSignup}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/article"
                    component={PsychArticle}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/profile-setting"
                    component={PsychiatristProfileForm}
                  />
                  <Route
                    exact
                    path="/vp/psychiatrist/detail-profile"
                    component={PsychDetailProfile}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/socialmedia"
                    component={PsychSocial}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/videochat"
                    component={PsychVideoChat}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/schedule"
                    component={PsychSchedule}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/message"
                    component={PsychMessage}
                  />
                  {/* <Route exact path ="/vp/try" component = {Try} /> */}
                  {/* <Route exact path ="/chat" component = {ChatPage} /> */}
                </Switch>
              </BrowserRouter>
            </VideoChatState>
          </PsychState>
        </ArticleState>
      </AlertState>
    </AuthState>
  );
};

export default Apps;
