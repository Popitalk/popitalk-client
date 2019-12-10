import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
import "./BlockedUsersModal.css";

const users = [
  {
    id: "a1",
    username: "x1",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a2",
    username: "x2",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  },
  {
    id: "a3",
    username: "y1",
    avatar: "https://i.imgur.com/tLljw1z.jpg"
  },
  {
    id: "a4",
    username: "abc",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a5",
    username: "abc",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  },
  {
    id: "a6",
    username: "abc",
    avatar: "https://i.imgur.com/tLljw1z.jpg"
  },
  {
    id: "a7",
    username: "abc",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a8",
    username: "abc",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  },
  {
    id: "a9",
    username: "abc",
    avatar: "https://i.imgur.com/tLljw1z.jpg"
  },
  {
    id: "a10",
    username: "abc",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a11",
    username: "abc",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  },
  {
    id: "a12",
    username: "abc",
    avatar: "https://i.imgur.com/tLljw1z.jpg"
  },
  {
    id: "a13",
    username: "abc",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a14",
    username: "abc",
    avatar: "https://i.imgur.com/88oSmeX.jpg"
  }
];

export default function BlockedUsersModal() {
  const [search, setSearch] = useState("");
  const firstModal = useSelector(
    ({ modalState }) => modalState.open.length === 1
  );
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  const filteredUsers = users.filter(user => user.username.includes(search));

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
      </div>
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
      <div className="BlockedUsersModal--users">
        {filteredUsers.length === 0 ? (
          <div className="BlockedUsersModal--noneFound">
            <h4>No users found</h4>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div className="BlockedUsersModal--user" key={user.id}>
              <img src={user.avatar} alt={`${user.username} avatar`} />
              <div>
                <p>{user.username}</p>
                <p>Slacking Slack</p>
              </div>
              <button type="button" className="button">
                Unblock
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
