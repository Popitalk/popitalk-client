import React from "react";

export default function NotificationCard({
  avatar,
  username,
  message,
  handleProfile,
  onClick
}) {
  return (
    <div
      className="flex items-center bg-primaryBackground hover:bg-highlightBackground rounded-lg px-4 py-2"
      role="button"
      onClick={e => onClick(e)}
    >
      <img
        className="img w-12 h-12 rounded-circle mr-4"
        role="button"
        src={avatar}
        alt={`${username}'s avatar`}
        onClick={e => handleProfile(e)}
      />
      <div className="mr-4">
        <p className="text-md text-primaryText">{message}</p>
      </div>
    </div>
  );
}
