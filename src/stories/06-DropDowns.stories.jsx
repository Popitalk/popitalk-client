import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FriendRequests from "../comp/DropDowns/FriendRequests";
import DropDownMenu from "../comp/DropDowns/DropDownMenu";
import DeleteAccountDropDown from "../comp/DropDowns/DeleteAccountDropDown";
import Notifications from "../comp/DropDowns/Notifications";
import { testUsers, testNotifications } from "./seed-arrays";

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

  return (
    <FriendRequests
      friendRequests={testUsers}
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
  let generatedNotifications = [];
  for (let i = 0; i < 200; i++) {
    generatedNotifications.push(
      testNotifications[Math.floor(Math.random() * testNotifications.length)]
    );
  }

  return (
    <Notifications
      notifications={generatedNotifications}
      handleProfile={handleProfile}
    />
  );
};

export const SomeNotificationsTest = () => {
  return (
    <Notifications
      notifications={testNotifications}
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
