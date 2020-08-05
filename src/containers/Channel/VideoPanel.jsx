import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import arrayMove from "array-move";
import { openInviteModal, openProfileModal } from "../../redux/actions";
import { mapIdsToUsers, calculatePlayerStatus } from "../../helpers/functions";
import VideoSection from "../../comp/VideoSection";
import QueueSection from "../../comp/QueueSection";
export default function VideoPanel({
  playlist,
  startPlayerStatus,
  classNames,
  dispatchPlay,
  dispatchPause,
  dispatchSkip,
  handleDeleteVideo
}) {
  const [queueList, setQueueList] = useState(playlist);
  // const [playerStatus, setPlayerStatus] = useState(
  //   calculatePlayerStatus(startPlayerStatus, playlist));

  const handlerChange = ({ oldIndex, newIndex }) => {
    setQueueList(arrayMove(queueList, oldIndex, newIndex));
  };

  // useEffect(() => {
  //   setPlayerStatus(calculatePlayerStatus(startPlayerStatus, playlist));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [startPlayerStatus]);

  // console.log(playerStatus);

  const playerStatus = calculatePlayerStatus(startPlayerStatus, playlist);

  const { channelId, roomId } = useParams();
  const finalId = channelId || roomId;

  const viewerIds = useSelector(state => state.channels[finalId].members) || [];
  const isInvitingAllowed =
    useSelector(state => state.channels[finalId].type) === "group";

  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const viewers = viewerIds
    ? mapIdsToUsers(viewerIds, users, defaultAvatar)
    : [];

  const playNextVideo = () => {
    // if (playlist.length < playerStatus.queueStartPosition + 1) {
    //   setPlayerStatus({
    //     queueStartPosition: playerStatus.queueStartPosition + 1,
    //     videoStartTime: 0,
    //     status: playerStatus.status
    //   });
    // } else {
    //   setPlayerStatus({
    //     queueStartPosition: 0,
    //     videoStartTime: 0,
    //     status: "Ended"
    //   });
    // }
  };

  const dispatch = useDispatch();
  return (
    <div className={classNames}>
      <VideoSection
        {...playlist[playerStatus.queueStartPosition]}
        playerStatus={playerStatus}
        activeFriendViewers={viewers}
        inviteUsers={() => dispatch(openInviteModal(finalId, false))}
        openProfile={id => dispatch(openProfileModal(id))}
        isInvitingAllowed={isInvitingAllowed}
        dispatchPlay={dispatchPlay}
        dispatchPause={dispatchPause}
        dispatchSkip={dispatchSkip}
        dispatchPlayNextVideo={playNextVideo}
      />
      <QueueSection
        queueList={playlist}
        handlerChange={handlerChange}
        handleDeleteVideo={handleDeleteVideo}
      />
    </div>
  );
}
