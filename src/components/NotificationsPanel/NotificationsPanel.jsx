import React from "react";
import "./NotificationsPanel.css";

const friendRequests = [
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
  }
];

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
      <div className="NotificationsPanel--friends">
        <div className="NotificationsPanel--header">
          <h6>Friend Requests</h6>
        </div>
        <div className="NotificationsPanel--friendRequests">
          {friendRequests.map(requests => (
            <div key={requests.id} className="NotificationsPanel--request">
              <div>
                <button type="button" className="button round">
                  <i className="fas fa-times fa-lg" />
                </button>
                <div>
                  <p>{requests.username}</p>
                  <p>{requests.fullName}</p>
                </div>
                <img src={requests.avatar} alt="avatar" />
              </div>
              <button type="button" className="button">
                Accept
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="NotificationsPanel--channel">
        <div className="NotificationsPanel--header">
          <h6>Notifications</h6>
          {notifications && <p>Clear</p>}
        </div>
        <div className="NotificationsPanel--notifications">
          {notifications.map(notification => (
            <div key={notification.id}>
              <img src={notification.avatar} alt="avatar" />
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="NotificationsPanel--noNotifications">
<p>No new notifications</p>
</div> */
}
