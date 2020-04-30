import React from "react";
import DropDownContainer from "./DropDownContainer";
import ModalHeader from "./ModalHeader";
import RequestCard from "./RequestCard";

export default function FriendRequests({
  friendRequests,
  handleProfile,
  handleAccept,
  handleReject
}) {
  return (
    <DropDownContainer dropdown={true}>
      <ModalHeader title="Friend Requests" />
      <div className="children:not-first:mt-1 mb-3 mt-3 h-64 overflow-auto">
        {friendRequests.map(f => {
          return (
            <div className="mx-1" key={f.id}>
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
            </div>
          );
        })}
      </div>
    </DropDownContainer>
  );
}
