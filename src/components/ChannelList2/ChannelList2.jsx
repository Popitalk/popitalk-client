import React, { useState } from "react";
import AvatarDeck from "../AvatarDeck";
import "./ChannelList2.css";

const channels = [
  {
    id: "abc1",
    name: "League of Legends",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc2",
    name: "Just for fun",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: true,
    avatars: [
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
    ]
  },
  {
    id: "abc3",
    name: "First Channel",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc4",
    name: "Second Channel",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: true,
    avatars: [
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
    ]
  }
  // {
  //   id: "abc5",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: false
  // },
  // {
  //   id: "abcf1",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: false
  // },
  // {
  //   id: "abc2d",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: false
  // },
  // {
  //   id: "abc3v",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: false
  // },
  // {
  //   id: "abct4",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: true
  // },
  // {
  //   id: "abc5u",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: false
  // },
  // {
  //   id: "abc2dv",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: false
  // },
  // {
  //   id: "abc3vd",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: false
  // },
  // {
  //   id: "abct44",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: true
  // },
  // {
  //   id: "abc5uh",
  //   icon: "https://i.imgur.com/aqjzchq.jpg",
  //   watching: false
  // }
];

export default function ChannelList2() {
  const [activeChannel, setActiveChannel] = useState("abc1");

  return (
    <div className="ChannelList2--container">
      {channels.map(channel => (
        <div
          className={`ChannelList2--channel${
            channel.id === activeChannel
              ? " ChannelList2--active"
              : " ChannelList2--inActive"
          }`}
          key={channel.id}
          role="button"
          onClick={() => setActiveChannel(channel.id)}
        >
          <div
            className={
              channel.watching
                ? "ChannelList2--channel--iconWatching"
                : "ChannelList2--channel--iconNotWatching"
            }
          >
            <img src={channel.icon} alt="channel icon" />
          </div>
          <div className="ChannelList2--channel--name">
            <p>@ {channel.name}</p>
            {channel.watching && <AvatarDeck avatars={channel.avatars} small />}
          </div>
          <div className="ChannelList2--slab" />
        </div>
      ))}
    </div>
  );
}
