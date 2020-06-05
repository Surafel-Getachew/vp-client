import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// context
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

// private route
import PrivateRoute from "./component/routing/PrivateRouting";


// user pages
import Landing from "./pages/Landing/Landing";
import Signup from "./pages/User/Auth/Signup";

// psych pages
import PsychiatristLanding from "./pages/Psychiatrist/PsychLanding/PsychiatristLanding";
import PsychSignup from "./pages/Psychiatrist/PsychAuth/PsychSignup";
import PsychSignIn from "./pages/Psychiatrist/PsychAuth/PsychSignIn"

// adding auth token to global header so that will not send it every time.
import setAuthToken from "./utils/setAuthToken";
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const Apps = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/psychiatrist" component={PsychiatristLanding} />
            <Route exact path="/psychiatrist/signup" component={PsychSignup} />
            <Route exact path="/psychiatrist/signin" component={PsychSignIn} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};

export default Apps;
