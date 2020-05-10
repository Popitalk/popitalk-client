import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";

export default function VideoChannelHeader({ id, name, icon, videoStatus }) {
  return (
    <header className="flex justify-between bg-disabledBackground my-1 mx-1">
      <div className="flex">
        <RoomIcon
          ids={[id]}
          images={[icon]}
          watching={videoStatus === "playing" ? true : false}
          size="md"
          className=""
        />
        <p className="text-sm font-regular text-primaryText py-1">{name}</p>
      </div>
      <nav>
        <ol className="flex">
          <li className="btn-playing mx-1 my-1 font-bold">Video</li>
          <li className="mx-1 my-1 font-bold text-secondaryText">Queue</li>
          <li className="mx-1 my-1 font-bold text-secondaryText">Channel</li>
          <li className="mx-1 my-1 font-bold text-secondaryText">Setting</li>
        </ol>
      </nav>
    </header>
  );
}
