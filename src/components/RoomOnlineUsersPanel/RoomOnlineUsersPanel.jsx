import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openProfileModal, openInviteModal } from "../../redux/actions";
import "./RoomOnlineUsersPanel.css";

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
  }
];

export default function RoomOnlineUsersPanel() {
  const dispatch = useDispatch();
  const openInviteModalDispatcher = useCallback(
    () => dispatch(openInviteModal()),
    [dispatch]
  );
  const openProfileModalDispatcher = useCallback(
    () => dispatch(openProfileModal()),
    [dispatch]
  );

  return (
    <div className="RoomOnlineUsersPanel--container">
      {onlineUsers.slice(0, 15).map(user => (
        <div
          key={user.id}
          role="button"
          onClick={openProfileModalDispatcher}
          className="RoomOnlineUsersPanel--user"
        >
          <img src={user.avatar} alt="avatar" />
        </div>
      ))}
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
