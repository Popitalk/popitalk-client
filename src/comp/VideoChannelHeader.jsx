import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoStatus from "./VideoStatus";
import RoomIcon from "./RoomIcon";

export default function VideoChannelHeader({ id, name, icon, videoStatus }) {
  return (
    <header className="flex justify-between bg-disabledBackground">
      <div>
        <RoomIcon
          ids={[id]}
          images={[icon]}
          watching={videoStatus === "playing" ? true : false}
          size="md"
          className="mr-1 ml-1"
        />
        <p className="text-sm font-regular text-primaryText">{name}</p>
      </div>
      <nav>
        <ol>
          <li className="text-primaryGradient">Video</li>
          <li>Queue</li>
          <li>Channel</li>
          <li>Setting</li>
        </ol>
      </nav>
    </header>
  );
}
