import React from "react";
import RequestCard from "./RequestCard";
import DropDownContainer from "./DropDownContainer";
import ModalHeader from "./ModalHeader";
import LargeList from "./InfoCardList";

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
    <DropDownContainer>
      <ModalHeader title="Friend Requests" />
      <LargeList items={friendRequests} itemRenderer={itemRenderer} />
    </DropDownContainer>
  );
}
