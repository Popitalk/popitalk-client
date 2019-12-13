import React from "react";
import ReactTooltip from "react-tooltip";
import "./ChannelsPanel1.css";

const channels = [
  {
    id: "abc1",
    name: "channel1",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc2",
    name: "channel2",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc3",
    name: "channel3",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc4",
    name: "channel4",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: true
  },
  {
    id: "abc5",
    name: "channel5",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abcf1",
    name: "channel6",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc2d",
    name: "channel7",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc3v",
    name: "channel8",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abct4",
    name: "channel9",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: true
  },
  {
    id: "abc5u",
    name: "channel10",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc2dv",
    name: "channel11",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abc3vd",
    name: "channel12",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  },
  {
    id: "abct44",
    name: "channel13",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: true
  },
  {
    id: "abc5uh",
    name: "channel14",
    icon: "https://i.imgur.com/aqjzchq.jpg",
    watching: false
  }
];

export default function ChannelsPanel1() {
  return (
    <div className="ChannelsPanel1--container">
      <ReactTooltip
        place="right"
        effect="solid"
        className="ChannelsPanel1--tooltip"
        id="ChannelsPanel1--tooltip"
      />
      <div className="ChannelsPanel1--header">
        <i className="fas fa-globe-americas fa-2x" />
      </div>
      <div className="ChannelsPanel1--shade" />
      <div className="ChannelsPanel1--channels">
        <div className="ChannelsPanel1--shade2" />
        {channels.map(channel => (
          <div
            className={`ChannelsPanel1--channel${
              channel.watching ? " ChannelsPanel1--watching" : ""
            }`}
            key={channel.id}
          >
            <div>
              <img
                src={channel.icon}
                alt="channel icon"
                data-for="ChannelsPanel1--tooltip"
                data-tip={channel.name}
              />
            </div>
            <div className="ChannelsPanel1--slab" />
          </div>
        ))}
      </div>
    </div>
  );
}
