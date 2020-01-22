import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openFollowersModal } from "../../redux/actions";
import "./ChatHeader.css";

export default function ChatHeader() {
  const { channelId } = useParams();
  const { channels } = useSelector(state => state.generalState);
  const dispatch = useDispatch();
  const openFollowersModalDispatcher = useCallback(
    () => dispatch(openFollowersModal()),
    [dispatch]
  );

  const loading = !channels[channelId]?.loaded;

  return (
    <div className="ChatHeader--container">
      {loading ? (
        <Skeleton height={40} width={250} />
      ) : channels[channelId].public ? (
        <div className="ChatHeader--live">
          <p>Live Chat</p>
        </div>
      ) : (
        <div className="ChatHeader--private">
          <p onClick={openFollowersModalDispatcher}>
            Private Chat -{" "}
            <span>{channels[channelId].users.length} people</span>
          </p>
        </div>
      )}
    </div>
  );
}
