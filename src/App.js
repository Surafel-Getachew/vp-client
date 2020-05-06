import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages for user
import Home from "./components/pages/userPages/Home";
import Login from "./components/pages/auth/Login";
import SignUp from "./components/pages/auth/Signup";
import GroupChat from "./components/pages/userPages/GroupChat";
import VideoChat from "./components/pages/userPages/VideoChat";
import Quizes from "./components/pages/userPages/quizes";
import Articles from "./components/pages/userPages/Articles";
import Alerts from "./components/alert/Alerts";

// page for making routes private
import PrivateRoute from "./components/routing/PrivateRoute";

// page for psychiatrist
import PSignup from "./components/pages/authPsych/PSignup";
import PLogin from "./components/pages/authPsych/PLogin";
import Phome from "./components/pages/psychPage/Phome";
import PArticle from "./components/pages/psychPage/PArticle";
import PProfile from "./components/pages/psychPage/PProfile";
import PGroupChat from "./components/pages/psychPage/PGroupChat";
// page for playground
import Playground from "./Playground";

// State
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ArticleState from "./context/article/ArticleState";
import GroupChatState from "./context/groupChat/GroupChatState";

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ArticleState>
          <GroupChatState>
            <Router>
              <Fragment>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/quizes" component={Quizes} />
                  <Route exact path="/groupchat" component={GroupChat} />
                  <Route exact path="/videochat" component={VideoChat} />
                  <Route exact path="/articles" component={Articles} />
                  <Route
                    exact
                    path="/vp/psychiatrist/signup"
                    component={PSignup}
                  />
                  <Route
                    exact
                    path="/vp/psychiatrist/login"
                    component={PLogin}
                  />
                  <Route exact path="/vp/psychiatrist/" component={Phome} />
                  <Route
                    exact
                    path="/vp/psychiatrist/article"
                    component={PArticle}
                  />
                  <Route
                    exact
                    path="/vp/psychiatrist/profile"
                    component={PProfile}
                  />
                  <Route
                    exact
                    path="/psychiatrist/groupchat"
                    component={PGroupChat}
                  />
                  <Route exact path="/playground" component={Playground} />
                </Switch>
              </Fragment>
            </Router>
          </GroupChatState>
        </ArticleState>
      </AlertState>
    </AuthState>
  );
};

export default App;
