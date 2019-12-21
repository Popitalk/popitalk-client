import React, { useState } from "react";
import AvatarDeck from "../AvatarDeck";
import RoomIcon2 from "../RoomIcon2";
import "./ChannelList.css";

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

export default function ChannelList() {
  const [activeChannel, setActiveChannel] = useState("abc1");

  return (
    <div className="ChannelList--container">
      {channels.map(channel => (
        <div
          key={channel.id}
          className={`${
            channel.id === activeChannel
              ? " ChannelList--active"
              : " ChannelList--inActive"
          }`}
        >
          <div className="ChannelList--slab" />
          <div
            className="ChannelList--channel"
            role="button"
            onClick={() => setActiveChannel(channel.id)}
          >
            <RoomIcon2
              images={[channel.icon]}
              watching={channel.watching}
              type={channel.watching ? "ChannelsPanel2w" : "ChannelsPanel2"}
            />
            <div className="ChannelList--channel--name">
              <p>{channel.name}</p>
              {channel.watching && (
                <AvatarDeck avatars={channel.avatars} size="small" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}