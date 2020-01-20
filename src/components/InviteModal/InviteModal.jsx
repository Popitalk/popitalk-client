import React, { useState, useCallback } from "react";
import _ from "lodash";
import { useLocation, matchPath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  openProfileModal,
  createRoom,
  inviteFriends,
  addChannel,
  addSelectedFriends,
  removeSelectedFriends,
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
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const { id: ownId, friends } = useSelector(state => state.userState);
  const { selectedFriends } = useSelector(state => state.inviteState);
  const { users, defaultAvatar } = useSelector(state => state.generalState);
  const channels = useSelector(state => state.generalState.channels);
  const {
    inviteApiLoading: apiLoading,
    inviteApiError: apiError
  } = useSelector(state => state.apiState);
  const dispatch = useDispatch();

  const rooms = Object.values(channels)
    .filter(channel => channel.type === "room")
    .map(room => room.users)
    .filter(room => room.length > 2);

  const roomId = matchPath(pathname, {
    path: "/rooms/:roomId",
    exact: true,
    strict: false
  })?.params?.roomId;

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
    : roomCapacity - channels[roomId].users.length;

  if (!create) {
    filteredUsers = filteredUsers.filter(
      user => !channels[roomId].users.includes(user.id)
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

  // disableRoomCreation = rooms.some(room =>
  //   _.isEmpty(_.xor([...selectedFriendsIds, ownId], room))
  // );

  const handleCreateRoom = () => {
    const roomExists = rooms.some(room =>
      _.isEmpty(_.xor([...selectedFriends, ownId], room))
    );

    if (roomExists) {
      dispatch(openRoomExistsModal());
    } else {
      dispatch(createRoom());
    }
  };

  const handleInviteFriends = () => {
    dispatch(addChannel(roomId));

    const roomExists = rooms.some(room =>
      _.xor([...channels[roomId].users, ...selectedFriends], room)
    );

    if (roomExists) {
      dispatch(openRoomExistsModal());
    } else {
      dispatch(inviteFriends());
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
                  onClick={() => dispatch(removeSelectedFriends(sf))}
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
                      ? dispatch(removeSelectedFriends(user.id))
                      : dispatch(addSelectedFriends(user.id))
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
