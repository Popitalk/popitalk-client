import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
import Transition from "./Transition";
import DropDownMenu from "./DropDowns/DropDownMenu";
import DeleteAccountDropDown from "./DropDowns/DeleteAccountDropDown";
import FriendRequests from "./DropDowns/FriendRequests";
import Notifications from "./DropDowns/Notifications";

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
  openEditInformationHandler,
  acceptRequestHandler,
  rejectRequestHandler,
  clearNotificationsHandler,
  deleteAccountHandler,
  logoutHandler
}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownList, setDropdownList] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRequests, setShowRequests] = useState(false);

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

  const settingsButtons = [
    {
      text: "Account Settings",
      onClick: () => setDropdownList([...dropdownList, ACCOUNT_SETTINGS])
    },
    {
      text: "Block Users",
      onClick: () => console.log("Open block users modal")
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
      onClick: () => openEditInformationHandler()
    },
    {
      text: "Change Password",
      onClick: () => console.log("Open Change Password modal")
    },
    {
      text: "Delete Account",
      onClick: () => setDropdownList([...dropdownList, DELETE_ACCOUNT]),
      danger: true
    }
  ];

  const settingsDropdown =
    dropdownList.length > 0 ? dropdownList[dropdownList.length - 1] : 0;

  const dropdownClasses = "absolute right-0 mt-2 z-10";

  return (
    <header className="relative flex flex-col px-4 bg-primaryBackground">
      {!mobileMenu && (
        <div className="flex items-center justify-between">
          <img src={Logo} alt="PlayNow's logo" className="w-12 h-12" />
          <ul className="items-center hidden space-x-8 md:flex">
            <li>
              <div
                className="flex items-center p-2 transition-colors duration-150 cursor-pointer rounded-xl hover:bg-highlightBackground"
                role="button"
                onClick={() => openProfileHandler(userID)}
              >
                <span className="font-bold">{username}</span>
                <img
                  className="w-8 h-8 ml-4 rounded-full"
                  src={avatar}
                  alt={`${username}'s avatar`}
                />
              </div>
            </li>
            <li>
              <div className="relative">
                <FontAwesomeIcon
                  icon="user-plus"
                  className="cursor-pointer text-secondaryText hover:text-highlightText"
                  roll="button"
                  onClick={() => setShowRequests(!showRequests)}
                />
                {showRequests ? (
                  <div className={dropdownClasses}>
                    <FriendRequests
                      friendRequests={friendRequests}
                      handleProfile={openProfileHandler}
                      handleAccept={acceptRequestHandler}
                      handleReject={rejectRequestHandler}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </li>
            <li>
              <div className="relative">
                <FontAwesomeIcon
                  icon="bell"
                  className={`cursor-pointer ${
                    hasNotification
                      ? "text-highlightText"
                      : "text-secondaryText"
                  } hover:text-highlightText`}
                  roll="button"
                  onClick={() => setShowNotifications(!showNotifications)}
                />
                {hasNotification && (
                  <div className="absolute top-0 z-10 p-1 ml-2 border-2 rounded-full border-primaryBackground bg-errorText"></div>
                )}
                {showNotifications ? (
                  <div className={dropdownClasses}>
                    <Notifications
                      notifications={notifications}
                      handleProfile={openProfileHandler}
                      handleClear={clearNotificationsHandler}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </li>
            <li>
              <div className="relative">
                <FontAwesomeIcon
                  icon="cog"
                  className="cursor-pointer text-secondaryText hover:text-highlightText"
                  roll="button"
                  onClick={toggleSettings}
                />
                {settingsDropdown === SETTINGS ? (
                  <div className={dropdownClasses}>
                    <DropDownMenu title="Settings" buttons={settingsButtons} />
                  </div>
                ) : settingsDropdown === ACCOUNT_SETTINGS ? (
                  <div className={dropdownClasses}>
                    <DropDownMenu
                      title="Account Settings"
                      buttons={accountSettingsButtons}
                      handleBack={popDropdown}
                    />
                  </div>
                ) : settingsDropdown === DELETE_ACCOUNT ? (
                  <div className={dropdownClasses}>
                    <DeleteAccountDropDown
                      handleDelete={deleteAccountHandler}
                      handleBack={popDropdown}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </li>
            <li>
              <FontAwesomeIcon
                icon="info-circle"
                className="cursor-pointer text-secondaryText hover:text-highlightText"
              />
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
                <button className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
                  className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    icon="user-plus"
                    className="cursor-pointer text-secondaryText hover:text-highlightText"
                  />
                  <div className="text-base font-medium leading-6 text-secondaryText">
                    Add user
                  </div>
                </button>
                <button className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
                <button className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <FontAwesomeIcon
                    icon="cog"
                    className="cursor-pointer text-secondaryText hover:text-highlightText"
                  />
                  <div className="text-base font-medium leading-6 text-secondaryText">
                    Settings
                  </div>
                </button>
                <button className="flex items-center p-3 -m-3 space-x-3 no-underline transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
