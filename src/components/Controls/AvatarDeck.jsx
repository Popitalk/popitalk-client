import React from "react";
import classnames from "classnames";
import Button from "./Button";

export default function AvatarDeck({
  ids,
  avatars,
  alt,
  size = "md",
  className,
  threshold = 6
}) {
  const deckClasses = classnames({
    "flex flex-row-reverse justify-end items-center mr-5": true,
    "children:-mr-2": size === "sm",
    "children:-mr-3": size === "md",
    "children:-mr-4": size === "lg",
    [className]: className
  });
  const avatarClasses = classnames({
    "img inline-block rounded-circle text-white border-2 border-background-secondary": true,
    "h-6 w-6": size === "sm",
    "h-8 w-8": size === "md",
    "h-10 w-10": size === "lg"
  });

  return (
    <div className={deckClasses}>
      {avatars &&
        avatars.map((avatar, index) => {
          if (index < threshold) {
            return (
              <img
                key={ids?.[index] || index}
                src={avatar}
                alt={`${alt} - Popitalk`}
                className={avatarClasses}
              />
            );
          } else if (index === avatars.length - 1) {
            return (
              <Button
                styleNone
                icon="ellipsis-h"
                styleNoneIconClassName="text-xs text-copy-secondary"
                key={ids?.[index] || index}
                className={`${avatarClasses} bg-background-secondary order-first flex-shrink-0 z-10`}
                analyticsString="View More Users Button: AvatarDeck"
              />
            );
          } else {
            return null;
          }
        })}
      <Button
        styleNone
        icon="user"
        styleNoneContent={avatars.length}
        styleNoneIconClassName="mr-1"
        className="flex-shrink-0 space-x-2 text-copy-secondary text-xs font-bold mr-2"
        analyticsString="View More Users Button: AvatarDeck"
      />
    </div>
  );
}
