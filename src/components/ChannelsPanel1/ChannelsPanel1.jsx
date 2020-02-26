import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "react-use";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import RoomIcon2 from "../RoomIcon2";
import "./ChannelsPanel1.css";

export default function ChannelsPanel1() {
  const { defaultIcon } = useSelector(state => state.general);
  const channels = useSelector(state => state.channels);
  const { id: ownId, channelIds } = useSelector(state => state.self);
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

  let yourChannels = [];
  let followingChannels = [];

  channelIds
    .map(channelId => ({ id: channelId, ...channels[channelId] }))
    .forEach(channel => {
      if (channel.ownerId === ownId) {
        yourChannels.push(channel);
      } else {
        followingChannels.push(channel);
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
        {yourChannels.map(channel => (
          <Link
            className="ChannelsPanel1--channel"
            key={channel.id}
            to={`/channels/${channel.id}/video`}
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
        {followingChannels.map(channel => (
          <Link
            className="ChannelsPanel1--channel"
            key={channel.id}
            to={`/channels/${channel.id}/video`}
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
