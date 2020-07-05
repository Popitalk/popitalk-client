import React from "react";
import classnames from "classnames";

export default function AvatarDeck({
  ids,
  avatars,
  size = "md",
  className,
  threshold = 6
}) {
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
      {avatars &&
        avatars.reverse().map((avatar, index) => {
          if (index < threshold) {
            return (
              <img
                key={ids?.[index] || index}
                src={avatar}
                alt="avatar"
                className={avatarClasses}
              />
            );
          } else if (index === avatars.length - 1) {
            const totalLeft = avatars.length - threshold;
            return (
              <button
                className={`${avatarClasses} bg-disabledBackground text-xs self-start focus:outline-none`}
              >{`+${totalLeft}`}</button>
            );
          }
        })}
    </div>
  );
}