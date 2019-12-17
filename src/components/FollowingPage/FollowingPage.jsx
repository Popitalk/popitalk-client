import React from "react";
import AvatarDeck from "../AvatarDeck";
import ChatMessages from "../ChatMessages";
import ChannelCard3 from "../ChannelCard3";
import "./FollowingPage.css";

export default function FollowingPage() {
  return (
    <div className="FollowingPage--container">
      <div className="FollowingPage--mainChannel">
        <div className="FollowingPage--mainChannel--video">
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="channel video" />
          <h4>Live</h4>
          <h3>Video title | Video title</h3>
          <i className="fas fa-volume-up fa-2x" />
          <div className="FollowingPage--avatars">
            <AvatarDeck
              size="big"
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
          </div>
          <div className="FollowingPage--shade" />
        </div>
        <div className="FollowingPage--mainChannel--chat">
          <div>
            <div>
              <img src="https://i.imgur.com/tLljw1z.jpg" alt="channel icon" />
            </div>
            <h3>Thelmo Society</h3>
            <p>Live chat</p>
          </div>
          <ChatMessages />
          <button type="button" className="button">
            Join chat
          </button>
        </div>
      </div>
      <div className="FollowingPage--channels">
        <ChannelCard3 />
        <ChannelCard3 />
        <ChannelCard3 />
        <ChannelCard3 />
        <ChannelCard3 />
        <ChannelCard3 />
        <ChannelCard3 />
        <ChannelCard3 />
        <ChannelCard3 />
        <ChannelCard3 />
      </div>
    </div>
  );
}
