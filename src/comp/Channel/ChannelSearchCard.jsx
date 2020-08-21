import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import AvatarDeck from "../Controls/AvatarDeck";
import VideoStatus from "../VideoStatusIcon";
import strings from "../../helpers/localization";

export default function ChannelCard({
  id,
  name,
  icon,
  live,
  videoTitle,
  videoSource,
  videoThumbnail = true,
  avatars,
  handleFollow,
  playerStatus,
  activeFriendViewers
}) {
  return (
    <div className="flex flex-row w-full h-68 items-center px-0 sm:px-8 md:px-16 my-4">
      <div className="flex p-4 hover:shadow-md transition-all duration-50 rounded-lg cursor-pointer">
        {/* === Channel Thumbnail Section === */}
        <div className="w-68 flex-shrink-0">
          <div className="relative justify-center pb-5/4 rounded-lg bg-primaryBackground">
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
                  {strings.nothingPlaying}
                </div>
              </div>
            )}
          </div>
        </div>
        {/*  === Channel Description Section === */}
        <div className="flex flex-col justify-start max-w-lg px-4">
          {/* Video Title & Video Status & Viewer list */}
          {videoThumbnail && (
            <div className="">
              <p className="text-lg flex-shrink-1 font-bold w-full truncate-2-lines text-primaryText py-4">
                <VideoStatus status="playing" type="text" string />
                {videoTitle}
                Video TitleVideo TitleVideo TitleVideo TitleVideo TitleVideo
                TitleVideo TitleVideo TitleVideo TitleVideo Title
              </p>
              {activeFriendViewers && (
                <div className="flex my-2">
                  <AvatarDeck
                    avatars={avatars}
                    size="sm"
                    className="img w-auto h-4 flex-shrink-0"
                    threshold={6}
                  />
                </div>
              )}
            </div>
          )}
          {/* Channel Icon & Description*/}
          <div className="flex flex-col items-center py-4">
            <div className="flex items-center justify-start w-full py-1">
              <RoomIcon
                ids={[id]}
                images={[icon]}
                watching={live}
                size="sm"
                className="bg-primaryBackground mr-2 w-6 h-6"
              />
              <p className="pr-2 flex-shrink-1 text-sm font-semibold truncate-2-lines text-primaryText">
                {name}
              </p>
            </div>
            <p className="pr-2 flex-shrink-1 text-sm truncate-2-lines text-secondaryText">
              Channel DescriptionChannel DescriptionChannel DescriptionChannel
              DescriptionChannel DescriptionChannel DescriptionChannel
              DescriptionChannel Description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
