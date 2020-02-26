import React, { useState, useCallback } from "react";
import _ from "lodash";
import { useLocation, matchPath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  openProfileModal,
  createRoom,
  inviteFriends,
  addInviteChannel,
  addInviteFriend,
  removeInviteFriend,
  openRoomExistsModal
} from "../../redux/actions";
import Button1 from "../Button1";
import Checkbox2 from "../Checkbox2";
import "./InviteModal.css";

const Spinner = () => (
  <div className="InviteModal--spinner">
    <div className="InviteModal--spinner--circle" />
  </div>
);

export default function InviteModal({ create, anon }) {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const { channelId } = useSelector(state => state.modal);
  const { id: ownId } = useSelector(state => state.self);
  const { friends } = useSelector(state => state.relationships);
  const { selectedFriends } = useSelector(state => state.invite);
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const channels = useSelector(state => state.channels);
  // const {
  //   inviteApiLoading: apiLoading,
  //   inviteApiError: apiError
  // } = useSelector(state => state.apiState);
  const apiLoading = false;
  const apiError = false;
  const dispatch = useDispatch();

  const rooms = Object.values(channels)
    .filter(channel => channel.type === "group")
    .map(room => room.members);
  // .filter(room => room.length > 2);

  const pageUrl = window.location.href
    .split("/")
    .slice(0, 5)
    .join("/");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {}
  };

  let filteredUsers = friends
    .map(userId => ({
      id: userId,
      fullName: `${users[userId].firstName} ${users[userId].lastName}`,
      username: users[userId].username,
      avatar: users[userId].avatar || defaultAvatar
    }))
    .filter(user => user.username.toLowerCase().includes(search.toLowerCase()));
  // let filteredUsers;

  const roomCapacity = 8;
  const memberLimit = create
    ? roomCapacity
    : roomCapacity - channels[channelId].members.length;

  if (!create) {
    filteredUsers = filteredUsers.filter(
      user => !channels[channelId].members.includes(user.id)
    );
  }

  let disableRoomCreation = false;

  if (create && selectedFriends.length < 2) {
    disableRoomCreation = true;
  } else if (!create && selectedFriends.length < 1) {
    disableRoomCreation = true;
  }

  if (memberLimit - selectedFriends.length < 0) {
    disableRoomCreation = true;
  }

  const handleCreateRoom = () => {
    const roomExists = rooms.some(room =>
      _.isEmpty(_.xor([...selectedFriends, ownId], room))
    );

    if (roomExists) {
      dispatch(openRoomExistsModal());
    } else {
      dispatch(createRoom(selectedFriends));
    }
  };

  const handleInviteFriends = () => {
    dispatch(addInviteChannel(channelId));

    const roomExists = rooms.some(room =>
      _.isEmpty(
        _.xor([...channels[channelId].members, ...selectedFriends], room)
      )
    );

    if (roomExists) {
      dispatch(openRoomExistsModal());
    } else {
      dispatch(inviteFriends({ channelId, selectedFriends }));
    }
  };

  return (
    <div className="InviteModal--container">
      <div className="InviteModal--header">
        <h3>Invite friends to watch with you!</h3>
      </div>
      <div className="InviteModal--content">
        {anon && (
          <div className="InviteModal--inviteLink">
            <div className="InviteModal--icon">
              <i className="fas fa-user-plus fa-4x" />
            </div>
            <div>
              <p className="InviteModal--share">Copy and share this link:</p>
              <div className="InviteModal--link">
                <p>{pageUrl}</p>
                <Button1 pill onClick={copied ? undefined : handleCopy}>
                  {copied ? "Copied!" : "Copy"}
                </Button1>
              </div>
            </div>
          </div>
        )}
        {memberLimit - selectedFriends.length <= 0 ? (
          <p className="InviteModal--canAdd InviteModal--canAdd--error">
            This group has a {roomCapacity} member limit.
          </p>
        ) : (
          <p className="InviteModal--canAdd">
            You can add {memberLimit - selectedFriends.length} more friends.
          </p>
        )}
        <div className="InviteModal--search">
          <div>
            <i className="fas fa-search fa-lg" />
            <div>
              {selectedFriends.map(sf => (
                <div
                  key={sf}
                  role="button"
                  className="InviteModal--search--selectedFriend"
                  onClick={() => dispatch(removeInviteFriend(sf))}
                >
                  <p>{users[sf].username}</p>
                  <i className="fas fa-times" />
                </div>
              ))}
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                spellCheck={false}
              />
            </div>
          </div>
          <Button1
            pill
            disabled={disableRoomCreation || apiLoading}
            onClick={create ? handleCreateRoom : handleInviteFriends}
          >
            {apiLoading ? <Spinner /> : "Add"}
          </Button1>
        </div>
        <div className="InviteModal--users">
          {filteredUsers.length === 0 ? (
            <div className="InviteModal--noneFound">
              <h4>No users found</h4>
            </div>
          ) : (
            filteredUsers.map(user => (
              <div className="InviteModal--user" key={user.id}>
                <img
                  src={user.avatar}
                  alt={`${user.username} avatar`}
                  onClick={() => dispatch(openProfileModal(user.id))}
                />
                <div
                  role="button"
                  onClick={() => dispatch(openProfileModal(user.id))}
                >
                  <p>{user.username}</p>
                  <p>{user.fullName}</p>
                </div>
                <Checkbox2
                  checked={selectedFriends.includes(user.id)}
                  onChange={() =>
                    selectedFriends.includes(user.id)
                      ? dispatch(removeInviteFriend(user.id))
                      : dispatch(addInviteFriend(user.id))
                  }
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
