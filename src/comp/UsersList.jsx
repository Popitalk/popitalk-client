import React from "react";
import classnames from "classnames";
import PopupMenu from "./PopupMenu";

export default function UsersList({
  variant = "manage",
  users,
  handleProfile,
  options,
  className
}) {
  const classes = classnames("children:not-first:mt-4", {
    [className]: className
  });
  return (
    <div className={classes}>
      {users.map(user => {
        return (
          <div
            key={user.id}
            className="flex flex-row items-center justify-between"
          >
            <div
              className="flex flex-row items-center select-none"
              role="button"
              onClick={() => handleProfile(user.id)}
            >
              <img
                src={user.avatar}
                alt={`${user.username}'s avatar`}
                className="img rounded-full h-12 w-12 mr-4"
              />
              <div>
                <p className="mb-1">{user.username}</p>
                <p className="text-secondaryText text-xs">
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </div>
            {variant === "manage" &&
              (user.owner ? (
                <p className="text-secondaryText select-none">Owner</p>
              ) : (
                <PopupMenu id={user.id} options={options} className="ml-auto" />
              ))}
          </div>
        );
      })}
    </div>
  );
}
