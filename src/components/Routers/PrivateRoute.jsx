import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router";

const PrivateRoute = ({ path, children }) => {
  const { loggedIn } = useSelector(state => state.general);

  return loggedIn ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to="/channels" />
  );
};

export default PrivateRoute;
