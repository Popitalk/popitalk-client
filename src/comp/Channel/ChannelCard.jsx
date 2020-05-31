import React from "react";
import RoomIcon from "../RoomIcon";
import AvatarDeck from "../AvatarDeck";
import Button from "../Button";
import VideoStatus from "../VideoStatus";

export default function ChannelCard({
  id,
  name,
  icon,
  live,
  videoTitle,
  videoSource,
  videoThumbnail,
  avatars,
  handleFollow
}) {
  return (
    <div className="w-full rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all ease-in-out duration-200 md:my-4">
      <div className="flex-grow flex flex-row justify-center w-full pb-5/4 p-3 relative">
        <img
          src={videoThumbnail}
          alt="channel"
          className="img absolute top-0 h-full rounded-xl"
        />
        <div className="absolute top-0 left-0 mx-3 my-3">
          <div className="flex flex-row justify-end">
            <VideoStatus status={live ? "playing" : "paused"} />
            <AvatarDeck
              avatars={avatars}
              size="md"
              className="img w-auto h-8"
              threshold={3}
            />
          </div>
        </div>
        {/* <Button
          size="md"
          icon="play"
          className="bg-gradient-br-primary absolute top-0 left-0 mt-2 ml-3 select-none z-30"
        />
        <AvatarDeck
          avatars={avatars}
          size="md"
          className="img absolute top-0 right-0 w-auto h-8 mt-3 mr-3 z-30"
        /> */}
        <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay rounded-xl" />
        <div className="absolute w-full bottom-0 left-0 p-3 rounded-b-xl">
          <p className="text-lg font-regular text-tertiaryText mb-1 ml-3">
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
