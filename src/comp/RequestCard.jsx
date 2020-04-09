import React from "react";
import Button from "./Button";

export default function RequestCard({
  id,
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
  const canReject =
    variant === "sentFriendRequest" || variant === "receivedFriendRequest";
  return (
    <div className="flex items-center bg-secondaryBackground rounded-lg px-4 py-2 shadow-md">
      {/* <div className="flex items-center bg-secondaryBackground rounded-lg px-4 py-2 max-w-sm shadow-md"> */}
      {canReject && (
        <Button
          size="sm"
          icon="times"
          background="cancel"
          onClick={() => handleReject(id)}
        />
      )}
      <div
        className="flex flex-col items-end mr-4 ml-auto"
        role="button"
        onClick={() => handleProfile(id)}
      >
        <p className="text-lg text-primaryText">{username}</p>
        <p className="text-md text-secondaryText">
          {firstName} {lastName}
        </p>
      </div>
      <img
        className="img w-16 h-16 rounded-circle mr-4"
        role="button"
        src={avatar}
        alt={`${username}'s avatar`}
        onClick={() => handleProfile(id)}
      />
      <Button
        size="lg"
        icon={variant === "sentFriendRequest" ? "user-check" : "user-plus"}
        disabled={variant === "sentFriendRequest"}
        className="cursor-pointer bg-primaryBackground"
      />
    </div>
  );
}
