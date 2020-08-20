import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import AvatarDeck from "../Controls/AvatarDeck";
import Button from "../Controls/Button";
import VideoStatus from "../VideoStatusIcon";
import strings from "../../helpers/localization";
import AvatarIcon from "../Controls/AvatarIcon";

export default function ChannelCard({
  id,
  name,
  icon,
  live,
  videoTitle,
  videoSource,
  videoThumbnail = "true",
  avatars,
  handleFollow,
  playerStatus,
  activeFriendViewers
}) {
  return (
    <div className="flex flex-row w-full h-68 py-6 px-8">
      {/* === Channel Thumbnail Section === */}
      <div className="w-68 flex-shrink-0">
        <div className="relative justify-center pb-5/4 rounded-lg hover:shadow-xl transition-all duration-100 bg-primaryBackground">
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
      <div className="flex flex-col max-w-lg px-4 py-2">
        {/* Video Title & Video Status & Viewer list */}
        {videoThumbnail && (
          <div className="py-2">
            <p className="text-lg flex-shrink-1 font-bold w-full truncate-2-lines text-primaryText">
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
        <div className="flex flex-row items-center py-2">
          <RoomIcon
            ids={[id]}
            images={[icon]}
            watching={live}
            size="sm"
            className="bg-primaryBackground mr-2 w-12 h-12"
          />
          <p className="pr-2 flex-shrink-1 text-sm font-semibold truncate-2-lines text-primaryText">
            {name}Channel Name
          </p>
        </div>
        <p className="pr-2 flex-shrink-1 text-sm truncate-2-lines text-secondaryText">
          Channel DescriptionChannel DescriptionChannel DescriptionChannel
          DescriptionChannel DescriptionChannel DescriptionChannel
          DescriptionChannel Description
        </p>
      </div>
    </div>
  );
}
