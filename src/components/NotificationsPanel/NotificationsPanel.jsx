import React from "react";
import "./NotificationsPanel.css";

const notifications = [
  {
    id: "a1",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "Andrew added you back!"
  },
  {
    id: "a2",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    message: "Andrew followed your Channel!"
  },
  {
    id: "a3",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    message: "Andrew posted on your Channel"
  },
  {
    id: "a4",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "Andrew liked your post"
  },
  {
    id: "a5",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    message: "Andrew posted on your Channel"
  },
  {
    id: "a6",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    message: "Andrew added you back!"
  },
  {
    id: "a7",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "Andrew liked your post"
  },
  {
    id: "a8",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    message: "Andrew followed your Channel!"
  },
  {
    id: "a9",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    message: "Andrew added you back!"
  },
  {
    id: "a61",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    message: "Andrew added you back!"
  },
  {
    id: "a72",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "Andrew liked your post"
  },
  {
    id: "a83",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    message: "Andrew followed your Channel!"
  },
  {
    id: "a94",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    message: "Andrew added you back!"
  },
  {
    id: "a95",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    message: "Andrew added you back!"
  },
  {
    id: "a614",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    message: "Andrew added you back!"
  },
  {
    id: "a723",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    message: "Andrew liked your post"
  },
  {
    id: "a832",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    message: "Andrew followed your Channel!"
  },
  {
    id: "a941",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    message: "Andrew added you back!"
  }
];

export default function NotificationsPanel() {
  return (
    <div className="NotificationsPanel--container">
      <div className="NotificationsPanel--header">
        <h6>Notifications</h6>
        {notifications && <p>Clear</p>}
      </div>
      {notifications ? (
        <div className="NotificationsPanel--notifications">
          {notifications.map(notification => (
            <div key={notification.id}>
              <img src={notification.avatar} alt="avatar" />
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="NotificationsPanel--noNotifications">
          <p>No new notifications</p>
        </div>
      )}
    </div>
  );
}
