import React from "react";
import Button from "./Button";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RequestCard({
  id,
  background = "gray",
  username,
  firstName,
  lastName,
  avatar,
  handleProfile,
  handleRequest,
  handleAccept,
  handleReject,
  variant
}) {
  const boxClasses = classnames("flex items-center  rounded-lg px-4 py-2", {
    "bg-secondaryBackground": background === "gray",
    "bg-primaryBackground": background === "white"
  });

  const canReject =
    variant === "sentFriendRequest" || variant === "receivedFriendRequest";
  return (
    <div className={boxClasses}>
      {/* <div className="flex items-center bg-secondaryBackground rounded-lg px-4 py-2 max-w-sm shadow-md"> */}
      <img
        className="img w-12 h-12 rounded-circle mr-4"
        role="button"
        src={avatar}
        alt={`${username}'s avatar`}
        onClick={() => handleProfile(id)}
      />
      <div
        className="flex flex-col mr-4"
        role="button"
        onClick={() => handleProfile(id)}
      >
        <p className="text-md text-primaryText">{username}</p>
        <p className="text-sm text-secondaryText">
          {firstName} {lastName}
        </p>
      </div>
      <Button
        size="md"
        icon={variant === "sentFriendRequest" ? "user-check" : "user-plus"}
        disabled={variant === "sentFriendRequest"}
        className="cursor-pointer bg-primaryBackground mr-2 ml-auto"
      />
      {canReject && (
        <Button
          size="sm"
          icon="times"
          background="cancel"
          onClick={() => handleReject(id)}
        />
      )}
    </div>
  );
}
