import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";

export default function VideoChannelHeader({
  id,
  name,
  icon,
  videoStatus,
  type = "channel"
}) {
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
      <nav className="flex flex-wrap justify-center">
        <a
          href="https://www.google.com"
          className="btn-playing mx-1 my-1 font-bold no-underline"
        >
          Video
        </a>
        <a
          href="https://www.google.com"
          className="mx-1 my-1 font-bold text-secondaryText no-underline"
        >
          Queue
        </a>
        <a
          href="https://www.google.com"
          className="mx-1 my-1 font-bold text-secondaryText no-underline"
        >
          Channel
        </a>
        <a
          href="https://www.google.com"
          className="mx-1 my-1 font-bold text-secondaryText no-underline"
        >
          Settings
        </a>
      </nav>
    </header>
  );
}
