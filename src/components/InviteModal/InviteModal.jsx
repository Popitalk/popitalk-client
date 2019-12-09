import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { openProfileModal } from "../../redux/actions";
import "./InviteModal.css";

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

export default function InviteModal() {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("https://google.com");
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const openProfileModalDispatcher = useCallback(
    () => dispatch(openProfileModal()),
    [dispatch]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {}
  };

  const filteredUsers = users.filter(user => user.username.includes(search));

  return (
    <div className="InviteModal--container">
      <div className="InviteModal--header">
        <h3>Invite friends to watch with you!</h3>
      </div>
      <div className="InviteModal--inviteLink">
        <div className="InviteModal--icon">
          <i className="fas fa-user-plus fa-4x" />
        </div>
        <div>
          <p className="InviteModal--share">Copy and share this link:</p>
          <div className="InviteModal--link">
            <p>{url}</p>
            <button
              type="button"
              className="button pill sm"
              onClick={copied ? undefined : handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
      <h4>Invite friends on Playnow</h4>
      <div className="InviteModal--search">
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
      <div className="InviteModal--users">
        {filteredUsers.length === 0 ? (
          <div className="InviteModal--noneFound">
            <h4>No users found</h4>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div className="InviteModal--user" key={user.id}>
              <img src={user.avatar} alt={`${user.username} avatar`} />
              <div>
                <p>{user.username}</p>
                <p>Slacking Slack</p>
              </div>
              <button type="button" className="button">
                Add to Room
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
