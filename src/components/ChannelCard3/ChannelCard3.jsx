import React from "react";
import AvatarDeck from "../AvatarDeck";
import YoutubeLogo from "../../assets/youtube-logo.png";
import "./ChannelCard3.css";

export default function ChannelCard3() {
  return (
    <div className="ChannelCard3--container">
      <div className="ChannelCard3--top">
        <div>
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="channel" />
        </div>
        <h3>Channel Name</h3>
      </div>
      <div className="ChannelCard3--middle">
        <img
          src="https://i.imgur.com/aqjzchq.jpg"
          alt="channel"
          className="ChannelCard3--channelImage"
        />
        <img
          src={YoutubeLogo}
          alt="youtube"
          className="ChannelCard3--sourceImage"
        />
        <h4>Live</h4>
        <div className="ChannelCard3--title">
          <h3>Video title | Video title</h3>
        </div>
      </div>
      <div className="ChannelCard3--bottom">
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
        </div>
      </div>
    </div>
  );
}
