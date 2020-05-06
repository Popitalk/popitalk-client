import React from "react";
import ImageInfoCard from "./ImageInfoCard";
import Button from "../Button";

export default function RequestCard({
  user,
  handleAccept,
  handleReject,
  handleProfile
}) {
  // variants: stranger, friend, receivedRequest, sentRequest

  const addUserDisabled = user.variant === "sentRequest";
  const addButton =
    user.variant === "friend" ? (
      <></>
    ) : (
      <Button
        size="md"
        icon={addUserDisabled ? "user-check" : "user-plus"}
        disabled={addUserDisabled}
        className="cursor-pointer bg-primaryBackground ml-auto"
        onClick={() => handleAccept(user.id)}
      />
    );

  const rejectButton =
    user.variant === "receivedRequest" || user.variant === "sentRequest" ? (
      <Button
        size="sm"
        icon="times"
        background="cancel"
        className="ml-2"
        onClick={() => handleReject(user.id)}
      />
    ) : (
      <></>
    );

  const buttons = (
    <>
      {addButton}
      {rejectButton}
    </>
  );

  return (
    <ImageInfoCard
      avatar={user.avatar}
      username={user.username}
      controls={buttons}
      title={user.username}
      subtitle={`${user.firstName} ${user.lastName}`}
      subtitleColor="gray"
      backgroundColor="gray"
      cardClick={() => handleProfile(user.id)}
    />
  );
}
