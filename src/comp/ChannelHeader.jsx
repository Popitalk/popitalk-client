import React from "react";
import RoomIcon from "./Controls/RoomIcon";
import { Link, useLocation } from "react-router-dom";

export default function ChannelHeader({ id, name, icon, type = "channel" }) {
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
    <header className="sticky flex top-0 bg-secondaryBackground px-4 py-1 z-20">
      <div className="flex items-center">
        <RoomIcon
          ids={[id]}
          images={[icon]}
          // watching={videoStatus === "playing" ? true : false}
          size="sm"
          className="transition transform ease-in-out hover:scale-110 duration-100 cursor-pointer"
        />
        <div>
          <p className="flex flex-shrink text-md font-medium text-primaryText p-2 w-full truncate overflow-hidden">
            {name}
          </p>
        </div>
      </div>
      {type === "channel" && (
        <nav className="absolute bg-secondaryBackground right-0 flex flex-row flex-shrink-0 items-center py-2">
          {navButtons.map((button, idx) => {
            let className =
              "mx-1 font-semibold no-underline focus:outline-none rounded-lg px-2 hover:text-highlightText";
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
    </header>
  );
}
