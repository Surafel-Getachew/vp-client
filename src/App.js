import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom"

// Pages for user
import Home from "./components/pages/Home";
import Login from "./components/pages/auth/Login";
import SignUp from "./components/pages/auth/Signup";
import GroupChat from "./components/pages/GroupChat";
import VideoChat from "./components/pages/VideoChat";
import Quizes from "./components/pages/quizes";
import Articles from "./components/pages/Articles";
import Alerts from "./components/alert/Alerts";

// page for making routes private 
import PrivateRoute from "./components/routing/PrivateRoute";

// page for psychiatrist
import PSignup from "./components/pages/authPsych/PSignup";
import PLogin from "./components/pages/authPsych/PLogin";
import Phome from "./components/pages/psychPage/Phome";


// State
// import AuthState from "./context/auth/AuthState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";


import setAuthToken from "./utils/setAuthToken";

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
   <AuthState>
    <AlertState>
    <Router>
      <Fragment>
        
      <Alerts/>
      <Switch>
        <PrivateRoute exact path = "/" component = {Home} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/signup" component = {SignUp} />
        <Route exact path = "/quizes" component = {Quizes} />
        <Route exact path = "/groupchat" component = {GroupChat} />
        <Route exact path = "/videochat" component = {VideoChat} />
        <Route exact path = "/articles" component = {Articles} />
        <Route exact path = "/vp/psychiatrist/signup" component = {PSignup} />
        <Route exact path = "/vp/psychiatrist/login" component = {PLogin} />
        <Route exact path = "/vp/psychiatrist/" component = {Phome} />
      </Switch>
      
      </Fragment>
      </Router>
      </AlertState>
     </AuthState> 
  )
}

export default App;
