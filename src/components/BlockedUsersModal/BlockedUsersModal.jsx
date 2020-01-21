import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal, unblockUser, closeModal } from "../../redux/actions";
import "./BlockedUsersModal.css";

export default function BlockedUsersModal() {
  const [search, setSearch] = useState("");
  const firstModal = useSelector(
    ({ modalState }) => modalState.components.length === 1
  );
  const { blocked } = useSelector(state => state.userState);
  const { users, defaultAvatar } = useSelector(state => state.generalState);
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  const filteredUsers = blocked
    .map(userId => ({
      id: userId,
      fullName: `${users[userId].firstName} ${users[userId].lastName}`,
      username: users[userId].username,
      avatar: users[userId].avatar || defaultAvatar
    }))
    .filter(user => user.username.includes(search));

  return (
    <div className="BlockedUsersModal--container">
      <div className="BlockedUsersModal--header">
        {!firstModal && (
          <i
            role="button"
            className="fas fa-chevron-left fa-2x"
            onClick={closeModalDispatcher}
          />
        )}
        <h3>Blocked Users</h3>
        <div className="BlockedUsersModal--search">
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
      <div className="BlockedUsersModal--users">
        {filteredUsers.length === 0 ? (
          <div className="BlockedUsersModal--noneFound">
            <h4>No users found</h4>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div className="BlockedUsersModal--user" key={user.id}>
              <img
                src={user.avatar}
                alt={`${user.username} avatar`}
                onClick={() => dispatch(openProfileModal(user.id))}
              />
              <div
                role="button"
                onClick={() => dispatch(openProfileModal(user.id))}
              >
                <p>{user.username}</p>
                <p>{user.fullName}</p>
              </div>
              <button
                type="button"
                className="button"
                onClick={() => dispatch(unblockUser(user.id))}
              >
                Unblock
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
