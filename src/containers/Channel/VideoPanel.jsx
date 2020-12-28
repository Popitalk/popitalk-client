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
import QueueSection from "../../components/ThumbnailCardLists/QueueSection";
import VideoCardHorizontalPlaylist from "../../components/ThumbnailCards/VideoCardHorizontalPlaylist";
import ScrollableCardList from "../../components/ThumbnailCardLists/ScrollableCardList";
import ChannelQueue from "../../components/Channel/ChannelQueue";
import strings from "../../helpers/localization";
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
      <div className="flex items-center px-4 mt-4 space-x-4">
        <p className="text-lg text-copy-primary select-none font-bold">
          {strings.upNext}
        </p>
        {displayControls && (
          <Button
            styleNone
            styleNoneContent={
              expandQueue === true
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
          {expandQueue === true ? (
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
          ) : (
            <QueueSection
              queueList={playlist}
              handlerChange={handleSwapVideos}
              handleSkip={handleSkip}
              handleDeleteVideo={handleDeleteVideo}
              handleFindMore={e => setExpandQueue(checked => !checked)}
            />
          )}
        </>
      ) : (
        <ScrollableCardList axis="x">
          {playlist.map(value => (
            <VideoCardHorizontalPlaylist
              {...value}
              key={value.id}
              size="sm"
              type="none"
              className="mr-2"
            />
          ))}
        </ScrollableCardList>
      )}
    </div>
  );
}
