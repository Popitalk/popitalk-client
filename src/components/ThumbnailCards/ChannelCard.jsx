import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import AvatarDeck from "../Controls/AvatarDeck";
import VideoStatus from "../VideoStatus";
import { mapIdsToUsers } from "../../helpers/functions";
import { useSelector } from "react-redux";
import strings from "../../helpers/localization";
import history from "../../history";
import channelPlaceholder from "../../assets/default/channelPlaceholder1.png";

export default function ChannelCard({
  id,
  name,
  icon,
  status,
  queue,
  queueStartPosition,
  members,
  handleFollow,
  isLoading
}) {
  const users = useSelector(state => state.users);
  const { defaultAvatar } = useSelector(state => state.general);
  const viewers = members ? mapIdsToUsers(members, users, defaultAvatar) : [];
  const avatars = viewers.map(viewer => viewer.avatar);
  const handleSelect = () => {
    history.push(`/channels/${id}/video`);
  };
  let videoThumbnail = "";
  let videoTitle = strings.nothingPlaying;

  if (queue.length > 0) {
    try {
      videoThumbnail = queue[queueStartPosition].thumbnail;
      videoTitle = queue[queueStartPosition].title;
    } catch {
      videoThumbnail = queue[0].thumbnail;
      videoTitle = queue[0].title;
    }
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
        <div
          className="p-2 my-4 mx-2 rounded-lg duration-100 cursor-pointer"
          role={handleSelect ? "button" : null}
          onClick={handleSelect}
        >
          {/* Channel Description*/}
          <div className="flex flex-row items-center justify-between w-full py-2">
            <div className="flex flex-row items-center">
              <RoomIcon
                ids={[id]}
                images={[icon]}
                // watching={status}
                size="sm"
                className="mr-2 w-10 h-10"
              />
              <p
                className={`pr-2 flex-shrink-1 text-sm font-semibold truncate-2-lines ${
                  videoThumbnail ? "text-primaryText" : "text-primaryText"
                }`}
              >
                {name}
              </p>
            </div>
            <VideoStatus status={status?.toLowerCase()} type="text" />
          </div>
          {/* ChannelCard background image */}
          <div className="relative flex flex-grow justify-center pb-16/9">
            {videoThumbnail !== "" ? (
              <img
                src={videoThumbnail}
                alt={"channel"}
                className="absolute img top-0 h-full rounded-lg bg-secondaryBackground object-cover pt-px"
              />
            ) : (
              <img
                src={channelPlaceholder}
                alt={"channel"}
                className="absolute img top-0 h-full rounded-lg bg-primaryBackground"
              />
            )}
          </div>
          {/* Video Description & Avatar Deck */}
          <div className="w-full my-2 flex flex-col justify-between items-between items-center space-y-2">
            <p
              className={`text-sm flex-shrink-1 font-bold w-full truncate-2-lines ml-2  ${
                videoThumbnail ? "text-primaryText" : "text-secondaryText"
              }`}
              dangerouslySetInnerHTML={{ __html: videoTitle }}
            />
            <div className="flex w-full text-sm">
              <AvatarDeck
                avatars={avatars}
                size="md"
                className="img w-8 h-8 flex-shrink-0"
                threshold={10}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
