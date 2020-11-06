import React,{useContext} from "react";
import {Route,Redirect} from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PsychPrivateRoute = ({component:Component, ...rest}) => {
    
    const authContext = useContext(AuthContext);
    const {isAuthenticated,loading} = authContext
    
    return (
        <Route {...rest} render = {props => isAuthenticated == false && loading == false ? (
            <Redirect to = "/vp/psychiatrist/signin" />
        ) :(
            <Component {...props} /> 
        ) } />
    )
}

export default PsychPrivateRoute;
