import React from "react";
import "./AvatarDeck.css";

export default function AvatarDeck({ avatars, size = "big" }) {
  let newSize = 48;
  const length = avatars.length >= 8 ? 8 : avatars.length;

  if (size === "big") newSize = 44;
  else if (size === "medium") newSize = 31;
  else if (size === "small") newSize = 25;

  return (
    <div
      className="AvatarDeck--container"
      style={{
        height: newSize,
        width:
          avatars.length > 8
            ? (newSize * (17 - (length - 1) * 0.85) * (length - 1)) / 22 -
              newSize * (17 - (length - 1) * 2.54) +
              newSize
            : (newSize * (17 - (length - 1) * 0.85) * (length - 1)) / 22 +
              newSize
      }}
    >
      {avatars.slice(0, length).map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt="avatar"
          className="AvatarDeck--avatar"
          style={{
            height: newSize,
            width: newSize,
            zIndex: length - index,
            left: `${(newSize * (17 - index * 0.85) * index) / 22}px`
          }}
        ></img>
      ))}
      {avatars.length > 8 && (
        <p
          style={{
            height: newSize,
            width: newSize,
            left: `${(newSize * (17 - (length - 1) * 0.85) * (length - 1)) /
              22 -
              newSize * (17 - (length - 1) * 2.54)}px`,
            fontSize:
              size === "big" ? "14px" : size === "medium" ? "12px" : "10px"
          }}
        >
          +{avatars.length}4
        </p>
      )}
    </div>
  );
}
