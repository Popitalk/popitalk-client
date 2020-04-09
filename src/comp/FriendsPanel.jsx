import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import UserSearchResults from "./UserSearchResults";

export default function FriendsPanel({ userSearchResults }) {
  return (
    <div className="bg-primaryBackground max-w-md py-4 pr-4">
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon="user-friends" className="text-3xl ml-6 mr-2" />
        <h3 className="text-3xl font-bold mr-auto">Friends</h3>
        <Button size="md" leftIcon="plus">
          New Room
        </Button>
      </div>
      <UserSearchResults results={userSearchResults} className="ml-4" />
    </div>
  );
}
