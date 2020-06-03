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
    <div className="cursor-pointer w-full group">
      <div className="flex-grow flex justify-center rounded-xl h-full p-3 pb-16/9 relative group-hover:shadow-xl transition-all ease-in-out duration-200">
        <div className="absolute w-full h-full top-0 left-0 p-3 rounded-b-xl z-30">
          <div className="flex justify-between items-center pr-2">
            <div className="">
              <VideoStatus status={videoStatus} className="self-start" />
            </div>
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
        <img
          src={videoThumbnail}
          alt="channel"
          className="img absolute top-0 w-full h-full object-cover rounded-xl z-10"
        />
        <div className="h-full w-full absolute top-0 transform rotate-180 bg-gradient-t-channelCardOverlay z-20 rounded-xl" />
      </div>
      <div className="flex py-2">
        <RoomIcon
          ids={[id]}
          images={[icon]}
          watching={videoStatus === "playing" ? true : false}
          size="md"
          className="mr-2 ml-1"
        />
        <div>
          <p className="text-sm font-regular text-secondaryText">{name}</p>
          <p className="text-lg font-semibold text-primaryText">{videoTitle}</p>
        </div>
      </div>
    </div>
  );
}
