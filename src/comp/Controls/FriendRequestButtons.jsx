import React from "react";
import Button from "./Button";

export default function FriendRequestButtons({ user, size = "md" }) {
  // variants: self, friend, stranger, receivedRequest, sentRequest, blocked
  if (user.variant === "blocked") {
    return <></>;
  }

  const sentRequest = user.variant === "sentRequest";
  const addButton =
    user.variant === "friend" || user.variant === "self" ? (
      <></>
    ) : (
      <Button
        actionButton
        size={size}
        icon={sentRequest ? "user-check" : "user-plus"}
        disabled={sentRequest}
        className="cursor-pointer bg-primaryBackground ml-auto"
        onClick={e => {
          e.stopPropagation();
          user.handleAccept();
        }}
        analyticsString="Friend Rq Button: FriendRequestButtons"
        tooltip={sentRequest ? "Add Friend" : "Waiting"}
      />
    );

  const rejectButton =
    user.variant === "receivedRequest" || sentRequest ? (
      <Button
        actionButton
        size={size}
        icon="times"
        background="cancel"
        className="ml-2"
        onClick={e => {
          e.stopPropagation();
          user.handleReject();
        }}
        analyticsString="Canel Friend Rq Button:FriendRequestButtons"
        tooltip="Cancel"
      />
    ) : (
      <></>
    );

  return (
    <>
      {addButton}
      {rejectButton}
    </>
  );
}
