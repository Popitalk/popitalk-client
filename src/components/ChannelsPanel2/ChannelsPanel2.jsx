import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Seperator from "../Seperator";
import ChannelList from "../ChannelList";
import ChannelCard2 from "../ChannelCard2";
import "./ChannelsPanel2.css";

export default function ChannelsPanel2() {
  return (
    <div className="ChannelsPanel2--container">
      <div className="ChannelsPanel2--header">
        <i className="fas fa-globe-americas fa-2x" />
        <h3>Channels</h3>
      </div>
      <div className="ChannelsPanel2--main">
        <div className="ChannelsPanel2--channels">
          <h3>Your Channels</h3>
          <ChannelList />
        </div>
        <div className="ChannelsPanel2--button">
          <Link to="/channels/create">
            <i className="fas fa-plus" />
            <p>Create Channel</p>
          </Link>
        </div>

        <div className="ChannelsPanel2--channels">
          <h3>Your Channels</h3>
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
    </div>
  );
}
