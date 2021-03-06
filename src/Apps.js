import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// context
import AuthState from "./context/auth/AuthState";
import AdminAuthstate from "./context/adminAuth/AdminAuthState";
import AlertState from "./context/alert/AlertState";
import ArticleState from "./context/article/ArticleState";
import PsychState from "./context/psych/PsychState";
// import ChatContext from "./context/groupChat/GroupChatState";
import VideoChatState from "./context/video_chat/VideoChatState";

// private route
import PsychPrivateRoute from "./component/Routes/PsychPrivateRoute"
import UserPrivateRoute from "./component/Routes/UserPrivateRoute"
import AdminPrivateRoute from "./component/Routes/AdminPrivateRoute"
// Landing pages
import Landing from "./pages/Landing/Landing";

// UserPage
import UserDashBoard from "./pages/User/Dashboard/UserDashBoard";
import PsychiatristList from "./pages/User/List_of_psychiatrist/PsychiatristList";
import Signup from "./pages/User/Auth/NewAuth/SignUp";
import Signin from "./pages/User/Auth/NewAuth/SignIn";
import UserAppointment from "./pages/User/Appointment/UserAppointment";
import UserProfileForm from "./pages/User/ProfileSetting/UserProfileForm"
import UserArticle from "./pages/User/UserArticle/UserArticle"
import UserGroupVideoChat from "./pages/User/GroupVideoChat/UserGroupVideoChat";
import UserChangePassword from "./pages/User/UserChangePassword/UserChangePassword";
// psych pages
import PsychiatristDashboard from "./pages/Psychiatrist/PsychDashboard/PsychDashboard";
import PsychSignin from "./pages/Psychiatrist/PsychAuth/NewAuth/SignIn";
import PsychSignup from "./pages/Psychiatrist/PsychAuth/NewAuth/SignUp";
import PsychArticle from "./pages/Psychiatrist/PsychArticle/PsychArticle";
import PsychiatristProfileForm from "./pages/Psychiatrist/PsychProfile/PsychiatristProfileForm";
import PsychSocial from "./pages/Psychiatrist/PsychSocial/PsychSocial";
import PsychSchedule from "./pages/Psychiatrist/PsychSchedule/PsychSchedule";
import PsychMessage from "./pages/Psychiatrist/PsychMessage/PsychMessage";
import VideoCall from "./pages/Psychiatrist/videoChat/Video";
import PsychVideoChat from "./pages/Psychiatrist/PsychVideoChat/PsychVideoChat";
import PsychDetailProfile from "./pages/Psychiatrist/PsychProfile/PsychDetailProfile";
import PsychGroupVideoChat from "./pages/Psychiatrist/PsychGroupVideoChat/PsychGroupVideoChat";
import PsychChangePassword from "./pages/Psychiatrist/PsychChangePassword/PsychChangePassword";
// import PsychSchedule from "./pages/Psychiatrist/PsychSchedule/PsychAppointment";
// import VideoChatRoom from "./pages/Psychiatrist/PsychVideoChat/VideoChatRoom";

// Admin page 
import AdminSignup from "./pages/Admin/Auth/Signup";
import AdminSignin from "./pages/Admin/Auth/Signin";
import AdminDashboard from "./pages/Admin/Dashboard/Dashboard";
import AdminPsychiatrists from "./pages/Admin/Psychiatrists/Psychiatrists";
import AdminArticles from "./pages/Admin/Articles/Articles";
import AdminGroupVideoChat from "./pages/Admin/GroupVideoChat/GroupVideoChat";
import AdminUser from "./pages/Admin/Users/Users"
import AdminChangePassword from "./pages/Admin/AdminChangePassword/AdminChangePassword";
// Public Page
import PublicArticle from "./pages/PublicArticle/PublicArticle";
import GroupTherapyRoom from "./pages/GroupTherapyRoom/GroupTherapyRoom"
// video chats that are not yet decided and completed.

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
      <AdminAuthstate>
      <AlertState>
        <ArticleState>
          <PsychState>
            <VideoChatState>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/vp/article/:articleId" component={PublicArticle} />
                  <Route exact path="/vp/group-therapy-room/:roomId" component={GroupTherapyRoom} />
                  {/* <Route exact path = "/videochat" component = {VideoTrial}/> */}
                  <Route exact path="/forgot" component={ForgotPasswordEmail} />
                  {/* <Route exact path="/incoming" component={IncomingCall} />
                  <Route exact path="/userlayout" component={UserLayout} /> */}
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
                  <UserPrivateRoute
                    exact
                    path="/vp/user/article"
                    component={UserArticle}
                  />
                  <UserPrivateRoute
                    exact
                    path="/vp/user/group-video-chat"
                    component={UserGroupVideoChat}
                  />
                  <UserPrivateRoute
                    exact
                    path="/vp/user/profile-setting"
                    component={UserProfileForm}
                  />
                  <UserPrivateRoute
                    exact
                    path="/vp/user/change-password"
                    component={UserChangePassword}
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
                    path="/vp/psychiatrist/groupvideochat"
                    component={PsychGroupVideoChat}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/schedule"
                    component={PsychSchedule}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/change-password"
                    component={PsychChangePassword}
                  />
                  <PsychPrivateRoute
                    exact
                    path="/vp/psychiatrist/message/:userId"
                    component={PsychMessage}
                  />
                  <Route
                    exact
                    path="/vp/admin/signup"
                    component={AdminSignup}
                  />
                  <Route
                    exact
                    path="/vp/admin/signin"
                    component={AdminSignin}
                  />
                  <Route
                    exact
                    path="/vp/admin/dashboard"
                    component={AdminDashboard}
                  />
                  <Route
                    exact
                    path="/vp/admin/psychiatrists"
                    component={AdminPsychiatrists}
                  />
                  <Route
                    exact
                    path="/vp/admin/users"
                    component={AdminUser}
                  />
                  <Route
                    exact
                    path="/vp/admin/articles"
                    component={AdminArticles}
                  />
                  <Route
                    exact
                    path="/vp/admin/group-video-rooms"
                    component={AdminGroupVideoChat}
                  />
                  <Route
                    exact
                    path="/vp/admin/change-password"
                    component={AdminChangePassword}
                  />
                  
                  {/* <Route exact path ="/vp/try" component = {Try} /> */}
                  {/* <Route exact path ="/chat" component = {ChatPage} /> */}
                </Switch>
              </BrowserRouter>
            </VideoChatState>
          </PsychState>
        </ArticleState>
      </AlertState>
      </AdminAuthstate>
    </AuthState>
  );
};

export default Apps;
