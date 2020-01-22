import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "react-use";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import RoomIcon2 from "../RoomIcon2";
import "./ChannelsPanel1.css";

export default function ChannelsPanel1() {
  const { channels, defaultIcon } = useSelector(state => state.generalState);
  const { id: ownId } = useSelector(state => state.userState);
  const [shadow, setShadow] = useState(false);
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);

  useEffect(() => {
    if (y !== 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }, [y]);

  let yourChannels = {};
  let followingChannels = {};

  Object.entries(channels)
    .filter(([channelId, channel]) => channel.type === "channel")
    .forEach(([channelId, channel]) => {
      if (channel.ownerId === ownId) {
        yourChannels = { ...yourChannels, [channelId]: channel };
      } else {
        followingChannels = { ...followingChannels, [channelId]: channel };
      }
    });

  return (
    <div className="ChannelsPanel1--container">
      <ReactTooltip
        place="right"
        effect="solid"
        className="ChannelsPanel1--tooltip"
        id="ChannelsPanel1--tooltip"
        event="mouseover mouseenter"
        eventOff="mouseleave mouseout scroll mousewheel"
      />
      <div
        className={`ChannelsPanel1--header${
          shadow ? " ChannelsPanel1--headerShadow" : ""
        }`}
      >
        <i className="fas fa-globe-americas fa-2x" />
      </div>
      <div className="ChannelsPanel1--channels" ref={scrollRef}>
        {Object.entries(yourChannels)
          .filter(([channelId, channel]) => channel.type === "channel")
          .map(([channelId, channel]) => (
            <Link
              className="ChannelsPanel1--channel"
              key={channelId}
              to={`/channels/${channelId}/video`}
            >
              <div
                data-for="ChannelsPanel1--tooltip"
                data-tip={channel.name}
                data-iscapture="true"
              >
                <RoomIcon2
                  images={[channel.icon || defaultIcon]}
                  watching={channel.watching}
                  type="ChannelsPanel1"
                />
              </div>
            </Link>
          ))}
        {Object.entries(followingChannels)
          .filter(([channelId, channel]) => channel.type === "channel")
          .map(([channelId, channel]) => (
            <Link
              className="ChannelsPanel1--channel"
              key={channelId}
              to={`/channels/${channelId}/video`}
            >
              <div
                data-for="ChannelsPanel1--tooltip"
                data-tip={channel.name}
                data-iscapture="true"
              >
                <RoomIcon2
                  images={[channel.icon || defaultIcon]}
                  watching={channel.watching}
                  type="ChannelsPanel1"
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
