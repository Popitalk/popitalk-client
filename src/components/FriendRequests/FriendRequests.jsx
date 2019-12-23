import React from "react";
import Button1 from "../Button1";
import "./FriendRequests.css";

const requests = [
  {
    id: "a1",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a2",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a3",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a4",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a5",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a6",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a7",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a8",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  }
];

export default function FriendRequests() {
  return (
    <div className="FriendRequests--container">
      <div className="FriendRequests--header">
        <h3>Friend Requests</h3>
      </div>
      <div className="FriendRequests--requests">
        {requests.map(request => (
          <div key={request.id}>
            <button type="button" className="button round">
              <i className="fas fa-times fa-lg" />
            </button>
            <div>
              <p>{request.username}</p>
              <p>{request.fullName}</p>
            </div>
            <img src={request.avatar} alt="avatar" />
            <Button1>
              <i className="fas fa-user-plus" />
            </Button1>
            {/* <button type="button" className="button round">
              <i className="fas fa-user-plus" />
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
