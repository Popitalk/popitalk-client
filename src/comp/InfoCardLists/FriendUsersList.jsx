import React from "react";
import InfoCardList from "./InfoCardList";
import RequestCard from "../InfoCards/RequestCard";

export default function FriendUsersList({
  users,
  handleAccept,
  handleReject,
  handleProfile
}) {
  const itemRenderer = u => {
    return (
      <RequestCard
        user={u}
        handleAccept={handleAccept}
        handleReject={handleReject}
        handleProfile={handleProfile}
      />
    );
  };

  return <InfoCardList items={users} itemRenderer={itemRenderer} />;
}
