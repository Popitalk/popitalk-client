import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPaused, setVolume } from "../../redux/actions";
import {
  openInviteModal,
  openProfileModal,
  openSocialShareModal
} from "../../redux";
import { mapIdsToUsers } from "../../helpers/functions";
import VideoSection from "../../components/VideoSection";
import VideoCardHorizontalPlaylist from "../../components/ThumbnailCards/VideoCardHorizontalPlaylist";
import ChannelQueue from "../../components/Channel/ChannelQueue";
import strings from "../../localization/strings";
import Button from "../../components/Controls/Button";

export default function VideoPanel({
  channelId,
  dispatchPlay,
  handleDeleteVideo,
  handleSwapVideos,
  handlePlayNextVideo,
  handleNothingPlaying,
  displayControls,
  playlist,
  playerStatus,
  classNames,
  isChannel,
  searchRef,
  name,
  icon,
  searchTerm,
  searchResults,
  totalResults,
  handleSearch,
  handleAddVideo,
  queue,
  isMember
}) {
  const [expandQueue, setExpandQueue] = useState(false);

  const dispatch = useDispatch();

  const { defaultAvatar, volume } = useSelector(state => state.general);
  const channel = useSelector(state => state.channels[channelId]);
  const viewerIds = channel.viewers;
  const users = useSelector(state => state.users);
  const viewers = viewerIds
    ? mapIdsToUsers(viewerIds, users, defaultAvatar)
    : [];
  const isInvitingAllowed = channel.type === "group";

  const dispatchPause = (queueStartPosition, videoStartTime) =>
    dispatch(setPaused({ channelId, queueStartPosition, videoStartTime }));

  const handleSkip = (id = null, s = 0) => {
    const index = id
      ? playlist.findIndex(v => v.id === id)
      : playerStatus.queueStartPosition;

    if (playerStatus.status === "Playing") {
      dispatchPlay(index, s);
    } else {
      dispatchPause(index, s);
    }
  };

  const nothingPlayingHandler = videoData => {
    if (displayControls) {
      setExpandQueue(true);
    } else {
      handleNothingPlaying();
    }
  };

  const video =
    playerStatus.channelId === channelId
      ? playlist[playerStatus.queueStartPosition]
      : null;

  return (
    <div className={classNames}>
      <VideoSection
        {...video}
        playerStatus={playerStatus}
        activeFriendViewers={viewers}
        inviteUsers={() => dispatch(openInviteModal(channelId, false))}
        socialShare={() => dispatch(openSocialShareModal(channelId, false))}
        openProfile={id => dispatch(openProfileModal(id))}
        isInvitingAllowed={isInvitingAllowed}
        displayControls={displayControls}
        volume={volume}
        setVolume={volume => dispatch(setVolume(volume))}
        dispatchPlay={dispatchPlay}
        dispatchPause={dispatchPause}
        dispatchSkip={s => handleSkip(null, s)}
        dispatchPlayNextVideo={handlePlayNextVideo}
        handleNothingPlaying={nothingPlayingHandler}
        isChannel={isChannel}
      />
      {playlist.length !== 0 && (
        <div className="bg-background-tertiary border border-outline-primary rounded-md py-1 mx-1">
          <div className="flex items-center px-4 mt-4 space-x-4">
            <p className="text-lg text-copy-primary select-none font-bold">
              {strings.upNext}
            </p>
            {displayControls && (
              <Button
                styleNone
                styleNoneContent={
                  expandQueue === false
                    ? strings.saveAndReturn
                    : strings.manageUpNext
                }
                styleNoneContentClassName="text-copy-highlight font-bold text-sm"
                onClick={e => setExpandQueue(checked => !checked)}
                className="py-2 px-3 bg-background-primary hover:bg-hover-highlight rounded-md shadow-sm"
              />
            )}
          </div>
          {displayControls ? (
            <>
              {expandQueue === false ? (
                <div className="flex flex-col justify-center p-4">
                  <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-8">
                    {playlist.map(value => (
                      <VideoCardHorizontalPlaylist
                        {...value}
                        key={value.id}
                        size="sm"
                        handleDeleteVideo={() => handleDeleteVideo(value.id)}
                        type="cancel"
                        handleSkip={handleSkip}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <ChannelQueue
                  ref={searchRef}
                  name={name}
                  icon={icon}
                  searchTerm={searchTerm}
                  searchResults={searchResults}
                  totalResults={totalResults}
                  handleSearch={handleSearch}
                  handleAddVideo={handleAddVideo}
                  queue={queue}
                  handleSwapVideos={handleSwapVideos}
                  handleDeleteVideo={handleDeleteVideo}
                  isChannel={isChannel}
                />
              )}
            </>
          ) : (
            <div className="flex flex-col justify-center p-4">
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-8">
                {playlist.map(value => (
                  <VideoCardHorizontalPlaylist
                    {...value}
                    key={value.id}
                    size="sm"
                    type="none"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
