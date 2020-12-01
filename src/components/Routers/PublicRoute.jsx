import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router";

const PublicRoute = ({ path, children }) => {
  const { loggedIn } = useSelector(state => state.general);

  return loggedIn ? <Redirect to="/" /> : <Route path={path}>{children}</Route>;
};

export default PublicRoute;
