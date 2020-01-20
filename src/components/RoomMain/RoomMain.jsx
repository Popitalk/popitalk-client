import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import { getChannel, updateRoom } from "../../redux/actions";
import { useParams } from "react-router-dom";
import VideoPanel from "../VideoPanel";
import "./RoomMain.css";

export default function RoomMain() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const { users, channels, defaultAvatar } = useSelector(
    state => state.generalState
  );
  const { id: ownId, avatar, username } = useSelector(state => state.userState);
  const { roomApiLoading: apiLoading, roomApiError: apiError } = useSelector(
    state => state.apiState
  );

  useEffect(() => {
    if (channels[roomId] && !channels[roomId]?.loaded) {
      dispatch(getChannel(roomId));
    } else if (!_.isEmpty(channels) && !channels[roomId]) {
      console.log("NO ROOM");
    }
  }, [dispatch, roomId, channels]);

  useEffect(() => {
    if (editing) {
      inputRef.current.select();
    }
  }, [editing]);

  let roomUsers = channels[roomId]?.users;
  let roomName =
    channels[roomId]?.name ||
    (roomUsers?.length === 2
      ? users[roomUsers?.filter(userId => userId !== ownId)[0]].username
      : roomUsers
          ?.sort((a, b) =>
            users[a].username.toLowerCase() > users[b].username.toLowerCase()
              ? 1
              : users[b].username.toLowerCase() >
                users[a].username.toLowerCase()
              ? -1
              : 0
          )
          ?.map(userId => users[userId].username)
          .join(", "));

  if (roomName?.length > 25) {
    roomName = `${roomName.slice(0, 25)}...`;
  }

  const loading = !channels[roomId]?.loaded;

  const handleNameChange = () => {
    if (name.length >= 3 && name.length <= 20) {
      dispatch(updateRoom(roomId, { name }));
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
            {roomUsers.length === 2 && (
              <img
                src={users[roomUsers.filter(userId => userId !== ownId)].avatar}
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
                  console.log("KEY IS", e.key);
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
                <i
                  className="fas fa-pen fa-lg"
                  role="button"
                  onClick={() => {
                    setName(roomName);
                    setEditing(true);
                  }}
                />
              </>
            )}
            {/* {editing ? (
              <input
                type="text"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    handleNameChange();
                  }
                }}
                onBlur={handleNameChange}
              />
            ) : (
              <h3>{roomName}</h3>
            )}

            <i
              className="fas fa-pen fa-lg"
              role="button"
              onClick={() => {
                setName(roomName);
                setEditing(true);
              }}
            /> */}
          </div>
        )}
      </div>
      <section ref={scrollRef}>
        {loading ? <Skeleton height={10000} /> : <VideoPanel />}
      </section>
    </div>
  );
}
