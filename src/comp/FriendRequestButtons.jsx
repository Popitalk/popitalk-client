import React from "react";
import Button from "./Button";

export default function FriendRequestButtons({
  variant, // self, friend, stranger, receivedRequest, sentRequest
  handleAccept,
  handleReject
}) {
  const addUserDisabled = variant === "sentRequest";
  const addButton =
    variant === "friend" || variant === "self" ? (
      <></>
    ) : (
      <Button
        size="md"
        icon={addUserDisabled ? "user-check" : "user-plus"}
        disabled={addUserDisabled}
        className="cursor-pointer bg-primaryBackground ml-auto"
        onClick={handleAccept}
      />
    );

  const rejectButton =
    variant === "receivedRequest" || variant === "sentRequest" ? (
      <Button
        size="sm"
        icon="times"
        background="cancel"
        className="ml-2"
        onClick={handleReject}
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
