import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import ChannelSettingsSidebar from "../ChannelSettingsSidebar";
import ManageMembers from "../ManageMembers";
import ManageAdmins from "../ManageAdmins";
import ManageBanned from "../ManageBanned";
import UpdateChannel from "../UpdateChannel";
import "./ChannelSettings.css";

export default function ChannelSettings() {
  const match = useRouteMatch();

  return (
    <div className="ChannelSettings--container">
      <ChannelSettingsSidebar />
      <Switch>
        <Route exact path={`${match.path}/general`}>
          <UpdateChannel />
        </Route>
        <Route path={`${match.path}/members`}>
          <ManageMembers />
        </Route>
        <Route path={`${match.path}/admins`}>
          <ManageAdmins />
        </Route>
        <Route path={`${match.path}/banned`}>
          <ManageBanned />
        </Route>
        <Redirect to={`${match.path}/general`} />
      </Switch>
    </div>
  );
}
