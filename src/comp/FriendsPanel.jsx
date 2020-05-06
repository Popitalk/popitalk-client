import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import FriendUsersList from "./InfoCardLists/FriendUsersList";

export default function FriendsPanel({ userSearchResults }) {
  return (
    <div className="bg-primaryBackground max-w-sm py-4 pr-4 pl-4">
      <div className="flex items-center mb-4">
        <h3 className="text-3xl font-bold mr-auto">Friends</h3>
      </div>
      <FriendUsersList results={userSearchResults} />
      <Button size="md" leftIcon="plus" className="">
        New Room
      </Button>
    </div>
  );
}
