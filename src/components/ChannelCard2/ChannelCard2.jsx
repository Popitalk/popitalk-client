import React from "react";
import AvatarDeck from "../AvatarDeck";
import YoutubeLogo from "../../assets/youtube-logo.png";
import Button1 from "../Button1";
import "./ChannelCard2.css";

export default function ChannelCard2() {
  return (
    <div className="ChannelCard2--container">
      <div>
        <div className="ChannelCard2--top">
          <img
            src="https://i.imgur.com/aqjzchq.jpg"
            alt="channel"
            className="ChannelCard2--channelImage"
          />
          <img
            src={YoutubeLogo}
            alt="youtube"
            className="ChannelCard2--sourceImage"
          />
          <h4>Playing</h4>
          <div className="ChannelCard2--title">
            <h3>Video title | Video title</h3>
          </div>
          <div className="ChannelCard2--overlay" />
        </div>
        <div className="ChannelCard2--bottom">
          <div className="ChannelCard2--nameIcon">
            <img src="https://i.imgur.com/tLljw1z.jpg" alt="channel" />
            <h3>Channel Name</h3>
          </div>
          <div className="ChannelCard2--avatars">
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
            {/* <button type="button">Follow</button> */}
            <Button1>Follow</Button1>
          </div>
        </div>
      </div>
    </div>
  );
}
