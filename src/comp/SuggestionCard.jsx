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
    <div className="flex flex-row items-center justify-center w-full rounded-xl overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all ease-in-out duration-200">
      <div className="flex-grow flex flex-row justify-center h-full p-3 pb-16/9 relative">
        <div className="absolute w-full h-full top-0 left-0 p-3 rounded-b-xl z-20">
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
          className="img absolute top-0 w-full h-full object-cover rounded-xl z-10"
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
