import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openFollowersModal } from "../../redux/actions";
import Button1 from "../Button1";
import "./ForumHeader.css";

export default function ForumHeader() {
  const { channelId } = useParams();
  const { users, channels, defaultIcon, defaultAvatar } = useSelector(
    state => state.generalState
  );
  const { id: ownId, username: ownUsername, avatar: ownAvatar } = useSelector(
    state => state.userState
  );
  const { roomApiLoading: apiLoading, roomApiError: apiError } = useSelector(
    state => state.apiState
  );
  const dispatch = useDispatch();
  const openFollowersModalDispatcher = useCallback(
    () => dispatch(openFollowersModal()),
    [dispatch]
  );

  return (
    <div className="ForumHeader--container">
      <img src={channels[channelId].icon || defaultIcon} alt="icon" />
      <div className="ForumHeader--bio">
        <h2>{channels[channelId].name}</h2>
        <h4 onClick={openFollowersModalDispatcher}>
          <span>
            {channels[channelId].users.length +
              channels[channelId].admins.length}
          </span>{" "}
          followers
        </h4>
        <p>{channels[channelId].description}</p>
        <div>
          <p>ADMINS</p>
          <div>
            {channels[channelId].admins.map(adminId => (
              <img
                key={adminId}
                src={users[adminId].avatar || defaultAvatar}
                alt="admin icon"
              />
            ))}
          </div>
        </div>
      </div>
      <Button1>Follow</Button1>
    </div>
  );
}
