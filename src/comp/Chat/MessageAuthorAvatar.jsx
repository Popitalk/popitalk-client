import React from "react";

export default function MessageAuthorAvatar({ message, defaultAvatar }) {
  return (
    <img
      className="w-8 h-8 rounded-full object-cover"
      src={message.avatar || defaultAvatar}
      alt={message.username}
    />
  );
}
