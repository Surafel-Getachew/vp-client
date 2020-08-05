import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// context
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ArticleState from "./context/article/ArticleState";
import PsychState from "./context/psych/PsychState";
import ChatContext from "./context/groupChat/GroupChatState";

// private route
import PrivateRoute from "./component/routing/PrivateRouting";
import UserProtectedRoute from "./component/routing/UserProtectedRoute";

// Landing pages
import Landing from "./pages/Landing/Landing";

// UserPage
import UserDashBoard from "./pages/User/Dashboard/UserDashBoard";
import PsychiatristList from "./pages/User/List_of_psychiatrist/PsychiatristList";
import Signup from "./pages/User/Auth/Signup";
import Signin from "./pages/User/Auth/Signin";


// psych pages
import PsychiatristLanding from "./pages/Psychiatrist/PsychLanding/PsychiatristLanding";
import PsychSignup from "./pages/Psychiatrist/PsychAuth/PsychSignup";
import PsychSignIn from "./pages/Psychiatrist/PsychAuth/PsychSignIn";
import PsychArticle from "./pages/Psychiatrist/PsychArticle/PsychArticle";
import Psychprofile from "./pages/Psychiatrist/PsychProfile/PsychProfile";
// import Psychprofile from "./pages/Psychiatrist/PsychProfile/Psychprofile";
import PsychSocial from "./pages/Psychiatrist/PsychSocial/PsychSocial";
import PsychSchedule from "./pages/Psychiatrist/PsychSchedule/PsychSchedule";

// Try page
import Try from "./pages/Try/Try";
import ChatPage from "./pages/Try/ChatPage";

// adding auth token to global header so that will not send it every time.
import setAuthToken from "./utils/setAuthToken";
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const Apps = () => {
  return (
    <AuthState>
      <AlertState>
        <ArticleState>
          <PsychState>
           <ChatContext>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/vp/user/signup" component={Signup} />
            <Route exact path="/vp/user/signin" component={Signin} />
            <Route exact path="/vp/user/psychiatrists" component = {PsychiatristList} />
            <UserProtectedRoute exact path="/vp/user/dashboard" component={UserDashBoard} />
            <PrivateRoute exact path="/vp/psychiatrist/dashboard" component={PsychiatristLanding} />
            <Route exact path="/psychiatrist/signup" component={PsychSignup} />
            <Route exact path="/psychiatrist/signin" component={PsychSignIn} />
            <Route exact path="/vp/psychiatrist/article" component={PsychArticle} />
            <Route exact path="/vp/psychiatrist/profile" component={Psychprofile} />
            <Route exact path="/vp/psychiatrist/socialmedia" component={PsychSocial} />
            <Route exact path="/vp/psychiatrist/schedule" component={PsychSchedule} />
            <Route exact path ="/vp/try" component = {Try} />
            <Route exact path ="/chat" component = {ChatPage} />
          </Switch>
        </BrowserRouter>
            </ChatContext>
          </PsychState>
        </ArticleState>
      </AlertState>
    </AuthState>
  );
};

export default Apps;
