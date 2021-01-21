import React,{useContext} from "react";
import {Route,Redirect} from "react-router-dom";
import AdminAuthContext from "../../context/adminAuth/adminAuthContext";

const AdminPrivateRoute = ({component:Component,...rest}) => {
    const adminAuthContext = useContext(AdminAuthContext);
    const {isAuthenticated,loading} = adminAuthContext

    return (
        <Route {...rest} render = {props => isAuthenticated === false && loading === false ? (
            <Redirect to = "/vp/admin/signin" />
        ) :(
            <Component {...props} /> 
        ) } />
    )
}

export default AdminPrivateRoute;