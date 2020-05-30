import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// context
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

// pages
import Landing from "./pages/Landing/Landing";
import PsychiatristLanding from "./pages/Psychiatrist/PsychiatristLanding";
import Signup from "./pages/User/Auth/Signup";

const Apps = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/psychiatrist" component={PsychiatristLanding} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};

export default Apps;
