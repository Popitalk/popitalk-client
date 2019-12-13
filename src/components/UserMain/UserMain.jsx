import React from "react";
import ChannelCard1 from "../ChannelCard1";
import "./UserMain.css";

export default function UserMain() {
  return (
    <div className="UserMain--container">
      <div className="UserMain--user">
        <img src="https://i.imgur.com/tLljw1z.jpg" alt="avatar" />
        <div className="UserMain--user--nameStats">
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
      <div className="UserMain--channels">
        <h3>Djang16&apos;s Channels</h3>
        <div className="UserMain--channelsGrid">
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
        </div>
      </div>
    </div>
  );
}
