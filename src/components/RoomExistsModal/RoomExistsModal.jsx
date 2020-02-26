import React, { useCallback } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  closeAllModals,
  createRoom,
  inviteFriends
} from "../../redux/actions";
import Button1 from "../Button1";
import RoomIcon2 from "../RoomIcon2";
import "./RoomExistsModal.css";

export default function RoomExistsModal() {
  const { pathname } = useLocation();
  const create = useSelector(state => !state.invite.channelId);
  const { id: ownId, username: ownUsername } = useSelector(state => state.self);
  const { selectedFriends } = useSelector(state => state.invite);
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const channels = useSelector(state => state.channels);

  const dispatch = useDispatch();
  const closeAllModalsDispatcher = useCallback(
    () => dispatch(closeAllModals()),
    [dispatch]
  );

  const roomId = matchPath(pathname, {
    path: "/rooms/:roomId",
    exact: false,
    strict: false
  })?.params?.roomId;

  const handleCreateOrInvite = () => {
    if (create) {
      dispatch(closeModal());
      dispatch(createRoom());
    } else {
      dispatch(closeModal());
      dispatch(inviteFriends());
    }
  };

  const existingRoomArr = _.orderBy(
    Object.entries(channels).filter(
      ([channelId, channel]) => channel.type === "group"
    ),
    c => new Date(c[1].createdAt),
    "desc"
  ).find(([roomId2, room]) =>
    _.isEmpty(
      create
        ? _.xor([...selectedFriends, ownId], room.members)
        : _.xor([...channels[roomId].members, ...selectedFriends], room.members)
    )
  );

  const existingRoom = {
    id: existingRoomArr[0],
    ...existingRoomArr[1]
  };

  const roomUsers = existingRoom.members;
  const online = existingRoom.type === "friend" && roomUsers[0].online;
  let roomName;
  let images;

  if (existingRoom.type === "friend") {
    images = roomUsers
      .filter(userId => userId !== ownId)
      .map(userId => users[userId].avatar || defaultAvatar);
  } else if (existingRoom.type === "self") {
    images = roomUsers
      .map(userId => users[userId].avatar || defaultAvatar)
      .map(userId => users[userId].avatar || defaultAvatar);
  } else if (existingRoom.type === "group") {
    images = _.sortBy(roomUsers, userId =>
      users[userId].username.toLowerCase()
    ).map(userId => users[userId].avatar || defaultAvatar);
  }

  if (existingRoom.name) {
    roomName = existingRoom.name;
  } else if (existingRoom.type === "friend") {
    roomName = users[roomUsers.filter(userId => userId !== ownId)[0]].username;
  } else if (existingRoom.type === "self") {
    roomName = ownUsername;
  } else if (existingRoom.type === "group") {
    roomName = _.sortBy(roomUsers, userId =>
      users[userId].username.toLowerCase()
    )
      .map(userId => users[userId].username)
      .join(", ");
  }

  if (roomName.length > 25) {
    roomName = `${roomName.slice(0, 25)}...`;
  }
  let roomMessage =
    existingRoom.lastMessage &&
    `${existingRoom.lastMessage.username}: ${existingRoom.lastMessage.message}`;

  if (roomMessage && roomMessage.length > 25) {
    roomMessage = `${roomMessage.slice(0, 25)}...`;
  }

  return (
    <div className="RoomExistsModal--container">
      <h3>That room already exists</h3>
      <p>Click on the below to enter the existing room</p>
      <Link
        className="RoomExistsModal--room"
        to={`/rooms/${existingRoom.id}`}
        onClick={closeAllModalsDispatcher}
      >
        <div className="RoomExistsModal--nameAndMessage">
          <p>{roomName}</p>
          <p>{roomMessage}</p>
        </div>

        <RoomIcon2
          images={images}
          online={online}
          watching={existingRoom.watching}
          type="FriendsPanel"
        />
      </Link>
      <Button1 pill size="lg" onClick={handleCreateOrInvite}>
        Create New Room
      </Button1>
    </div>
  );
}
