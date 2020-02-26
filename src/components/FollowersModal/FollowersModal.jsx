import React, { useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _, { orderBy } from "lodash";
import { openProfileModal } from "../../redux/actions";

import "./FollowersModal.css";

export default function FollowersModal() {
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");
  const { channelId } = useSelector(state => state.modal);
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  // const abc = matchPath(pathname, {
  //   path: "/channels/:channelId",
  //   exact: false,
  //   strict: false
  // });
  // console.log("A", abc);

  // const channelId1 = matchPath(pathname, {
  //   path: "/rooms/:channelId",
  //   exact: false,
  //   strict: false
  // }).params.channelId;

  // const channelId2 = matchPath(pathname, {
  //   path: "/channels/:channelId",
  //   exact: false,
  //   strict: false
  // }).params.channelId;

  // const channelId = channelId1 || channelId2;

  const channel = useSelector(state => state.channels[channelId]);

  const filteredUsers = orderBy(
    channel.members
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
    <div className="FollowersModal--container">
      <div className="FollowersModal--header">
        <h3>{channel.members.length} followers</h3>
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
          filteredUsers.map(user => (
            <div
              role="button"
              className="FollowersModal--user"
              key={user.id}
              onClick={() => dispatch(openProfileModal(user.id))}
            >
              <img src={user.avatar} alt={`${user.username} avatar`} />
              <div>
                <p>{user.username}</p>
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
