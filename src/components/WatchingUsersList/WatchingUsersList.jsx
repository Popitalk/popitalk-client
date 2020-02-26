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
  const { channelId } = useParams();
  const { groupRoomMemberLimit } = useSelector(state => state.general);
  const channel = useSelector(state => state.channels[channelId]);
  const dispatch = useDispatch();
  const openWatchingModalDispatcher = useCallback(
    () => dispatch(openWatchingModal()),
    [dispatch]
  );
  const openInviteModalDispatcher = useCallback(
    () => dispatch(openInviteModal(channelId)),
    [channelId, dispatch]
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
      {(channel?.type === "channel" ||
        (channel?.type === "group" &&
          channel.members.length < groupRoomMemberLimit)) && (
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
