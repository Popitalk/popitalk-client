import React from "react";
import "./ChannelsPanel2.css";
import Seperator from "../Seperator";
import ChannelList from "../ChannelList";
import ChannelCard2 from "../ChannelCard2";

export default function ChannelsPanel2() {
  return (
    <div className="ChannelsPanel2--container">
      <div className="ChannelsPanel2--header">
        <i className="fas fa-globe-americas fa-2x" />
        <h2>Channels</h2>
      </div>
      <div className="ChannelsPanel2--yourChannels">
        <h3>Your Channels</h3>
        <ChannelList />
        <div className="ChannelsPanel2--yourChannels--button">
          <button type="button" className="button lg">
            <i className="fas fa-plus" />
            <p>Create Channel</p>
          </button>
        </div>
      </div>
      <div className="ChannelsPanel2--followingChannels">
        <h3>Following Channels</h3>
        <ChannelList />
      </div>
      <div className="ChannelsPanel2--seperator">
        <Seperator text="DISCOVER" />
      </div>
      <div className="ChannelsPanel2--discover">
        <ChannelCard2 />
        <ChannelCard2 />
        <ChannelCard2 />
      </div>
    </div>
  );
}
