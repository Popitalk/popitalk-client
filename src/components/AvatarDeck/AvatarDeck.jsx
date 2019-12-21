import React from "react";
import "./AvatarDeck.css";

export default function AvatarDeck({ avatars, size = "big" }) {
  let newSize = 48;

  if (size === "big") newSize = 44;
  else if (size === "medium") newSize = 31;
  else if (size === "small") newSize = 25;

  return (
    <div className="AvatarDeck--container">
      {avatars.slice(0, 8).map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt="avatar"
          className="AvatarDeck--avatar"
          style={{
            height: newSize,
            width: newSize,
            zIndex: avatars.length - index,
            left: `${newSize * index - index * (newSize / 4 + index * 1.1)}px`
            // left: `${index * ((small ? 16 : 20) - (index + 1) * 1.001)}px`
            // opacity: 1 - (0.1 + index * 0.05)
            // opacity: 1 - index * (small ? 0.04 : 0.08)
          }}
        ></img>
      ))}
      <p
        style={{
          height: newSize,
          width: newSize,
          left: `${newSize * 8 - 8 * (newSize / 4 + 8 * 1.1) + 15}px`,
          fontSize:
            size === "big" ? "14px" : size === "medium" ? "12px" : "10px"
        }}
      >
        +123
      </p>
    </div>
  );
}
