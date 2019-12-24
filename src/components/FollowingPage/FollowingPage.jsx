import React from "react";
import AvatarDeck from "../AvatarDeck";
import ChatMessages from "../ChatMessages";
import ChannelCard3 from "../ChannelCard3";
import VideoCard2 from "../VideoCard2";
import YoutubeLogo from "../../assets/youtube-logo.png";
import "./FollowingPage.css";
const videos = [
  // {
  //   id: "abc1",
  //   image: "https://i.imgur.com/tLljw1z.jpg",
  //   title: "Week 4 Day 1 | LCS Spring Split (2019)",
  //   other: "LoL Esports | 60K views. 2 months ago"
  // },
  {
    id: "abc2",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "1111111",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc3",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "2222222",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc4",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "3333333",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc5",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "4444444",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc6",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "5555555",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc7",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "6666666",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc8",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "7777777",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "editQueue"
  }
];

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
      <div className="FollowingPage--videoCards">
        {videos.slice(0, 4).map((video, index) => (
          <div className="VideoCard2--container" key={video.id}>
            <div className="VideoCard2--top">
              {index === 0 ? (
                <h4 className="VideoCard2--live">Live</h4>
              ) : (
                <h4>In 12min</h4>
              )}
              <img
                src={video.image}
                alt="video"
                className="VideoCard2--videoImage"
              />
              <img
                src={YoutubeLogo}
                alt="youtube"
                className="VideoCard2--sourceImage"
              />
            </div>
            <div className="VideoCard2--bottom">
              <h6>{video.title}</h6>
              <p>{video.other}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="FollowingPage--channels">
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
      </div> */}
    </div>
  );
}
