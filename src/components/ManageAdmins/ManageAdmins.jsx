import React, { useState } from "react";
import { orderBy } from "lodash";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal } from "../../redux/actions";
import PopupMenu from "../PopupMenu";
import "./ManageAdmins.css";

export default function ManageAdmins() {
  const { channelId } = useParams();
  const [search, setSearch] = useState("");
  const { channels, users, defaultAvatar } = useSelector(
    state => state.generalState
  );
  const { id: ownId } = useSelector(state => state.userState);
  const {
    userListApiLoading: apiLoading,
    userListApiUserId: apiUserId
  } = useSelector(state => state.apiState);
  const dispatch = useDispatch();

  const filteredUsers = orderBy(
    channels[channelId].admins
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
    <div className="ManageAdmins--container">
      <h3>Members - {channels[channelId].admins.length} users</h3>
      <div className="ManageAdmins--search">
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
      <div className="ManageAdmins--users">
        {filteredUsers.length === 0 ? (
          <div className="ManageAdmins--noneFound">
            <h4>No users found</h4>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div className="ManageAdmins--user" key={user.id}>
              <img
                src={user.avatar}
                alt={`${user.username} avatar`}
                onClick={() => dispatch(openProfileModal(user.id))}
              />
              <div
                className="ManageAdmins--user--name"
                role="button"
                onClick={() => dispatch(openProfileModal(user.id))}
              >
                <p>{user.username}</p>
                <p>{user.fullName}</p>
              </div>
              {channels[channelId].ownerId !== ownId &&
                user.id === channels[channelId].ownerId && (
                  <p className="ManageAdmins--owner">Owner</p>
                )}
              {channels[channelId].ownerId === ownId &&
                (user.id === channels[channelId].ownerId ? (
                  <p className="ManageAdmins--owner">Owner</p>
                ) : (
                  <PopupMenu
                    type="admins"
                    userId={user.id}
                    loading={apiLoading && apiUserId === user.id}
                    disabled={apiLoading}
                  />
                ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
