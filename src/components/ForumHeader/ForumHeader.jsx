import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  openFollowersModal,
  followChannel,
  unfollowChannel
} from "../../redux/actions";
import Button1 from "../Button1";
import "./ForumHeader.css";

export default function ForumHeader() {
  const { channelId } = useParams();
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const { id: ownId } = useSelector(state => state.self);
  const channel = useSelector(state => state.channels[channelId]);
  const channelIds = useSelector(state => state.self.channelIds);
  const isMember = channelIds.includes(channelId);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const openFollowersModalDispatcher = useCallback(
    () => dispatch(openFollowersModal(channelId)),
    [channelId, dispatch]
  );
  const followChannelDispatcher = useCallback(
    () => dispatch(followChannel(channelId)),
    [channelId, dispatch]
  );
  const unfollowChannelDispatcher = useCallback(
    () => dispatch(unfollowChannel(channelId)),
    [channelId, dispatch]
  );

  const privateAndNotMember = !channel.public && !channel.isMember;
  const isOwner = channel.ownerId === ownId;

  return (
    <div className="ForumHeader--container">
      <img src={channel.icon || defaultIcon} alt="icon" />
      <div className="ForumHeader--bio">
        <h2>{channel.name}</h2>
        {privateAndNotMember ? (
          <h4 className="ForumHeader--privateAndNotMember">
            {channel.memberCount} followers
          </h4>
        ) : (
          <h4 onClick={openFollowersModalDispatcher}>
            <span>{channel.members.length}</span> followers
          </h4>
        )}

        <p>{channel.description}</p>
        <div>
          <p>ADMINS</p>
          <div>
            {channel.admins.map(adminId => (
              <img
                key={adminId}
                src={users[adminId].avatar || defaultAvatar}
                alt="admin icon"
              />
            ))}
          </div>
        </div>
      </div>
      {!isOwner && (
        <Button1
          onClick={
            isMember ? unfollowChannelDispatcher : followChannelDispatcher
          }
        >
          {isMember ? "Unfollow" : "Follow"}
        </Button1>
      )}
    </div>
  );
}
