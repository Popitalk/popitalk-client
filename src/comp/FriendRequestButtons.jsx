import React from "react";
import Button from "./Button";

export default function FriendRequestButtons({ user }) {
  // variants: self, friend, stranger, receivedRequest, sentRequest
  const sentRequest = user.variant === "sentRequest";
  const addButton =
    user.variant === "friend" || user.variant === "self" ? (
      <></>
    ) : (
      <Button
        size="md"
        icon={sentRequest ? "user-check" : "user-plus"}
        disabled={sentRequest}
        className="cursor-pointer bg-primaryBackground ml-auto"
        onClick={e => {
          e.stopPropagation();
          user.handleAccept();
        }}
      />
    );

  const rejectButton =
    user.variant === "receivedRequest" || sentRequest ? (
      <Button
        size="sm"
        icon="times"
        background="cancel"
        className="ml-2"
        onClick={e => {
          e.stopPropagation();
          user.handleReject();
        }}
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
