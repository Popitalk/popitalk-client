import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import FriendRequests from "../comp/FriendRequests";

export default {
  title: "DropDowns",
  decorators: [withKnobs]
};

export const FriendRequestsTest = () => {
  const handleProfile = id => {
    console.log(`PROFILE ${id}`);
  };

  const handleAccept = id => {
    console.log(`ACCEPT ${id}`);
  };

  const handleReject = id => {
    console.log(`REJECT ${id}`);
  };

  const friendRequests = [
    {
      id: 1,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg"
    },
    {
      id: 4,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg"
    },
    {
      id: 5,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg"
    },
    {
      id: 6,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg"
    },
    {
      id: 7,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg"
    }
  ];

  return (
    <FriendRequests
      friendRequests={friendRequests}
      handleProfile={handleProfile}
      handleAccept={handleAccept}
      handleReject={handleReject}
    />
  );
};
