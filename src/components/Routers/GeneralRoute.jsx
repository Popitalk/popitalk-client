import React from "react";
import { Route } from "react-router";

const GeneralRoute = ({ path, children }) => (
  <Route path={path}>{children}</Route>
);

export default GeneralRoute;
