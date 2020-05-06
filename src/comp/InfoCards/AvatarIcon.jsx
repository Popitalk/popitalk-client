import React from "react";

export default function AvatarIcon({ avatar, username, imageClick }) {
  const handleClick = event => {
    event.stopPropagation();
    imageClick();
  };

  return (
    <img
      className="img w-12 h-12 rounded-circle mr-4"
      role="button"
      src={avatar}
      alt={`${username}'s avatar`}
      onClick={imageClick ? e => handleClick(e) : null}
    />
  );
}
