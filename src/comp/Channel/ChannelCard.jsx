import React from "react";
import RoomIcon from "../RoomIcon";
import AvatarDeck from "../AvatarDeck";
import Button from "../Button";
import VideoStatus from "../VideoStatusIcon";

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
    <div className="cursor-pointer w-full sm:1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 rounded-xl group py-4 px-2">
      <div className="flex-grow flex flex-row justify-center w-full pb-5/4 p-3 relative rounded-xl group-hover:shadow-xl transition-all ease-in-out duration-200">
        <img
          src={videoThumbnail}
          alt="channel"
          className="img absolute top-0 h-full rounded-xl group-hover:opacity-75 transition-all ease-in-out duration-200"
        />
        <div className="absolute w-full z-20">
          <div className="flex relative justify-between px-4 py-1 z-10">
            <div className="flex items-center pr-4">
              <VideoStatus status={live ? "playing" : "paused"} />
              <p className="text-sm font-regular flex-shrink-1 text-tertiaryText w-full max-w-2xs clamp-2 mb-1 ml-3">
                {videoTitle}
              </p>
            </div>
            <AvatarDeck
              avatars={avatars}
              size="md"
              className="img w-auto h-8 flex-shrink-0"
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
        <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay transform rotate-180 rounded-xl" />
        <div className="absolute w-full bottom-0 left-0 p-3 rounded-b-xl">
          <div className="flex flex-row items-center px-1">
            <RoomIcon
              ids={[id]}
              images={[icon]}
              watching={live}
              size="sm"
              className="mr-3 w-12 h-12"
            />
            <div className="pr-4 flex-shrink-1">
              <p className="text-sm font-semibold text-tertiaryText clamp-2">
                {name}
              </p>
            </div>
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
