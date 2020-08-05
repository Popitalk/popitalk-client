import React from "react";
import Button from "./Controls/Button";
import "./VideoStatus.css";
import AvatarIcon from "./Controls/AvatarIcon";
import VideoStatus from "./VideoStatus";
import VideoPlayer from "./VideoPlayer";

export default function VideoSection({
  title,
  url,
  displayControls,
  sourceChannelName,
  activeFriendViewers,
  inviteUsers,
  openProfile,
  isInvitingAllowed,
  playerStatus,
  dispatchPlay,
  dispatchPause,
  dispatchSkip,
  dispatchPlayNextVideo
}) {
  return (
    <div className="flex flex-col">
      <VideoPlayer
        url={url}
        displayControls={displayControls}
        playerStatus={playerStatus}
        dispatchPlay={dispatchPlay}
        dispatchPause={dispatchPause}
        dispatchSkip={dispatchSkip}
        dispatchPlayNextVideo={dispatchPlayNextVideo}
      />
      <div className="flex flex-col pt-4 px-4">
        <div className="flex items-center h-8">
          <VideoStatus
            status={playerStatus.status.toLowerCase()}
            type="text"
            className="pr-2"
            string
          />
          <div className="flex flex-row left-0 space-x-1">
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
        {url ? (
          <div>
            <div className="py-2">
              <p
                className="text-lg text-primaryText font-semibold truncate-2-lines overflow-hidden"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-sm text-secondaryText py-2">
                {sourceChannelName} {url}
              </p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
