import React from "react";
import RoomIcon from "./Controls/RoomIcon";
import { Link, useLocation } from "react-router-dom";

export default function ChannelHeader({
  id,
  name,
  icon,
  videoStatus,
  type = "channel"
}) {
  const navButtons = [
    { name: "Video", endpoint: "video" },
    { name: "Posts", endpoint: "channel" },
    { name: "Up Next", endpoint: "queue" },
    { name: "Settings", endpoint: "settings" }
  ];

  // const channel = useSelector(state => state.channels[id]);

  const location = useLocation();
  // const channelRef = useRef(null);
  // const scrollRef = useRef(null);
  // const { id: ownId } = useSelector(state => state.self);
  // const loading = useSelector(state => !state.channels[id]?.loaded);

  // console.log(
  //   "match",
  //   match,
  //   "location",
  //   location
  //   // "channelRef",
  //   // channelRef,
  //   // "scrollRef",
  //   // scrollRef,
  //   // // "id",
  //   // // ownId,
  //   // "loading",
  //   // loading,
  //   // "channel",
  //   // channel
  // );
  return (
    <div className="flex w-full h-12 bg-secondaryBackground justify-between items-center px-4 py-1 z-20 rounded-t-md">
      <div className="flex items-center">
        <RoomIcon
          ids={[id]}
          images={[icon]}
          // watching={videoStatus === "playing" ? true : false}
          size="sm"
          watching={videoStatus}
          className="transition transform ease-in-out hover:scale-110 duration-100 cursor-pointer"
        />
        <p className="flex flex-shrink-0 text-md font-medium text-primaryText p-2 w-full truncate overflow-hidden">
          {name}
        </p>
      </div>
      {type === "channel" && (
        <nav className="flex flex-shrink-0 truncate">
          {navButtons.map((button, idx) => {
            let className =
              "mx-1 font-semibold no-underline focus:outline-none p-2 hover:text-highlightText";
            if (
              location.pathname.startsWith(`/channels/${id}/${button.endpoint}`)
            ) {
              className = `${className} rainbow-text`;
            } else {
              className = `${className} text-secondaryText`;
            }
            return (
              <Link
                to={`/channels/${id}/${button.endpoint}`}
                className={className}
                key={idx}
              >
                {button.name}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
