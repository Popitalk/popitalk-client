import React from "react";
import Button from "./Controls/Button";
import "./VideoStatus.css";
import AvatarIcon from "./Controls/AvatarIcon";
import VideoStatus from "./VideoStatus";
import VideoPlayer from "./VideoPlayer";
import ReactTooltip from "react-tooltip";

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
  dispatchPlayNextVideo,
  handleNothingPlaying
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
        handleNothingPlaying={handleNothingPlaying}
      />
      <div className="flex flex-col pt-4 px-4">
        <div className="flex items-center h-8 space-x-2">
          <VideoStatus
            status={playerStatus.status.toLowerCase()}
            type="text"
            string
          />
          <div className="flex flex-row left-0 space-x-1">
            {activeFriendViewers.map((friend, idx) => {
              return (
                <AvatarIcon
                  key={idx}
                  username={friend.username}
                  avatar={friend.avatar}
                  imageClick={() => openProfile(friend.id)}
                  className="img h-8 w-8 rounded-circle transition transform ease-in-out hover:scale-110 duration-100"
                  tooltip={friend.username}
                  tooltipPlace="bottom"
                />
              );
            })}
            {isInvitingAllowed && (
              <Button
                actionButton
                icon="user-plus"
                size="sm"
                onClick={inviteUsers}
                analyticsString="Invite User Button: VideoSection"
              />
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
      <ReactTooltip
        effect="solid"
        backgroundColor="#F2F2F2"
        textColor="black"
        className="shadow-lg rounded-md py-1 px-3"
        arrowColor="transparent"
      />
    </div>
  );
}
