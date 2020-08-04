import React from "react";
import Button from "./Controls/Button";
import "./VideoStatus.css";
import AvatarIcon from "./Controls/AvatarIcon";
import VideoStatus from "./VideoStatus";
import VideoPlayer from "./VideoPlayer";

export default function VideoSection({
  title,
  url,
  videoStartTime,
  queueStartPosition,
  sourceChannelName,
  activeFriendViewers,
  status,
  inviteUsers,
  openProfile,
  isInvitingAllowed,
  playerStatus,
  dispatchPlay,
  dispatchPause,
  dispatchSkip,
  dispatchUpdatePlayerStatus
}) {
  return (
    <div className="flex flex-col">
      <VideoPlayer
        url={url}
        videoStartTime={videoStartTime}
        status={status}
        queueStartPosition={queueStartPosition}
        dispatchPlay={dispatchPlay}
        dispatchPause={dispatchPause}
        dispatchSkip={dispatchSkip}
        dispatchUpdatePlayerStatus={dispatchUpdatePlayerStatus}
      />
      <div className="flex flex-col pt-4 px-4">
        {url ? (
          <div>
            <div className="py-2">
              <p className="text-lg text-primaryText font-semibold truncate-2-lines overflow-hidden">
                {title}
              </p>
              <p className="text-sm text-secondaryText py-2">
                {sourceChannelName} {url}
              </p>
            </div>
            <div className="relative flex items-center h-8">
              {status ? (
                <VideoStatus status={status} type="text" string />
              ) : (
                <p></p>
              )}
              <div className="absolute flex flex-row right-0">
                {activeFriendViewers.map((friend, idx) => {
                  return (
                    <AvatarIcon
                      key={idx}
                      username={friend.name}
                      avatar={friend.avatar}
                      imageClick={() => openProfile(friend.id)}
                      className="img h-8 w-8 rounded-circle transition transform ease-in-out hover:scale-110 duration-100"
                    />
                  );
                })}
                {isInvitingAllowed && (
                  <Button icon="user-plus" size="sm" onClick={inviteUsers} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
