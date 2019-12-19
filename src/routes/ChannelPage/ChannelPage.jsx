import React from "react";
import { Switch, Route } from "react-router-dom";
import "./ChannelPage.css";
import ChannelsPanel2 from "../../components/ChannelsPanel2";
import ChannelBrowser from "../../components/ChannelBrowser";
import CreateChannel from "../../components/CreateChannel";
import ChannelMain from "../../components/ChannelMain";
import ChatPanel from "../../components/ChatPanel";
import FriendsPanel from "../../components/FriendsPanel";

export default function ChannelPage() {
  return (
    <div className="ChannelPage--container">
      <ChannelsPanel2 />
      {/* <Switch>
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
      </Switch> */}
      <FriendsPanel />
    </div>
  );
}
