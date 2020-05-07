import React from "react";
import RoomIcon from "./RoomIcon";
import AvatarDeck from "./AvatarDeck";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SuggestionCard({
  id,
  name,
  icon,
  live,
  videoTitle,
  videoSource,
  videoThumbnail = "somedefaultimagehere",
  avatars,
  handleFollow,
  activeViewers
}) {
  return (
    <div className="flex flex-row items-center justify-center h-64 max-w-sm rounded-xl hover:shadow-xl">
      <div className="flex-grow flex flex-row justify-center h-64 p-3 relative">
        <div className="absolute w-full top-0 left-0 p-3 rounded-b-xl z-20">
          <div className="flex flex-row items-center">
            <RoomIcon
              ids={[id]}
              images={[icon]}
              watching={live}
              size="sm"
              className="mr-3"
            />
            <p className="text-xs font-regular text-tertiaryText">{name}</p>
            <Button
              size="sm"
              shape="pill"
              className="ml-auto"
              onClick={handleFollow}
            >
              Playing
            </Button>
          </div>
        </div>
        <img
          src={videoThumbnail}
          alt="channel"
          className="img absolute top-0 h-full rounded-xl z-10"
        />
        <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay z-20 rounded-xl" />
        <div className="absolute w-full bottom-0 left-0 p-3 rounded-b-xl z-20">
          <p className="text-lg font-regular text-tertiaryText mb-1 ml-3 z-30">
            {videoTitle}
          </p>
          <div>
            <FontAwesomeIcon
              className=""
              style={{ color: "white" }}
              icon="user-friends"
            />
            <span className="text-tertiaryText">{activeViewers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
