import React from "react";
import classNames from "classnames";
import "./AvatarDeck.css";

export default function AvatarDeck({ avatars, small, big }) {
  const classes = classNames({
    "AvatarDeck--container": true,
    "AvatarDeck--small": small,
    "AvatarDeck--big": big
  });
  return (
    <div className={classes}>
      {avatars.slice(0, 7).map((avatar, index) => (
        <div
          className="AvatarDeck--avatar"
          key={index}
          style={{
            zIndex: avatars.length - index,
            left: `${index * ((small ? 16 : 20) - (index + 1) * 1.001)}px`,
            opacity: 1 - index * (small ? 0.04 : 0.08)
          }}
        >
          <img src={avatar} alt="avatar" />
        </div>
      ))}
    </div>
  );
}
