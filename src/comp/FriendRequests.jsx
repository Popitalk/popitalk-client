import React from "react";
import RequestCard from "./RequestCard";
import Updates from "./Updates";

export default function FriendRequests({
  friendRequests,
  handleProfile,
  handleAccept,
  handleReject
}) {
  const itemRenderer = f => {
    return (
      <RequestCard
        username={f.username}
        firstName={f.firstName}
        lastName={f.lastName}
        avatar={f.avatar}
        handleProfile={() => handleProfile(f.id)}
        handleAccept={() => handleAccept(f.id)}
        handleReject={() => handleReject(f.id)}
        variant="receivedFriendRequest"
      />
    );
  };

  return (
    <Updates
      title="Friend Requests"
      updates={friendRequests}
      itemRenderer={itemRenderer}
    />
  );
}
