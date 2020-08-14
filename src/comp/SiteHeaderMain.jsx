import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import DropDownMenu from "./DropDowns/DropDownMenu";
import DeleteAccountDropDown from "./DropDowns/DeleteAccountDropDown";
import FriendRequests from "./DropDowns/FriendRequests";
import Notifications from "./DropDowns/Notifications";
import DropDownControls from "./DropDowns/DropDownControls";
import Button from "./Controls/Button";

const SETTINGS = 1;
const ACCOUNT_SETTINGS = 2;
const DELETE_ACCOUNT = 3;

export default function SiteHeaderMain({
  hasNotification,
  userID,
  username,
  avatar,
  friendRequests,
  notifications,
  openProfileHandler,
  openBlockedUsersHandler,
  openEditInformationHandler,
  openChangePasswordHandler,
  clearNotificationsHandler,
  deleteAccountHandler,
  logoutHandler
}) {
  const [dropdownList, setDropdownList] = useState([]);

  const toggleSettings = () => {
    if (dropdownList.length > 0) {
      setDropdownList([]);
    } else {
      setDropdownList([SETTINGS]);
    }
  };

  const popDropdown = () => {
    setDropdownList(dropdownList.slice(0, -1));
  };

  const openBlockedUsersModal = () => {
    setDropdownList([]);
    openBlockedUsersHandler();
  };

  const openEditInformationModal = () => {
    setDropdownList([]);
    openEditInformationHandler();
  };

  const openChangePasswordModal = () => {
    setDropdownList([]);
    openChangePasswordHandler();
  };

  const settingsButtons = [
    {
      text: "Account Settings",
      onClick: () => setDropdownList([...dropdownList, ACCOUNT_SETTINGS])
    },
    {
      text: "Blocked Users",
      onClick: openBlockedUsersModal
    },
    {
      text: "Log Out",
      onClick: logoutHandler,
      danger: true
    }
  ];

  const accountSettingsButtons = [
    {
      text: "Edit User Information",
      onClick: openEditInformationModal
    },
    {
      text: "Change Password",
      onClick: openChangePasswordModal
    } /*,
    {
      text: "Delete Account",
      onClick: () => setDropdownList([...dropdownList, DELETE_ACCOUNT]),
      danger: true
    }*/
  ];

  const settingsDropdown =
    dropdownList.length > 0 ? dropdownList[dropdownList.length - 1] : 0;

  return (
    <header className="sm:px-6 // relative flex items-center justify-between h-12 px-4 z-30 bg-primaryBackground select-none">
      <Link to="/channels" className="flex items-center justify-center">
        <Button
          imageButton
          imageButtonSrc={Logo}
          imageButtonClassName="w-10 h-10"
        />
      </Link>
      <ul className="sm:space-x-6 // flex items-center space-x-6">
        <li className="flex items-center">
          <Button
            imageButton
            imageButtonSrc={avatar}
            imageButtonSpan={username}
            imageButtonClassName="w-8 h-8 mr-2 rounded-full object-cover"
            className="scale-105"
            onClick={() => openProfileHandler(userID)}
            analyticsString="My Profile Button: SiteHeaderMain"
          />
        </li>
        <li>
          <DropDownControls icon="user-plus" hasNotification={hasNotification}>
            <FriendRequests
              friendRequests={friendRequests}
              handleProfile={openProfileHandler}
            />
          </DropDownControls>
        </li>
        <li>
          <DropDownControls
            icon="bell"
            className="relative"
            hasNotification={hasNotification}
          >
            <Notifications
              notifications={notifications}
              handleProfile={openProfileHandler}
              handleClear={clearNotificationsHandler}
            />
          </DropDownControls>
        </li>
        <li>
          <DropDownControls
            icon="cog"
            onClick={toggleSettings}
            onClose={() => setDropdownList([])}
          >
            {settingsDropdown === SETTINGS ? (
              <DropDownMenu title="Settings" buttons={settingsButtons} />
            ) : settingsDropdown === ACCOUNT_SETTINGS ? (
              <DropDownMenu
                title="Account Settings"
                buttons={accountSettingsButtons}
                handleBack={popDropdown}
              />
            ) : settingsDropdown === DELETE_ACCOUNT ? (
              <DeleteAccountDropDown
                handleDelete={deleteAccountHandler}
                handleBack={popDropdown}
              />
            ) : (
              <></>
            )}
          </DropDownControls>
        </li>
        <li>
          <a href="https://about.popitalk.com/">
            <FontAwesomeIcon
              icon="info-circle"
              size="lg"
              className="cursor-pointer text-secondaryText hover:filter-brightness-8 ml-2"
            />
          </a>
        </li>
      </ul>
    </header>
  );
}
