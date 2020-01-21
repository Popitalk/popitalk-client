import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  openProfileModal,
  openWatchingModal,
  openInviteModal
} from "../../redux/actions";
import "./WatchingUsersList.css";

const onlineUsers = [
  {
    id: "a1",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a2",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  },
  {
    id: "a3",
    avatar: "https://i.imgur.com/tLljw1z.jpg"
  },
  {
    id: "a4",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a5",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  },
  {
    id: "a6",
    avatar: "https://i.imgur.com/tLljw1z.jpg"
  },
  {
    id: "a7",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a8",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  },
  {
    id: "a9",
    avatar: "https://i.imgur.com/tLljw1z.jpg"
  },
  {
    id: "a10",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a11",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  },
  {
    id: "a12",
    avatar: "https://i.imgur.com/tLljw1z.jpg"
  },
  {
    id: "a13",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a14",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  }
];

export default function WatchingUsersList() {
  const { roomId, channelId } = useParams();
  const { channels, groupRoomMemberLimit } = useSelector(
    state => state.generalState
  );
  const dispatch = useDispatch();
  const openWatchingModalDispatcher = useCallback(
    () => dispatch(openWatchingModal()),
    [dispatch]
  );
  const openInviteModalDispatcher = useCallback(
    () => dispatch(openInviteModal()),
    [dispatch]
  );
  const openProfileModalDispatcher = useCallback(
    () => dispatch(openProfileModal()),
    [dispatch]
  );

  return (
    <div className="WatchingUsersList--container">
      <p>Watching now</p>
      {onlineUsers.slice(0, 10).map(user => (
        <img
          src={user.avatar}
          alt="avatar"
          key={user.id}
          onClick={openProfileModalDispatcher}
          className="WatchingUsersList--user"
        />
      ))}
      {onlineUsers.length > 10 && (
        <div
          role="button"
          className="WatchingUsersList--more"
          onClick={openWatchingModalDispatcher}
        >
          <p>+123</p>
        </div>
      )}
      {(channels[roomId || channelId].type === "channels" ||
        (channels[roomId || channelId].type === "group" &&
          channels[roomId].users.length < groupRoomMemberLimit)) && (
        <button
          type="button"
          className="button round"
          onClick={openInviteModalDispatcher}
        >
          <i className="fas fa-user-plus fa-sm" />
        </button>
      )}
    </div>
  );
}
