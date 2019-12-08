import React from "react";
import AvatarDeck from "../AvatarDeck";
import "./ChannelCard.css";

export default function ChannelCard() {
  return (
    <div className="ChannelCard--container">
      <div className="ChannelCard--top">
        <img src="https://i.imgur.com/aqjzchq.jpg" alt="channel" />
        <div className="ChannelCard--icon">
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="channel" />
        </div>
        <div className="ChannelCard--overlay" />
      </div>
      <div className="ChannelCard--bottom">
        <h3>Channel Name</h3>
        <p>
          really really really really really really really really really really
          really really long description
        </p>
        <div>
          <AvatarDeck
            avatars={[
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg",
              "https://i.imgur.com/tLljw1z.jpg"
            ]}
          />
          <button type="button" className="button">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
