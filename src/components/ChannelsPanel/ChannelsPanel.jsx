import React from "react";
import "./ChannelsPanel.css";
import RoomIcon from "../RoomIcon";

const channels = [
  {
    id: "abc1",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc2",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc3",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc4",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: true
  },
  {
    id: "abc5",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abcf1",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc2d",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc3v",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abct4",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: true
  },
  {
    id: "abc5u",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc2dv",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc3vd",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abct44",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: true
  },
  {
    id: "abc5uh",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  }
];

export default function ChannelsPanel() {
  return (
    <div className="ChannelsPanel--container">
      <i className="fas fa-globe-americas fa-2x" />
      <div className="ChannelsPanel--channels">
        {channels.map(channel => (
          <div className="ChannelsPanel--channel" key={channel.id}>
            <RoomIcon images={[channel.icon]} watching={channel.watching} />
          </div>
        ))}
      </div>
    </div>
  );
}
