import React from "react";
import DropDownContainer from "./DropDownContainer";
import ContainerHeader from "./ContainerHeader";
import FriendUsersList from "./InfoCardLists/FriendUsersList";

export default function FriendRequests({ friendRequests, ...rest }) {
  return (
    <DropDownContainer>
      <ContainerHeader title="Friend Requests" />
      <FriendUsersList users={friendRequests} {...rest} />
    </DropDownContainer>
  );
}
