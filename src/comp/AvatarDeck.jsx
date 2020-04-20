import React from "react";
import classnames from "classnames";

export default function AvatarDeck({ ids, avatars, size = "md", className }) {
  const deckClasses = classnames({
    "flex flex-row-reverse justify-end overflow-hidden": true,
    "children:not-first:-mr-2": size === "sm",
    "children:not-first:-mr-3": size === "md",
    "children:not-first:-mr-4": size === "lg",
    [className]: className
  });
  const avatarClasses = classnames({
    "img inline-block rounded-circle text-white border-2 border-imageBorder2": true,
    "h-6 w-6": size === "sm",
    "h-8 w-8": size === "md",
    "h-10 w-10": size === "lg"
  });
  return (
    <div className={deckClasses}>
      {avatars.reverse().map((avatar, index) => (
        <img
          key={ids?.[index] || index}
          src={avatar}
          alt="avatar"
          className={avatarClasses}
        />
      ))}
    </div>
  );
}
