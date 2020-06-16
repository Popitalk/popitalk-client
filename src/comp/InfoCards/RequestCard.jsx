import React from "react";
import ImageInfoCard from "./ImageInfoCard";
import FriendRequestButtons from "../FriendRequestButtons";

export default function RequestCard({
  user,
  handleAccept,
  handleReject,
  handleProfile
}) {
  const buttons = (
    <FriendRequestButtons
      variant={user.variant}
      handleAccept={() => handleAccept(user.id)}
      handleReject={() => handleReject(user.id)}
    />
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
      padding="sm"
      cardClick={() => handleProfile(user.id)}
    />
  );
}
