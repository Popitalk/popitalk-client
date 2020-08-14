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
    <div className="cursor-pointer py-6 px-2">
      <div className="relative flex flex-grow justify-center pb-5/4 p-3 rounded-lg hover:shadow-xl transition-all duration-100">
        {/* ChannelCard background image */}
        {videoThumbnail ? (
          <img
            src={videoThumbnail}
            alt={"channel"}
            className="absolute img top-0 h-full rounded-lg bg-primaryBackground"
          />
        ) : (
          <div className="absolute top-0 h-full w-full rounded-lg bg-gray-400">
            <div className="flex items-center justify-center w-full h-full text-xs text-secondaryBackground">
              Nothing is Playing
            </div>
          </div>
        )}
        {/* Top part of the ChannelCard */}
        <div className="absolute w-full z-10">
          <div className="flex relative justify-between items-center px-2">
            {videoThumbnail && (
              <>
                <VideoStatus status={live ? "playing" : "paused"} />
                <p className="text-sm flex-shrink-1 font-bold w-full max-w-2xs truncate-2-lines ml-2 text-tertiaryText">
                  Some Video Title
                  {videoTitle}
                </p>
              </>
            )}
            <AvatarDeck
              avatars={avatars}
              size="md"
              className="img w-auto h-8 flex-shrink-0"
              threshold={3}
            />
          </div>
        </div>
        {/* Shaded gradients behind*/}
        {videoThumbnail && (
          <>
            <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay rounded-lg" />
            <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay transform rotate-180 rounded-lg" />
          </>
        )}
        {/* Bottom part of the ChannelCard */}
        <div className="absolute w-full bottom-0 left-0 px-3 py-2 rounded-b-lg">
          <div className="flex flex-row items-center">
            <RoomIcon
              ids={[id]}
              images={[icon]}
              watching={live}
              size="sm"
              className="mr-2 w-12 h-12"
            />
            <p className="pr-2 flex-shrink-1 text-sm font-semibold truncate-2-lines text-tertiaryText">
              {name}
            </p>
            <Button
              size="sm"
              shape="pill"
              className="ml-auto"
              onClickEvent={handleFollow}
              analyticsString="Channel Follow Button: ChannelCard"
            >
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
