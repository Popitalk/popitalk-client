import React from "react";
import AvatarDeck from "../Controls/AvatarDeck";
import { useSelector } from "react-redux";
import VideoStatus from "../VideoStatus";
import strings from "../../localization/strings";
import history from "../../history";
import channelPlaceholder from "../../assets/default/channelPlaceholder1.png";
import { mapIdsToUsers } from "../../helpers/functions";

export default function ChannelCard({
  id,
  name,
  icon,
  description,
  viewers,
  playbackStatus,
  loading,
  videoInfo
}) {
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const viewerInfoObject = viewers
    ? mapIdsToUsers(viewers, users, defaultAvatar)
    : [];
  const avatars = viewerInfoObject.map(viewer => viewer.avatar);
  const handleSelect = () => {
    history.push(`/channels/${id}`);
  };
  let videoThumbnail = "";
  let videoTitle = strings.nothingPlaying;

  if (videoInfo) {
    videoThumbnail = videoInfo.thumbnail;
    videoTitle = videoInfo.title;
  }
  if (loading) {
    return (
      <div className="shadow-sm rounded-md p-4 max-w-xl w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-background-quaternary h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-background-quaternary rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-background-quaternary rounded"></div>
              <div className="h-4 bg-background-quaternary rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex flex-col md:flex-row cursor-pointer"
      role={handleSelect ? "button" : null}
      onClick={handleSelect}
    >
      {/* === Channel Thumbnail Section === */}
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="relative justify-center pb-16/9 rounded-md bg-background-primary">
          {/* ChannelCard background image */}
          {videoThumbnail ? (
            <img
              src={videoThumbnail}
              alt={`${name} - Popitalk`}
              className="absolute img top-0 h-full rounded-md bg-background-primary pt-px"
            />
          ) : (
            <img
              src={channelPlaceholder}
              alt="Popitalk Default"
              className="absolute img top-0 h-full rounded-md bg-background-primary"
            />
          )}
        </div>
      </div>
      {/*  === Channel Description Section === */}
      <div className="flex flex-col justify-start w-full px-1 md:px-4 py-">
        {/* Video Title & Video Status & Viewer list */}
        <div className="flex font-bold w-full truncate-2-lines text-copy-primary">
          <VideoStatus status={playbackStatus} type="text" string />
          <p dangerouslySetInnerHTML={{ __html: videoTitle }} />
        </div>
        {avatars.length > 0 && (
          <div className="flex w-full my-1">
            <AvatarDeck
              avatars={avatars}
              size="sm"
              className="img"
              threshold={6}
            />
          </div>
        )}
        {/* Channel Icon & Description*/}
        <div className="flex flex-col space-y-1 mt-2">
          {/* <RoomIcon
                ids={[id]}
                images={[icon]}
                size="sm"
                className="mr-2 w-6 h-6"
              /> */}
          <p className="pr-2 text-xs font-bold truncate text-copy-primary">
            {name}
          </p>
          <p className="pr-2 text-xs text-copy-secondary w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
