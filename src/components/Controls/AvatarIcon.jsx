import React from "react";

export default function AvatarIcon({
  avatar,
  username,
  imageClick,
  className = "",
  watching,
  tooltip,
  tooltipPlace
}) {
  const handleClick = event => {
    event.stopPropagation();
    imageClick();
  };

  const defaultClassName = "img w-12 h-12 rounded-circle";
  return (
    <div className={watching && "p-1 bg-gradient-r-primary rounded-circle"}>
      <div className="p-1 bg-secondaryBackground rounded-circle">
        <img
          className={className ? className : defaultClassName}
          role="button"
          src={avatar}
          alt={`${username}'s avatar`}
          onClick={imageClick ? e => handleClick(e) : null}
          data-tip={tooltip}
          data-place={tooltipPlace}
        />
      </div>
    </div>
  );
}
