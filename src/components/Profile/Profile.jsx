import React from "react";
import ChannelCard from "../ChannelCard";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile--container">
      <div className="Profile--header">
        <h2>Profile</h2>
      </div>
      <div className="Profile--user">
        <img src="https://i.imgur.com/tLljw1z.jpg" alt="avatar" />
        <div className="Profile--user--nameStats">
          <div>
            <h3>Djang16</h3>
            <p>Andrew Jang</p>
          </div>
          <div>
            <p>
              <span>10</span> channels
            </p>
            <p>
              <span>10</span> friends
            </p>
          </div>
        </div>
        <button type="button" className="button">
          <i className="fas fa-user-plus" />
          <p>Add friend</p>
        </button>
      </div>
      <div className="Profile--channels">
        <h3>Djang16's Channels</h3>
        <div className="Profile--channelsGrid">
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
        </div>
      </div>
    </div>
  );
}
