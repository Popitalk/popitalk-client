import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FriendUsersList from "../comp/InfoCardLists/FriendUsersList";
import ChannelsList from "../comp/InfoCardLists/ChannelsList";
import RoomsList from "../comp/InfoCardLists/RoomsList";
import ManageUsersList from "../comp/InfoCardLists/ManageUsersList";
import { testChannels, testRooms, testUsers } from "./seed-arrays";

export default {
  title: "Lists",
  decorators: [withKnobs]
};

export const UserSearchResultsTest = () => {
  const handleProfile = () => {
    console.log("PROFILE");
  };

  const handleAccept = () => {
    console.log("ACCEPT");
  };

  const handleReject = () => {
    console.log("REJECT");
  };

  return (
    <FriendUsersList
      users={testUsers}
      handleProfile={handleProfile}
      handleAccept={handleAccept}
      handleReject={handleReject}
    />
  );
};

export const ChannelsListTest = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div className="p-5">
      <ChannelsList
        channels={testChannels}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
      />
    </div>
  );
};

export const RoomsListTest = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="p-5">
      <RoomsList
        rooms={testRooms}
        selected={selectedRoom}
        handleSelect={id => setSelectedRoom(id)}
      />
    </div>
  );
};

export const AdminsListTest = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const options = [
    { name: "Admin", handler: userId => console.log("ADMIN", userId) },
    { name: "Ban", handler: userId => console.log("BAN", userId) }
  ];

  const handleProfile = userId => {
    console.log("PROFILE", userId);
  };

  return (
    <div className="p-5">
      <ManageUsersList
        variant="manage"
        users={testUsers}
        options={options}
        handleProfile={handleProfile}
      />
    </div>
  );
};
