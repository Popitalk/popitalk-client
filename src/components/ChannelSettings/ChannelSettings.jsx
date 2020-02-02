import React, { useEffect } from "react";
import {
  Link,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useLocation,
  useHistory,
  useParams
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setChannelSettingsPage } from "../../redux/actions";
import ChannelSettingsSidebar from "../ChannelSettingsSidebar";
import ManageMembers from "../ManageMembers";
import ManageAdmins from "../ManageAdmins";
import ManageBanned from "../ManageBanned";
import UpdateChannel from "../UpdateChannel";
import "./ChannelSettings.css";

export default function ChannelSettings() {
  const { channelId } = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setChannelSettingsPage(true));

    return () => {
      dispatch(setChannelSettingsPage(false));
    };
  }, [dispatch]);

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
