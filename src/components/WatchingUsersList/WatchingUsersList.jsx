import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
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
          <p>+{onlineUsers.length}</p>
        </div>
      )}
      <button
        type="button"
        className="button round"
        onClick={openInviteModalDispatcher}
      >
        <i className="fas fa-user-plus fa-md" />
      </button>
    </div>
  );
}
