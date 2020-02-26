import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openFollowersModal } from "../../redux/actions";
import "./ChatHeader.css";

export default function ChatHeader() {
  const { channelId } = useParams();
  const channel = useSelector(state => state.channels[channelId]);
  const dispatch = useDispatch();
  const openFollowersModalDispatcher = useCallback(
    () => dispatch(openFollowersModal(channelId)),
    [channelId, dispatch]
  );

  const loading = !channel?.loaded;

  return (
    <div className="ChatHeader--container">
      {loading ? (
        <Skeleton height={40} width={250} />
      ) : channel.public ? (
        <div className="ChatHeader--live">
          <p>Live Chat</p>
        </div>
      ) : (
        <div className="ChatHeader--private">
          <p onClick={openFollowersModalDispatcher}>
            Private Chat - <span>{channel.members.length} people</span>
          </p>
        </div>
      )}
    </div>
  );
}
