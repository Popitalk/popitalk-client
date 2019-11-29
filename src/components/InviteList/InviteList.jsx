import React from "react";
import "./InviteList.css";

export default function InviteList({ users }) {
  return (
    <div className="InviteList--container">
      {users.map(user => (
        <div key={user.id}>
          <img src={user.avatar} alt="avatar" />
          <div>
            <p>{user.username}</p>
            <p>{user.status}</p>
          </div>
          <div>
            <i className="fas fa-user-plus fa-2x" />
          </div>
        </div>
      ))}
    </div>
  );
}
