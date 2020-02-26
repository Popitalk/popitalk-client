import React, { useState } from "react";
import { orderBy } from "lodash";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal } from "../../redux/actions";
import PopupMenu from "../PopupMenu";
import "./ManageBanned.css";

export default function ManageBanned() {
  const { channelId } = useParams();
  const [search, setSearch] = useState("");
  const { defaultAvatar } = useSelector(state => state.general);
  const channel = useSelector(state => state.channels[channelId]);
  const users = useSelector(state => state.users);
  const apiLoading = false;
  const apiError = false;
  const apiUserId = "xx";

  const dispatch = useDispatch();

  const filteredUsers = orderBy(
    channel.banned
      .map(userId => ({
        id: userId,
        fullName: `${users[userId].firstName} ${users[userId].lastName}`,
        username: users[userId].username,
        avatar: users[userId].avatar || defaultAvatar
      }))
      .filter(user =>
        user.username.toLowerCase().includes(search.toLowerCase())
      ),
    "username"
  );

  return (
    <div className="ManageBanned--container">
      <h3>Members - {channel.banned.length} users</h3>
      <div className="ManageBanned--search">
        <div>
          <div>
            <i className="fas fa-search fa-lg" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            spellCheck={false}
          />
        </div>
      </div>
      <div className="ManageBanned--users">
        {filteredUsers.length === 0 ? (
          <div className="ManageBanned--noneFound">
            <h4>No users found</h4>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div className="ManageBanned--user" key={user.id}>
              <img
                src={user.avatar}
                alt={`${user.username} avatar`}
                onClick={() => dispatch(openProfileModal(user.id))}
              />
              <div
                className="ManageBanned--user--name"
                role="button"
                onClick={() => dispatch(openProfileModal(user.id))}
              >
                <p>{user.username}</p>
                <p>{user.fullName}</p>
              </div>
              {user.id === channel.ownerId ? (
                <p className="ManageBanned--owner">Owner</p>
              ) : (
                <PopupMenu
                  type="banned"
                  userId={user.id}
                  loading={apiLoading && apiUserId === user.id}
                  disabled={apiLoading}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
