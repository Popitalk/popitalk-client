import React from "react";
import ImageInfoCard from "./ImageInfoCard";
import FriendRequestButtons from "../FriendRequestButtons";

export default function RequestCard({ user, handleProfile }) {
  const buttons = <FriendRequestButtons user={user} />;

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
