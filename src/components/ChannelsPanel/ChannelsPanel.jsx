import React from "react";
import ReactTooltip from "react-tooltip";
import "./ChannelsPanel.css";

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

export default function ChannelsPanel() {
  return (
    <div className="ChannelsPanel--container">
      <ReactTooltip
        place="right"
        effect="solid"
        className="ChannelsPanel--tooltip"
        id="ChannelsPanel--tooltip"
      />
      <div className="ChannelsPanel--header">
        <i className="fas fa-globe-americas fa-2x" />
      </div>
      <div className="ChannelsPanel--shade" />
      <div className="ChannelsPanel--channels">
        <div className="ChannelsPanel--shade2" />
        {channels.map(channel => (
          <div
            className={`ChannelsPanel--channel${
              channel.watching ? " ChannelsPanel--watching" : ""
            }`}
            key={channel.id}
          >
            <div>
              <img
                src={channel.icon}
                alt="channel icon"
                data-for="ChannelsPanel--tooltip"
                data-tip={channel.name}
              />
            </div>
            <div className="ChannelsPanel--slab" />
          </div>
        ))}
      </div>
    </div>
  );
}
