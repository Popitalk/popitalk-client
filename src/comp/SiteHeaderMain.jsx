import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Transition from "./Transition";
import DropDownMenu from "./DropDowns/DropDownMenu";
import DeleteAccountDropDown from "./DropDowns/DeleteAccountDropDown";
import FriendRequests from "./DropDowns/FriendRequests";
import Notifications from "./DropDowns/Notifications";
import DropDownControls from "./DropDowns/DropDownControls";

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
  const [mobileMenu, setMobileMenu] = useState(false);
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
    <header className="relative flex flex-col px-6 bg-primaryBackground select-none">
      {!mobileMenu && (
        <div className="flex items-center justify-between">
          <Link to="/channels">
            <img
              src={Logo}
              alt="PlayNow's logo"
              className="transition transform ease-in-out hover:scale-110 duration-100 w-10 h-10"
            />
          </Link>
          <ul className="items-center hidden space-x-10 md:flex">
            <li>
              <div
                className="transition transform ease-in-out hover:scale-105 duration-100 flex items-center p-2 cursor-pointer rounded-xl"
                role="button"
                onClick={() => openProfileHandler(userID)}
              >
                <span className="font-bold text-primaryText">{username}</span>
                <img
                  className="w-8 h-8 ml-2 rounded-full object-cover"
                  src={avatar}
                  alt={`${username}'s avatar`}
                />
              </div>
            </li>
            <li>
              <DropDownControls icon="user-plus">
                <FriendRequests
                  friendRequests={friendRequests}
                  handleProfile={openProfileHandler}
                />
              </DropDownControls>
            </li>
            <li>
              <div className="relative">
                <DropDownControls icon="bell">
                  <Notifications
                    notifications={notifications}
                    handleProfile={openProfileHandler}
                    handleClear={clearNotificationsHandler}
                  />
                </DropDownControls>
                {hasNotification && (
                  <div className="absolute top-0 z-10 p-1 ml-3 border-2 rounded-full border-primaryBackground bg-errorText"></div>
                )}
              </div>
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
                  className="cursor-pointer text-secondaryText hover:text-highlightText"
                />
              </a>
            </li>
          </ul>

          {/** MOBILE */}

          <FontAwesomeIcon
            icon="bars"
            className="cursor-pointer md:hidden text-secondaryText hover:text-highlightText"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          />
        </div>
      )}
      <Transition
        show={mobileMenu}
        enter="duration-300 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <>
          <div className="p-2 md:hidden">
            <div className="p-4 space-y-6 border rounded-lg shadow-md border-primaryBorder bg-primaryBackground">
              <div className="flex items-center justify-between">
                <img src={Logo} alt="PlayNow's logo" className="w-12 h-12" />
                <FontAwesomeIcon
                  icon="times"
                  className="cursor-pointer md:hidden text-secondaryText hover:text-highlightText"
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                  }}
                />
              </div>
              <div className="grid row-gap-8">
                <button className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-50 ease-in-out rounded-md hover:bg-gray-50">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="User"
                  />
                  <div className="text-base font-medium leading-6 text-secondaryText">
                    My profile
                  </div>
                </button>
                <button
                  href="#"
                  className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-50 ease-in-out rounded-md hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    icon="user-plus"
                    className="cursor-pointer text-secondaryText hover:text-highlightText"
                  />
                  <div className="text-base font-medium leading-6 text-secondaryText">
                    Add user
                  </div>
                </button>
                <button className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-50 ease-in-out rounded-md hover:bg-gray-50">
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={["far", "bell"]}
                      className={`cursor-pointer ${
                        hasNotification
                          ? "text-highlightText"
                          : "text-secondaryText"
                      } hover:text-highlightText`}
                    />
                    {hasNotification && (
                      <div className="absolute top-0 z-10 p-1 ml-2 border-2 rounded-full border-primaryBackground bg-errorText"></div>
                    )}
                  </div>
                  <div className="text-base font-medium leading-6 text-secondaryText">
                    Notifications
                  </div>
                </button>
                <button className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-50 ease-in-out rounded-md hover:bg-gray-50">
                  <FontAwesomeIcon
                    icon="cog"
                    className="cursor-pointer text-secondaryText hover:text-highlightText"
                  />
                  <div className="text-base font-medium leading-6 text-secondaryText">
                    Settings
                  </div>
                </button>
                <button className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-50 ease-in-out rounded-md hover:bg-gray-50">
                  <FontAwesomeIcon
                    icon="info-circle"
                    className="cursor-pointer text-secondaryText hover:text-highlightText"
                  />
                  <div className="text-base font-medium leading-6 text-secondaryText">
                    Info
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      </Transition>
    </header>
  );
}
