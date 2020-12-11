import React from "react";
import Route from "react-router";
import { Redirect } from "react-router-dom";
import { PublicRoute, GeneralRoute, PrivateRoute } from "../components/Routers";

export default (
  <Route>
    <PublicRoute exact path="/welcome" />
    <GeneralRoute exact path="/" />
    <GeneralRoute exact path="/channels/:channelId/video" />
    <GeneralRoute exact path="/friends" />
    <PrivateRoute exact path="/create" />
    <PrivateRoute exact path="/rooms/:roomId/video" />
    <PrivateRoute exact path="/users/:userId" />
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Route>
);
