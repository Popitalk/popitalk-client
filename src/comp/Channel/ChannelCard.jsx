import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import AvatarDeck from "../Controls/AvatarDeck";
import Button from "../Controls/Button";
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
    <div className="cursor-pointer w-full flex-shrink-0 rounded-lg group pt-4 pb-12 px-2 select-none">
      <div className="relative flex-grow flex flex-row justify-center w-full pb-5/4 p-3 rounded-lg group-hover:shadow-xl transition-all ease-in-out duration-100">
        <img
          src={videoThumbnail}
          alt="channel"
          className="absolute img top-0 h-full rounded-lg transition-all ease-in-out duration-100"
        />
        <div className="absolute w-full z-10">
          <div className="flex relative justify-between px-2">
            <div className="flex items-center">
              <VideoStatus status={live ? "playing" : "paused"} />
              <p className="text-sm flex-shrink-1 text-tertiaryText w-full max-w-2xs truncate-2-lines mb-1 ml-2">
                Some long long long long long long long long long long long long
                long long Title
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
        <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay rounded-lg" />
        <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay transform rotate-180 rounded-lg" />
        <div className="absolute w-full bottom-0 left-0 p-2 rounded-b-lg">
          <div className="flex flex-row items-center">
            <RoomIcon
              ids={[id]}
              images={[icon]}
              watching={live}
              size="sm"
              className="mr-2 w-12 h-12"
            />
            <div className="pr-2 flex-shrink-1">
              <p className="text-sm font-semibold text-tertiaryText truncate-2-lines">
                Some long long long long long long long long long Text
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
