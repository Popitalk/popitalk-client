import React from "react";
import {
  Redirect,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";
import "./ChannelPage.css";
import ChannelsPanel2 from "../../components/ChannelsPanel2";
import ChannelBrowser from "../../components/ChannelBrowser";
import CreateChannel from "../../components/CreateChannel";
import UpdateChannel from "../../components/UpdateChannel";
import ChannelMain from "../../components/ChannelMain";
import RoomRightPanel from "../../components/RoomRightPanel";
import FriendsPanel from "../../components/FriendsPanel";
import FriendsPanel2 from "../../components/FriendsPanel2";

export default function ChannelPage() {
  const match = useRouteMatch();
  const location = useLocation();

  console.log("match", match);
  console.log("location", location);

  return (
    <div className="ChannelPage--container">
      <ChannelsPanel2 />
      <Switch>
        <Route path={["/channels/following", "/channels/discover"]}>
          <ChannelBrowser />
        </Route>
        <Route path="/channels/create">
          <CreateChannel />
        </Route>
        <Route path="/channels/:channelId">
          <ChannelMain />
          <RoomRightPanel />
        </Route>
      </Switch>
      <FriendsPanel2 />
    </div>
  );
}
