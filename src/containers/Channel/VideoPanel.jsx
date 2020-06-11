import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import arrayMove from "array-move";
import {
  getChannel,
  openInviteModal,
  openProfileModal
} from "../../redux/actions";
import { mapIdsToUsers } from "../../helpers/functions";
import VideoSection from "../../comp/VideoSection";
import QueueSection from "../../comp/QueueSection";

export default function VideoPanel({ playlist, classNames }) {
  const [queueList, setQueueList] = useState(playlist.slice(1));
  const handlerChange = ({ oldIndex, newIndex }) => {
    setQueueList(arrayMove(queueList, oldIndex, newIndex));
  };

  const { channelId } = useParams();
  console.log("channelId from video panel", channelId);
  const viewerIds =
    useSelector(state => state.channels[channelId].members) || [];
  console.log(
    "channelsInfo",
    useSelector(state => state.channels)
  );
  console.log("viewers", viewerIds);
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const viewers = mapIdsToUsers(viewerIds, users, defaultAvatar);

  const dispatch = useDispatch();

  return (
    <div className={classNames}>
      <VideoSection
        {...playlist[0]}
        activeFriendViewers={viewers}
        inviteUsers={() => dispatch(openInviteModal(channelId))}
        openProfile={id => dispatch(openProfileModal(id))}
      />
      <QueueSection queueList={queueList} handlerChange={handlerChange} />
    </div>
  );
}
