import React from "react";
import RoomIcon from "./RoomIcon";
import AvatarDeck from "./AvatarDeck";
import Button from "./Button";

export default function ChannelCard({
  id,
  name,
  icon,
  live,
  videoTitle,
  videoSource,
  videoThumbnail = "somedefaultimagehere",
  avatars,
  handleFollow
}) {
  return (
    <div className="flex flex-row items-center justify-center h-64 max-w-xs rounded-xl hover:shadow-xl">
      <div className="flex-grow flex flex-row justify-center h-64 p-3 relative">
        <img
          src={videoThumbnail}
          alt="channel"
          className="img absolute top-0 h-full rounded-xl z-10"
        />
        <p className="flex flex-row items-center justify-center text-md font-bold bg-gradient-br-primary text-tertiaryText px-2 rounded-pill absolute top-0 left-0 mt-3 ml-3 select-none z-30">
          asd
        </p>
        <AvatarDeck
          avatars={avatars}
          size="md"
          className="img absolute top-0 right-0 w-auto h-8 mt-3 mr-3 z-30"
        />
        <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay z-20 rounded-xl" />
        <div className="absolute w-full bottom-0 left-0 p-3 rounded-b-xl z-20">
          <p className="text-lg font-regular text-tertiaryText mb-1 ml-3 z-30">
            {videoTitle}
          </p>
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
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}