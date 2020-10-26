import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const UserProtectedRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === false ? (
          <Redirect to="/vp/user/signin" />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
};

export default UserProtectedRoute;
