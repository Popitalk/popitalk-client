import React, { useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal } from "../../redux/actions";
import _ from "lodash";
import "./FollowersModal.css";

export default function FollowersModal() {
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");
  const { users, channels, defaultAvatar } = useSelector(
    state => state.generalState
  );
  const dispatch = useDispatch();

  const channelId1 = matchPath(pathname, {
    path: "/rooms/:channelId",
    exact: true,
    strict: false
  })?.params?.channelId;

  const channelId2 = matchPath(pathname, {
    path: "/channels/:channelId",
    exact: true,
    strict: false
  })?.params?.channelId;

  const channelId = channelId1 || channelId2;

  const filteredUsers = channels[channelId].users
    .filter(userId =>
      users[userId].username.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      users[a].username.toLowerCase() > users[b].username.toLowerCase()
        ? 1
        : users[b].username.toLowerCase() > users[a].username.toLowerCase()
        ? -1
        : 0
    );

  return (
    <div className="FollowersModal--container">
      <div className="FollowersModal--header">
        <h3>{channels[channelId].users.length} followers</h3>
        <div className="FollowersModal--search">
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
      </div>
      <div className="FollowersModal--users">
        {filteredUsers.length === 0 ? (
          <div className="FollowersModal--noneFound">
            <h4>No users found</h4>
          </div>
        ) : (
          filteredUsers.map(userId => (
            <div
              role="button"
              className="FollowersModal--user"
              key={userId}
              onClick={() => dispatch(openProfileModal(userId))}
            >
              <img
                src={users[userId].avatar || defaultAvatar}
                alt={`${users[userId].username} avatar`}
              />
              <div>
                <p>{users[userId].username}</p>
                <p>
                  {users[userId].firstName} {users[userId].lastName}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
