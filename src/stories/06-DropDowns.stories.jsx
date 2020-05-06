import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FriendRequests from "../comp/FriendRequests";
import DropDownMenu from "../comp/DropDownMenu";
import DeleteAccountDropDown from "../comp/DeleteAccountDropDown";
import Notifications from "../comp/Notifications";

export default {
  title: "DropDowns",
  decorators: [withKnobs]
};

const buttonTest = () => {
  console.log("test");
};

const backHandler = () => {
  console.log("back");
};

const handleProfile = id => {
  console.log(`PROFILE ${id}`);
};

export const FriendRequestsFriends = () => {
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
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
    },
    {
      id: 4,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "sentRequest"
    },
    {
      id: 5,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
    },
    {
      id: 6,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "sentRequest"
    },
    {
      id: 7,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
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

export const FriendRequestsNoFriends = () => {
  return <FriendRequests />;
};

export const ManyNotificationsTest = () => {
  let notifications = [
    {
      id: 1,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "You and Andrew are now friends"
    },
    {
      id: 2,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "Andrew followed your channel"
    },
    {
      id: 3,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "Andrew posted on your channel"
    },
    {
      id: 4,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "Andrew commented on your post"
    },
    {
      id: 5,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "Andrew liked your post"
    },
    {
      id: 6,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "Andrew liked your comment"
    }
  ];

  for (let i = 0; i < 200; i++) {
    notifications.push({
      id: i + 7,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "Andrew liked your comment"
    });
  }

  return (
    <Notifications
      notifications={notifications}
      handleProfile={handleProfile}
    />
  );
};

export const SomeNotificationsTest = () => {
  let notifications = [
    {
      id: 1,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "You and Andrew are now friends"
    },
    {
      id: 2,
      username: "Andrew",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      message: "Andrew followed your channel"
    }
  ];

  return (
    <Notifications
      notifications={notifications}
      handleProfile={handleProfile}
    />
  );
};

export const NoNotificationsTest = () => {
  return <Notifications />;
};

export const MainSettingsDropDownTest = () => {
  const buttons = [
    {
      text: "Account Settings",
      onClick: buttonTest
    },
    {
      text: "Block Users",
      onClick: buttonTest
    },
    {
      text: "Log Out",
      onClick: buttonTest,
      danger: true
    }
  ];

  return <DropDownMenu title="Settings" buttons={buttons} />;
};

export const AccountSettingsDropDownTest = () => {
  const buttons = [
    {
      text: "Edit User Information",
      onClick: buttonTest
    },
    {
      text: "Change Password",
      onClick: buttonTest
    },
    {
      text: "Delete Account",
      onClick: buttonTest,
      danger: true
    }
  ];

  return (
    <DropDownMenu
      title="Account Settings"
      handleBack={backHandler}
      buttons={buttons}
    />
  );
};

export const DeleteAccountDropDownTest = () => {
  return <DeleteAccountDropDown handleBack={backHandler} />;
};
