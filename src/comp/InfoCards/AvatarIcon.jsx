import React from "react";

export default function AvatarIcon({
  avatar,
  username,
  imageClick,
  className = ""
}) {
  const handleClick = event => {
    event.stopPropagation();
    imageClick();
  };

  const defaultClassName = "img w-12 h-12 rounded-circle";
  return (
    <img
      className={className ? className : defaultClassName}
      role="button"
      src={avatar}
      alt={`${username}'s avatar`}
      onClick={imageClick ? e => handleClick(e) : null}
    />
  );
}
