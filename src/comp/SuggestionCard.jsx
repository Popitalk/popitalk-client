import React from "react";
import RoomIcon from "./RoomIcon";
import VideoStatus from "./VideoStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SuggestionCard({
  id,
  name,
  icon,
  videoStatus,
  videoTitle,
  videoSource,
  videoThumbnail = "somedefaultimagehere",
  activeViewers
}) {
  return (
    <div className="flex flex-row items-center justify-center h-56 w-full sm:max-w-sm rounded-xl hover:shadow-xl">
      <div className="flex-grow flex flex-row justify-center h-56 w-2/4 p-3 relative">
        <div className="absolute w-full top-0 left-0 p-3 rounded-b-xl z-20">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <RoomIcon
                ids={[id]}
                images={[icon]}
                watching={videoStatus === "playing" ? true : false}
                size="md"
                className="mr-1 ml-1"
              />
              <p className="text-sm font-regular text-tertiaryText">{name}</p>
            </div>
            <div className="self-start">
              <VideoStatus status={videoStatus} className="self-start" />
            </div>
          </div>
        </div>
        <img
          src={videoThumbnail}
          alt="channel"
          className="img absolute top-0 h-full rounded-xl z-10"
        />
        <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay z-20 rounded-xl" />
        <div className="absolute w-full bottom-0 left-0 p-3 rounded-b-xl z-20">
          <div className="flex justify-between">
            <p className="text-lg font-regular text-tertiaryText mb-1 ml-2 z-30">
              {videoTitle}
            </p>
            <div>
              <FontAwesomeIcon
                className=""
                style={{ color: "white" }}
                icon="user-friends"
              />
              <span className="ml-1 text-sm text-tertiaryText">
                {activeViewers}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
