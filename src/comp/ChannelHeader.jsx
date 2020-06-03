import React, { useState, useLayoutEffect, useRef } from "react";
import RoomIcon from "./RoomIcon";
import { useSelector, useDispatch } from "react-redux";

import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
  useParams
} from "react-router-dom";
export default function ChannelHeader({
  id,
  name,
  icon,
  videoStatus,
  type = "channel"
}) {
  const navButtons = [
    { name: "Video", endpoint: "video" },
    { name: "Queue", endpoint: "queue" },
    { name: "Channel", endpoint: "channel" },
    { name: "Settings", endpoint: "settings" }
  ];

  // const channel = useSelector(state => state.channels[id]);

  const match = useRouteMatch();
  const location = useLocation();
  // const channelRef = useRef(null);
  // const scrollRef = useRef(null);
  // const { id: ownId } = useSelector(state => state.self);
  // const loading = useSelector(state => !state.channels[id]?.loaded);

  console.log(
    "match",
    match,
    "location",
    location
    // "channelRef",
    // channelRef,
    // "scrollRef",
    // scrollRef,
    // // "id",
    // // ownId,
    // "loading",
    // loading,
    // "channel",
    // channel
  );
  return (
    <header className="flex justify-between bg-disabledBackground my-1 mx-1">
      <div className="flex items-center">
        <RoomIcon
          ids={[id]}
          images={[icon]}
          watching={videoStatus === "playing" ? true : false}
          size="md"
          className=""
        />
        <p className="text-sm font-regular text-primaryText py-1 px-1">
          {type === "channel" ? name : `Private Room with ${name}`}
        </p>
      </div>
      {type === "channel" && (
        <nav className="flex flex-wrap justify-center">
          {navButtons.map((button, idx) => {
            let className =
              "mx-1 my-1 font-bold no-underline focus:outline-none";
            if (
              location.pathname.startsWith(`${match.url}/${button.endpoint}`)
            ) {
              className = `${className} rainbow-text`;
            } else {
              className = `${className} text-secondaryText`;
            }
            return (
              <Link
                to={`${match.url}/${button.endpoint}`}
                className={className}
                key={idx}
              >
                {button.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
