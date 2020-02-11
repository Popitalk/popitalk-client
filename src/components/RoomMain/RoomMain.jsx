import React, { useState, useEffect, useRef } from "react";
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
  const { users, channels, defaultAvatar } = useSelector(
    state => state.generalState
  );
  const { id: ownId, username: ownUsername, avatar: ownAvatar } = useSelector(
    state => state.userState
  );
  const { roomApiLoading: apiLoading, roomApiError: apiError } = useSelector(
    state => state.apiState
  );
  const loading = useSelector(
    state => !state.generalState.channels[channelId]?.loaded
  );

  useEffect(() => {
    if (channels[channelId] && !channels[channelId]?.loaded) {
      dispatch(getChannel(channelId));
    } else if (!_.isEmpty(channels) && !channels[channelId]) {
      console.log("NO ROOM");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  useEffect(() => {
    if (editing) {
      inputRef.current.select();
    }
  }, [editing]);

  let roomUsers = channels[channelId]?.users;
  let roomName =
    channels[channelId]?.type === "self"
      ? ownUsername
      : channels[channelId]?.type === "friend"
      ? users[roomUsers?.filter(userId => userId !== ownId)[0]].username
      : channels[channelId]?.name ||
        roomUsers
          ?.sort((a, b) =>
            users[a].username.toLowerCase() > users[b].username.toLowerCase()
              ? 1
              : users[b].username.toLowerCase() >
                users[a].username.toLowerCase()
              ? -1
              : 0
          )
          ?.map(userId => users[userId].username)
          .join(", ");

  if (roomName?.length > 25) {
    roomName = `${roomName.slice(0, 25)}...`;
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
            {channels[channelId].type === "self" && (
              <img
                src={users[ownId].avatar || defaultAvatar}
                alt={`${users[ownId].username}'s avatar`}
              />
            )}
            {channels[channelId].type === "friend" && (
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
                {channels[channelId].type === "group" && (
                  <i
                    className="fas fa-pen fa-lg"
                    role="button"
                    onClick={() => {
                      setName(roomName);
                      setEditing(true);
                    }}
                  />
                )}
                {channels[channelId].type === "group" &&
                  channels[channelId].name && (
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
        {!loading && channels[channelId].type === "group" && <RoomMenu />}
      </div>
      <section ref={scrollRef}>
        {loading ? <Skeleton height={10000} /> : <VideoPanel />}
      </section>
    </div>
  );
}
