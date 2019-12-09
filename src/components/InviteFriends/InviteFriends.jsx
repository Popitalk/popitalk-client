import React, { useState } from "react";
import InviteList from "../InviteList";
import "./InviteFriends.css";

const users = [
  {
    id: "a1",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a2",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a3",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a4",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a5",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a6",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a7",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a8",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a9",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    username: "user1",
    status: "Slacking Slack"
  }
];

export default function InviteFriends() {
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter(user => user.username.includes(search));

  return (
    <div className="InviteFriends--container">
      <h4>Invite friends on Playnow</h4>
      <div className="InviteFriends--search">
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
      <div className="InviteFriends--users">
        {filteredUsers.length === 0 ? (
          <div className="InviteFriends--noneFound">
            <h4>No users found</h4>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div role="button" className="InviteFriends--user" key={user.id}>
              <img src={user.avatar} alt={`${user.username} avatar`} />
              <div>
                <p>{user.username}</p>
                <p>Slacking Slack</p>
              </div>
            </div>
          ))
        )}
      </div>
      {/* <InviteList users={friends} /> */}
    </div>
  );
}
