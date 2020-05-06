import React from "react";
import DropDownContainer from "./DropDownContainer";
import ModalHeader from "./ModalHeader";
import FriendUsersList from "./InfoCardLists/FriendUsersList";

export default function FriendRequests({ friendRequests, ...rest }) {
  return (
    <DropDownContainer>
      <ModalHeader title="Friend Requests" />
      <FriendUsersList users={friendRequests} {...rest} />
    </DropDownContainer>
  );
}
