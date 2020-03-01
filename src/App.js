import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom"

// Pages
import Home from "./components/pages/Home";
import Login from "./components/pages/auth/Login";
import SignUp from "./components/pages/auth/Signup";
import GroupChat from "./components/pages/GroupChat";
import VideoChat from "./components/pages/VideoChat";
import Quizes from "./components/pages/quizes";
import Alerts from "./components/alert/Alerts";

// State
import AuthState from "./context/autho/AuthState";
import AlertState from "./context/alert/AlertState";


const App = () => {
  return (
   <AuthState>
    <AlertState>
    <Router>
      <Fragment>
        <div>
      <Alerts/>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/signup" component = {SignUp} />
        <Route exact path = "/quizes" component = {Quizes} />
        <Route exact path = "/groupchat" component = {GroupChat} />
        <Route exact path = "/videochat" component = {VideoChat} />
      </Switch>
      </div>
      </Fragment>
     </Router>
     </AlertState>
     </AuthState>
  )
}

export default App;
