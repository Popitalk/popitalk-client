import React from "react";
import "./Notifications.css";

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

const updates = [
  {
    id: "a1",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "added you back!"
  },
  {
    id: "a2",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "followed your Channel"
  },
  {
    id: "a3",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "posted on your Channel"
  },
  {
    id: "a4",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "liked your post"
  }
];

export default function Notifications() {
  return (
    <div className="Notifications--container">
      <div className="Notifications--header">
        <h3>Notifications</h3>
        <p>Clear</p>
      </div>

      <div className="Notifications--notifications">
        <h4>Channel Follow Requests</h4>
        <div className="Notifications--requests">
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
              <button type="button" className="button round">
                <i className="fas fa-user-plus" />
              </button>
            </div>
          ))}
        </div>
        <h4>New</h4>
        <div className="Notifications--new">
          {updates.map(update => (
            <div key={update.id}>
              <img src={update.avatar} alt="avatar" />
              <p>
                {update.username} {update.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
