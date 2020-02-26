import React, { useState, useEffect, useRef } from "react";
import sortBy from "lodash/sortBy";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import { getChannel, updateRoom } from "../../redux/actions";
import { useParams } from "react-router-dom";
import VideoPanel from "../VideoPanel";
import RoomMenu from "../RoomMenu";
import "./RoomMain.css";

export default function RoomMain() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { channelId } = useParams();
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const channel = useSelector(state => state.channels[channelId]);
  const { id: ownId, username: ownUsername, avatar: ownAvatar } = useSelector(
    state => state.self
  );
  const apiLoading = useSelector(state => state.api.room.loading);
  const apiError = useSelector(state => state.api.room.error);
  const loading = useSelector(state => !state.channels[channelId]?.loaded);

  // useEffect(() => {
  //   if (channels[channelId] && !channels[channelId]?.loaded) {
  //     dispatch(getChannel(channelId));
  //   } else if (!_.isEmpty(channels) && !channels[channelId]) {
  //     console.log("NO ROOM");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [channelId]);

  useEffect(() => {
    if (channel && !channel?.loaded) {
      dispatch(getChannel(channelId));
    } else if (!channel) {
      dispatch(getChannel(channelId));
      console.log("NO ROOM");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  useEffect(() => {
    if (editing) {
      inputRef.current.select();
    }
  }, [editing]);

  let room;
  let roomUsers;
  let roomType;
  let roomName;

  if (!loading) {
    room = channel;
    roomUsers = room.members;
    roomType = room.type;

    if (room.name) {
      roomName = room.name;
    } else if (roomType === "friend") {
      roomName =
        users[roomUsers.filter(userId => userId !== ownId)[0]].username;
    } else if (roomType === "self") {
      roomName = ownUsername;
    } else if (roomType === "group") {
      roomName = sortBy(roomUsers, userId =>
        users[userId].username.toLowerCase()
      )
        .map(userId => users[userId].username)
        .join(", ");
    }

    if (roomName.length > 25) {
      roomName = `${roomName.slice(0, 25)}...`;
    }
  }

  const handleNameChange = () => {
    if (name.length >= 3 && name.length <= 20) {
      dispatch(updateRoom(channelId, { name }));
    }
    setEditing(false);
  };

  return (
    <div className="RoomMain--container">
      <div className="RoomMain--header">
        {loading ? (
          <Skeleton height={20} width={250} />
        ) : (
          <div>
            {roomType === "self" && (
              <img
                src={users[ownId].avatar || defaultAvatar}
                alt={`${users[ownId].username}'s avatar`}
              />
            )}
            {roomType === "friend" && (
              <img
                src={
                  users[roomUsers.filter(userId => userId !== ownId)].avatar ||
                  defaultAvatar
                }
                alt={`${
                  users[roomUsers.filter(userId => userId !== ownId)].username
                }'s avatar`}
              />
            )}
            {apiLoading ? (
              <Skeleton height={20} width={250} />
            ) : editing ? (
              <input
                ref={inputRef}
                type="text"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    handleNameChange();
                  } else if (e.key === "Escape") {
                    setEditing(false);
                  }
                }}
                onBlur={handleNameChange}
              />
            ) : (
              <>
                <h3>{roomName}</h3>
                {roomType === "group" && (
                  <i
                    className="fas fa-pen fa-lg"
                    role="button"
                    onClick={() => {
                      setName(roomName);
                      setEditing(true);
                    }}
                  />
                )}
                {roomType === "group" && roomName && (
                  <p
                    onClick={() => {
                      dispatch(updateRoom(channelId, { resetName: true }));
                    }}
                  >
                    Reset
                  </p>
                )}
              </>
            )}
          </div>
        )}
        {!loading && roomType === "group" && <RoomMenu />}
      </div>
      <section ref={scrollRef}>
        {loading ? <Skeleton height={10000} /> : <VideoPanel />}
      </section>
    </div>
  );
}
