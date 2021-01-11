import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import AvatarDeck from "../Controls/AvatarDeck";
import VideoStatus from "../VideoStatus";
import strings from "../../helpers/localization";
import history from "../../history";
import channelPlaceholder from "../../assets/default/channelPlaceholder1.png";
import { useSelector } from "react-redux";
import { mapIdsToUsers } from "../../helpers/functions";

export default function ChannelCard({
  id,
  name,
  icon,
  status,
  videoInfo,
  viewers,
  isLoading
}) {
  const handleSelect = () => {
    history.push(`/channels/${id}`);
  };
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const viewerInfoObject = viewers
    ? mapIdsToUsers(viewers, users, defaultAvatar)
    : [];
  const avatars = viewerInfoObject.map(viewer => viewer.avatar);

  let videoThumbnail = "";
  let videoTitle = strings.nothingPlaying;

  if (videoInfo) {
    videoThumbnail = videoInfo.thumbnail;
    videoTitle = videoInfo.title;
  }
  if (isLoading) {
    return (
      <div className="flex shadow-xs rounded-lg px-3 py-4 max-w-lg items-between animate-pulse mx-2">
        <div className="relative w-full pb-5/4">
          <div className="absolute w-full h-full flex flex-col justify-between">
            <div className="h-4 bg-background-quaternary rounded w-full" />
            <div className="flex w-full space-x-2">
              <div className="rounded-full bg-background-quaternary h-12 w-12" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-background-quaternary rounded" />
                <div className="h-4 bg-background-quaternary rounded w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-md cursor-pointer"
      role={handleSelect ? "button" : null}
      onClick={handleSelect}
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
      <div className="w-full my-3 flex flex-col justify-between items-between items-center space-y-2 space-x-0">
        <p
          className="text-sm flex-shrink-1 font-bold w-full truncate-2-lines text-copy-primary"
          dangerouslySetInnerHTML={{ __html: videoTitle }}
        />
        <AvatarDeck
          avatars={avatars}
          alt={`${avatars} - Popitalk`}
          size="sm"
          className="img flex-shrink-0"
          threshold={8}
        />
      </div>
    </div>
  );
}
