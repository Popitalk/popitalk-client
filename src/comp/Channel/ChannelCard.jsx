import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import AvatarDeck from "../Controls/AvatarDeck";
// import Button from "../Controls/Button";
import VideoStatus from "../VideoStatusIcon";
import strings from "../../helpers/localization";
import history from "../../history";

export default function ChannelCard({
  id,
  name,
  icon,
  live,
  queue,
  videoSource,
  avatars,
  handleFollow,
  isLoading
}) {
  const handleSelect = () => {
    history.push(`/channels/${id}/video`);
  };
  let videoThumbnail = "";
  let videoTitle = "Nothing Playing at the moment";
  console.log({ queue });
  if (queue.length > 0) {
    videoThumbnail = queue[0].thumbnail;
    videoTitle = queue[0].title;
  }
  return (
    <>
      {isLoading ? (
        <div className="flex shadow-xs rounded-lg px-3 py-4 max-w-lg items-between animate-pulse mx-2">
          <div className="relative w-full pb-5/4">
            <div className="absolute w-full h-full flex flex-col justify-between">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="flex w-full space-x-2">
                <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-6 px-2 select-none">
          <div
            className="relative flex flex-grow justify-center pb-5/4 p-3 rounded-lg hover:shadow-xl transition-all duration-100 cursor-pointer"
            role={handleSelect ? "button" : null}
            onClick={handleSelect}
          >
            {/* ChannelCard background image */}
            {videoThumbnail !== "" ? (
              <img
                src={videoThumbnail}
                alt={"channel"}
                className="absolute img top-0 h-full rounded-lg bg-primaryBackground"
              />
            ) : (
              <div className="absolute top-0 h-full w-full rounded-lg bg-gray-400">
                <div className="flex items-center justify-center w-full h-full text-xs text-secondaryBackground">
                  {strings.nothingPlaying}
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
                {/* <Button
                  actionButton
                  size="sm"
                  shape="pill"
                  className="ml-auto"
                  onClick={handleFollow}
                  analyticsString="Channel Follow Button: ChannelCard"
                >
                  {strings.followButton}
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
