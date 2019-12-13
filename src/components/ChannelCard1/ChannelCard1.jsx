import React from "react";
import AvatarDeck from "../AvatarDeck";
import "./ChannelCard1.css";

export default function ChannelCard1() {
  return (
    <div className="ChannelCard1--container">
      <div className="ChannelCard1--top">
        <img src="https://i.imgur.com/aqjzchq.jpg" alt="channel" />
        <div className="ChannelCard1--icon">
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="channel" />
        </div>
        <div className="ChannelCard1--overlay" />
      </div>
      <div className="ChannelCard1--bottom">
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
            size="medium"
          />
          <button type="button" className="button">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
