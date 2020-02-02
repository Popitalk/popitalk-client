import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./ChannelPage.css";
import ChannelsPanel2 from "../../components/ChannelsPanel2";
import ChannelBrowser from "../../components/ChannelBrowser";
import CreateChannel from "../../components/CreateChannel";
import ChannelMain from "../../components/ChannelMain";
import ChatPanel from "../../components/ChatPanel";
import FriendsPanel from "../../components/FriendsPanel";

export default function ChannelPage() {
  const { channelSettingsPage } = useSelector(state => state.generalState);

  return (
    <div
      className={`ChannelPage--container${
        channelSettingsPage ? " ChannelPage--channelSettings" : ""
      }`}
    >
      <div className="ChannelPage--shadowBox">
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
            <ChatPanel />
          </Route>
        </Switch>
      </div>
      <FriendsPanel />
    </div>
  );
}
