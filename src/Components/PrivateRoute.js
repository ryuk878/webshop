import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ component: Component, path, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return !currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Dashboard" />
        );
      }}
    ></Route>
  );
}
