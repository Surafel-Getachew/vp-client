import React,{useContext} from 'react'
import {Route,Redirect} from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
const PsychPrivateRoute = ({component:Component,...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated,loading} = authContext;

    return (
        <Route {...rest} component = {(props) => {
            isAuthenticated && !loading ? (
                <Component {...props} />
            ): (
                <Redirect to= "/vp/psychiatrist/signin"/>
            )
        }}>
            
        </Route>
    )
}

export default PsychPrivateRoute
