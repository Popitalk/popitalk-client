import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import arrayMove from "array-move";
import { openInviteModal, openProfileModal } from "../../redux/actions";
import { mapIdsToUsers, calculatePlayerStatus } from "../../helpers/functions";
import VideoSection from "../../comp/VideoSection";
import QueueSection from "../../comp/QueueSection";
export default function VideoPanel({
  playlist,
  playerStatus,
  classNames,
  dispatchPlay,
  dispatchPause,
  dispatchSkip,
  dispatchUpdatePlayerStatus,
  handleDeleteVideo
}) {
  const [queueList, setQueueList] = useState(playlist);
  const handlerChange = ({ oldIndex, newIndex }) => {
    setQueueList(arrayMove(queueList, oldIndex, newIndex));
  };

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

  const dispatch = useDispatch();
  return (
    <div className={classNames}>
      <VideoSection
        {...playlist[playerStatus.queueStartPosition]}
        videoStartTime={playerStatus.videoStartTime}
        status={playerStatus.status}
        queueStartPosition={playerStatus.queueStartPosition}
        activeFriendViewers={viewers}
        inviteUsers={() => dispatch(openInviteModal(finalId, false))}
        openProfile={id => dispatch(openProfileModal(id))}
        isInvitingAllowed={isInvitingAllowed}
        dispatchPlay={dispatchPlay}
        dispatchPause={dispatchPause}
        dispatchSkip={dispatchSkip}
        dispatchUpdatePlayerStatus={dispatchUpdatePlayerStatus}
      />
      <QueueSection
        queueList={playlist}
        handlerChange={handlerChange}
        handleDeleteVideo={handleDeleteVideo}
      />
    </div>
  );
}
