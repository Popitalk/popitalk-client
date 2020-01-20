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
  const create = useSelector(state => state.inviteState.channelId.length === 0);
  const { id: ownId } = useSelector(state => state.userState);
  const { selectedFriends } = useSelector(state => state.inviteState);
  const { users, channels, defaultAvatar } = useSelector(
    state => state.generalState
  );
  const dispatch = useDispatch();
  const closeAllModalsDispatcher = useCallback(
    () => dispatch(closeAllModals()),
    [dispatch]
  );

  const roomId = matchPath(pathname, {
    path: "/rooms/:roomId",
    exact: true,
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
      ([channelId, channel]) => channel.type === "room"
    ),
    c => new Date(c[1].createdAt),
    "desc"
  ).find(([roomId2, room]) =>
    _.isEmpty(
      create
        ? _.xor([...selectedFriends, ownId], room.users)
        : _.xor([...channels[roomId].users, ...selectedFriends], room.users)
    )
  );

  const existingRoom = {
    id: existingRoomArr[0],
    ...existingRoomArr[1]
  };

  const roomUsers = existingRoom.users;
  const images =
    roomUsers.length === 2
      ? roomUsers
          .filter(userId => userId !== ownId)
          .map(userId => users[userId].avatar || defaultAvatar)
      : roomUsers
          .sort((a, b) =>
            users[a].username.toLowerCase() > users[b].username.toLowerCase()
              ? 1
              : users[b].username.toLowerCase() >
                users[a].username.toLowerCase()
              ? -1
              : 0
          )
          .map(userId => users[userId].avatar || defaultAvatar);

  const online = roomUsers.length === 1 && roomUsers[0].online;

  let roomName =
    existingRoom.name ||
    (roomUsers.length === 2
      ? users[roomUsers.filter(userId => userId !== ownId)[0]].username
      : roomUsers
          .sort((a, b) =>
            users[a].username.toLowerCase() > users[b].username.toLowerCase()
              ? 1
              : users[b].username.toLowerCase() >
                users[a].username.toLowerCase()
              ? -1
              : 0
          )
          .map(userId => users[userId].username)
          .join(", "));

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
