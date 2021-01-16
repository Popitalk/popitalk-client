import React from "react";
import Button from "./Controls/Button";
import AvatarIcon from "./Controls/AvatarIcon";
import VideoStatus from "./VideoStatus";
import VideoPlayer from "./VideoPlayer";
import ReactTooltip from "react-tooltip";
import strings from "../localization/strings";

export default function VideoSection({
  title,
  url,
  displayControls,
  sourceChannelName,
  activeFriendViewers,
  inviteUsers,
  socialShare,
  openProfile,
  isInvitingAllowed,
  isChannel,
  playerStatus,
  volume,
  setVolume,
  dispatchPlay,
  dispatchPause,
  dispatchSkip,
  dispatchPlayNextVideo,
  handleNothingPlaying
}) {
  const additionalComponent = (
    <Button
      styleNone
      icon="user"
      styleNoneContent={activeFriendViewers.length}
      styleNoneIconClassName="mr-1"
      className="text-copy-secondary space-x-1 text-xs font-bold"
      analyticsString="View More Users Button: AvatarDeck"
    />
  );
  return (
    <div className="flex flex-col">
      <VideoPlayer
        url={url}
        displayControls={displayControls}
        playerStatus={playerStatus}
        volume={volume}
        setVolume={setVolume}
        dispatchPlay={dispatchPlay}
        dispatchPause={dispatchPause}
        dispatchSkip={dispatchSkip}
        dispatchPlayNextVideo={dispatchPlayNextVideo}
        handleNothingPlaying={handleNothingPlaying}
      />
      <div className="flex flex-col justify-center p-4">
        <div className="flex items-center justify-between h-8 space-x-2">
          <div className="flex items-center flex-row left-0 space-x-2">
            <VideoStatus
              status={playerStatus.status.toLowerCase()}
              type="text"
              string
              additionalComponent={additionalComponent}
            />
            <div className="flex items-center space-x-1 overflow-scroll-auto">
              {activeFriendViewers.map((friend, idx) => {
                return (
                  <AvatarIcon
                    key={idx}
                    username={friend.username}
                    avatar={friend.avatar}
                    imageClick={() => openProfile(friend.id)}
                    className="img h-8 w-8 rounded-circle transition transform ease-in-out hover:scale-110 duration-100 cursor-pointer"
                    tooltip={friend.username}
                    tooltipPlace="bottom"
                  />
                );
              })}
            </div>
          </div>
          {isInvitingAllowed ? (
            <Button
              actionButton
              icon="user-plus"
              size="sm"
              onClick={inviteUsers}
              className="flex-shrink-0"
              analyticsString="Invite User Button: VideoSection"
            />
          ) : isChannel ? (
            <Button
              actionButton
              size="sm"
              onClick={socialShare}
              className="flex-shrink-0"
              analyticsString="Invite User Button: VideoSection"
            >
              {strings.invite}
            </Button>
          ) : (
            <div />
          )}
        </div>
        {url ? (
          <div>
            <div className="py-2">
              <p
                className="text-lg text-copy-primary font-semibold truncate-2-lines overflow-hidden"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <div className="flex flex-row items-center space-x-2 text-xs text-copy-secondary py-2">
                <a
                  href="https://policies.google.com/privacy"
                  className="no-underline text-copy-link"
                >
                  <p className="text-xs">Google Privacy Policy</p>
                </a>
                <p>
                  {sourceChannelName} {url}
                </p>
              </div>
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
