import React from "react";
import ChannelCard from "../ChannelCard";
import "./Profile2.css";

export default function Profile2() {
  return (
    <div className="Profile2--container">
      <div className="Profile2--user">
        <img src="https://i.imgur.com/tLljw1z.jpg" alt="avatar" />
        <div className="Profile2--user--nameStats">
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
      <div className="Profile2--channels">
        <h3>Djang16&apos;s Channels</h3>
        <div className="Profile2--channelsGrid">
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
        </div>
      </div>
    </div>
  );
}
