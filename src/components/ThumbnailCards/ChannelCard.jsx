import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import AvatarDeck from "../Controls/AvatarDeck";
import VideoStatus from "../VideoStatus";
import strings from "../../localization/strings";
import history from "../../history";
import channelPlaceholder from "../../assets/default/channelPlaceholder1.png";

export default function ChannelCard({
  id,
  name,
  icon,
  status,
  videoInfo,
  viewers,
  channelCardClicked
}) {
  const handleSelect = () => {
    history.push(`/channels/${id}`);
    channelCardClicked();
  };

  let videoThumbnail = "";
  let videoTitle = strings.nothingPlaying;

  if (videoInfo) {
    videoThumbnail = videoInfo.thumbnail;
    videoTitle = videoInfo.title;
  }

  return (
    <div
      className="cursor-pointer"
      role="button"
      onClick={() => handleSelect()}
    >
      {/* Channel Description */}
      <div className="flex items-center justify-between w-full py-2 space-x-2">
        <div className="flex flex-row items-center space-x-2">
          <RoomIcon ids={[id]} images={[icon]} size="sm" />
          <p className="flex-shrink-1 text-sm font-semibold truncate-2-lines text-copy-primary">
            {name}
          </p>
        </div>
        <VideoStatus status={status?.toLowerCase()} />
      </div>
      {/* ChannelCard background image */}
      <div className="relative flex flex-grow justify-center pb-16/9">
        <img
          src={videoThumbnail ? videoThumbnail : channelPlaceholder}
          alt={`${videoThumbnail ? name - "Popitalk" : "Popitalk Default"}`}
          className="absolute img top-0 h-full rounded-md bg-background-secondary object-cover pt-px"
        />
      </div>
      {/* Video Description & Avatar Deck */}
      <div className="w-full my-3 flex flex-col justify-between items-between items-center space-y-4 space-x-0">
        <p
          className="text-sm flex-shrink-1 font-bold w-full truncate-2-lines text-copy-primary"
          dangerouslySetInnerHTML={{ __html: videoTitle }}
        />
        <AvatarDeck
          avatars={viewers}
          alt={`${viewers} - Popitalk`}
          size="sm"
          className="img flex-shrink-0"
          threshold={8}
        />
      </div>
    </div>
  );
}
