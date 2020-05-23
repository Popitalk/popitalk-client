import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FriendUsersList from "../comp/InfoCardLists/FriendUsersList";
import ChannelsList from "../comp/InfoCardLists/ChannelsList";
import RoomsList from "../comp/InfoCardLists/RoomsList";
import ManageUsersList from "../comp/InfoCardLists/ManageUsersList";

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

  const results = [
    {
      id: 1,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "stranger"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "friend"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "self"
    },
    {
      id: 4,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
    },
    {
      id: 5,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "sentRequest"
    }
  ];

  return (
    <FriendUsersList
      users={results}
      handleProfile={handleProfile}
      handleAccept={handleAccept}
      handleReject={handleReject}
    />
  );
};

export const ChannelsListTest = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const channels = [
    {
      id: 1,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: false,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ],
      numOnline: 9001
    },
    {
      id: 2,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: true,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ],
      numOnline: 20999
    },
    {
      id: 3,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: false,
      numOnline: 24
    },
    {
      id: 4,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: true,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ],
      numOnline: 88
    }
  ];
  return (
    <div className="p-5">
      <ChannelsList
        channels={channels}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
      />
    </div>
  );
};

export const RoomsListTest = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Andrew",
      self: true,
      online: false,
      watching: false,
      notifications: null,
      message: null,
      images: ["https://source.unsplash.com/128x128/?1,cat"],
      messageSent: "1m"
    },
    {
      id: 2,
      name: "Alex",
      self: false,
      online: false,
      watching: false,
      notifications: 23,
      message: null,
      images: ["https://source.unsplash.com/128x128/?2,cat"],
      messageSent: "2m"
    },
    {
      id: 3,
      name: "John, Paul, Andrew, Jer...",
      self: false,
      online: false,
      watching: false,
      notifications: null,
      message: "You: ABCD",
      images: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ],
      messageSent: "Today"
    },
    {
      id: 4,
      name: "Rick, Tom, Stewart",
      self: false,
      online: false,
      watching: true,
      notifications: 2,
      message: "Tom: xyzxyz",
      images: [
        "https://source.unsplash.com/128x128/?6,cat",
        "https://source.unsplash.com/128x128/?7,cat",
        "https://source.unsplash.com/128x128/?8,cat"
      ],
      messageSent: "1/5/2019"
    }
  ];

  return (
    <div className="p-5">
      <RoomsList
        rooms={rooms}
        selected={selectedRoom}
        handleSelect={id => setSelectedRoom(id)}
      />
    </div>
  );
};

export const AdminsListTest = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const users = [
    {
      id: 1,
      username: "abc11",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      owner: false
    },
    {
      id: 2,
      username: "abc22",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      owner: false
    },
    {
      id: 3,
      username: "abc33",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?3,cat",
      owner: true
    },
    {
      id: 4,
      username: "abc44",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?4,cat",
      owner: false
    }
  ];

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
        users={users}
        options={options}
        handleProfile={handleProfile}
      />
    </div>
  );
};
