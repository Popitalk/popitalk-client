import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import "./ChannelPage.css";
import ChannelsPanel2 from "../../components/ChannelsPanel2";
// import ChannelBrowser from "../../components/ChannelBrowser";
import CreateChannel from "../../components/CreateChannel";
import ChannelMain from "../../components/ChannelMain";
import ChatPanel from "../../components/ChatPanel";
import FriendsPanel from "../../components/FriendsPanel";
// import Channel from "../../components/Channel";
import Channel from "../../containers/Channel";

export default function ChannelPage() {
  const { pathname } = useLocation();
  const regex = /\/channels\/(.*)\/settings/;
  const onSettingsPage = regex.test(pathname);

  return (
    <div
      className={`ChannelPage--container${
        onSettingsPage ? " ChannelPage--channelSettings" : ""
      }`}
    >
      <div className="ChannelPage--shadowBox">
        <ChannelsPanel2 />
        <Switch>
          {/* <Route path={["/channels/following", "/channels/discover"]}>
            <ChannelBrowser />
          </Route> */}
          <Route path={["/channels/following", "/channels/discover"]}>
            <div>FOLLOWING OR DISCOVER</div>
          </Route>
          <Route path="/channels/create">
            <CreateChannel />
          </Route>
          <Route path="/channels/:channelId">
            <Channel />
            {/* <ChannelMain />
            <ChatPanel /> */}
          </Route>
        </Switch>
      </div>
      <FriendsPanel />
    </div>
  );
}
