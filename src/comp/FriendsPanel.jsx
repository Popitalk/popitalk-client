import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import FriendUsersList from "./InfoCardLists/FriendUsersList";
import Input from "./Input";
import Text from "./Text";
import RoomsList from "./InfoCardLists/RoomsList";
import MiniFriendsList from "./MiniFriendsList";

export default function FriendsPanel({ userSearchResults, roomsResults, ...rest }) {
  const [input, setInput] = useState("Andrew");
  const [selectedRoom, setSelectedRoom] = useState(null);


  return (
    <div className="bg-primaryBackground max-w-sm py-4 pr-4 pl-4">
      <div className="flex items-center justify-between px-4  w-full mb-4">
        <h3 className="text-2xl font-bold btn-playing">Channels</h3>
        <h3 className="text-3xl font-bold btn-playing">Friends</h3>
      </div>
      <Input
        variant="user"
        size="lg"
        value={input}
        placeholder="Search friends"
        onChange={e => setInput(e.target.value)}
      />
      <div className="shadow-md py-2 rounded-xl">
        <div className="flex justify-between px-2">
          <Text variant="small2" className="mx-2">Searching: {input}</Text>
          <Text variant="small2" className="mx-2 highlightText">close</Text>

        </div>
        <FriendUsersList users={userSearchResults} {...rest} />
      </div>
      <RoomsList
        rooms={roomsResults}
        selected={selectedRoom}
        handleSelect={id => setSelectedRoom(id)}
      />
      <div className="justify-end flex">
        <Button size="md" leftIcon="plus" shape="pill" className="">
          New Room
        </Button>
      </div>
    </div>
  );
}
