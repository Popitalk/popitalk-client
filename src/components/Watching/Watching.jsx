import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { openProfileModal } from "../../redux/actions";
import "./Watching.css";

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

export default function Watching() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const openProfileModalDispatcher = useCallback(
    () => dispatch(openProfileModal()),
    [dispatch]
  );

  const filteredUsers = users.filter(user => user.username.includes(search));

  return (
    <div className="Watching--container">
      <div className="Watching--header">
        <h3>Watching now</h3>
        <div className="Watching--search">
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
      {/* <div className="Watching--search">
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
      </div> */}
      <div className="Watching--users">
        {filteredUsers.length === 0 ? (
          <div className="Watching--noneFound">
            <h4>No users found</h4>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div
              role="button"
              className="Watching--user"
              key={user.id}
              onClick={openProfileModalDispatcher}
            >
              <img src={user.avatar} alt={`${user.username} avatar`} />
              <div>
                <p>{user.username}</p>
                <p>Slacking Slack</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
