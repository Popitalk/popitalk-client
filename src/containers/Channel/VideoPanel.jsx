import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  openInviteModal,
  openProfileModal,
  openSocialShareModal,
  setPaused,
  setVolume
} from "../../redux/actions";
import { mapIdsToUsers } from "../../helpers/functions";
import VideoSection from "../../components/VideoSection";
import QueueSection from "../../components/ThumbnailCardLists/QueueSection";
import VideoPanelCard from "../../components/ThumbnailCards/VideoPanelCard";
import ScrollableCardList from "../../components/ThumbnailCardLists/ScrollableCardList";

export default function VideoPanel({
  channelId,
  dispatchPlay,
  handleDeleteVideo,
  handleSwapVideos,
  handlePlayNextVideo,
  handleFindMore,
  handleNothingPlaying,
  displayControls,
  playlist,
  playerStatus,
  classNames,
  isChannel
}) {
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

  let video =
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
        handleNothingPlaying={handleNothingPlaying}
        isChannel={isChannel}
      />
      {displayControls ? (
        <QueueSection
          queueList={playlist}
          handlerChange={handleSwapVideos}
          handleSkip={handleSkip}
          handleDeleteVideo={handleDeleteVideo}
          handleFindMore={handleFindMore}
        />
      ) : (
        <ScrollableCardList axis="x">
          {playlist.map(value => (
            <VideoPanelCard
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
