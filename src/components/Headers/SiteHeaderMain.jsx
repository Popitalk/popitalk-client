import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import DropDownMenu from "../DropDowns/DropDownMenu";
import DeleteAccountDropDown from "../DropDowns/DeleteAccountDropDown";
import FriendRequests from "../DropDowns/FriendRequests";
// import Notifications from "./DropDowns/Notifications";
import DropDownControls from "../DropDowns/DropDownControls";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";

const SETTINGS = 1;
const ACCOUNT_SETTINGS = 2;
const DELETE_ACCOUNT = 3;
const INFORMATION = 4;

const SiteHeaderMain = ({
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
}) => {
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
      text: strings.accountSettings,
      leftIcon: "user-circle",
      onClick: () => setDropdownList([...dropdownList, ACCOUNT_SETTINGS]),
      rightIcon: "angle-right"
    },
    {
      text: strings.blockedUsers,
      leftIcon: "user-alt-slash",
      onClick: openBlockedUsersModal
    },
    {
      text: strings.aboutPopitalk,
      leftIcon: "info-circle",
      onClick: () => setDropdownList([...dropdownList, INFORMATION]),
      rightIcon: "angle-right"
    },
    {
      text: "Dark mode",
      display: true
    },
    {
      text: strings.logOut,
      leftIcon: "sign-out-alt",
      onClick: logoutHandler,
      danger: true
    }
  ];

  const accountSettingsButtons = [
    {
      text: strings.editUserInformation,
      onClick: openEditInformationModal,
      leftIcon: "user-edit"
    },
    {
      text: strings.changePassword,
      onClick: openChangePasswordModal,
      leftIcon: "unlock-alt"
    } /*,
    {
      text: "Delete Account",
      onClick: () => setDropdownList([...dropdownList, DELETE_ACCOUNT]),
      danger: true
    }*/
  ];

  const informationButtons = [
    {
      text: strings.twitter,
      href: "https://twitter.com/PopitalkT",
      leftIcon: "twitter",
      redirect: true,
      rightIcon: "external-link-alt"
    },
    {
      text: strings.youtube,
      href: "https://www.youtube.com/channel/UCJSjPolz6SiYKvVxFmK-Z1A",
      leftIcon: "youtube",
      redirect: true,
      rightIcon: "external-link-alt"
    },
    {
      text: strings.discord,
      href: "https://discord.gg/hdFfgg7",
      leftIcon: "discord",
      redirect: true,
      rightIcon: "external-link-alt"
    },
    {
      text: strings.sendFeedbackButton,
      href: "https://blog.popitalk.com/",
      redirect: true,
      rightIcon: "external-link-alt"
    }
  ];

  const settingsDropdown =
    dropdownList.length > 0 ? dropdownList[dropdownList.length - 1] : 0;

  return (
    <header className="sm:px-6 // relative flex items-center justify-between h-12 bg-background-primary px-2 z-30 select-none">
      <Link to="/" className="flex flex-shrink-0 items-center justify-center">
        <Button
          imageButton
          imageButtonSrc={Logo}
          imageButtonClassName="w-8 h-8"
          analyticsString="Main Logo Button: SiteHeaderMain"
          hoverable
        />
      </Link>
      <div className="sm:space-x-6 // flex items-center space-x-2">
        <ul className="sm:space-x-6 // flex items-center space-x-2">
          <li>
            <DropDownControls
              icon="bell"
              hasNotification={friendRequests.length > 0}
            >
              <FriendRequests
                friendRequests={friendRequests}
                handleProfile={openProfileHandler}
              />
            </DropDownControls>
          </li>
          {/* <li>
            <DropDownControls
              icon="bell"
              className="relative"
              hasNotification={notifications.length > 0}
            >
              <Notifications
                notifications={notifications}
                handleProfile={openProfileHandler}
                handleClear={clearNotificationsHandler}
              />
            </DropDownControls>
          </li> */}
          <li>
            <DropDownControls
              icon="cog"
              onClick={toggleSettings}
              onClose={() => setDropdownList([])}
            >
              {settingsDropdown === SETTINGS ? (
                <DropDownMenu
                  title={strings.settingsHeader}
                  buttons={settingsButtons}
                  icon="cog"
                />
              ) : settingsDropdown === ACCOUNT_SETTINGS ? (
                <DropDownMenu
                  title={strings.accountSettings}
                  buttons={accountSettingsButtons}
                  handleBack={popDropdown}
                  icon="user-circle"
                />
              ) : settingsDropdown === DELETE_ACCOUNT ? (
                <DeleteAccountDropDown
                  handleDelete={deleteAccountHandler}
                  handleBack={popDropdown}
                />
              ) : settingsDropdown === INFORMATION ? (
                <DropDownMenu
                  title={strings.aboutPopitalk}
                  buttons={informationButtons}
                  handleBack={popDropdown}
                  icon="info-circle"
                />
              ) : (
                <></>
              )}
            </DropDownControls>
          </li>
        </ul>
        <Button
          hoverable
          imageButton
          imageButtonSrc={avatar}
          imageButtonSpan={username}
          imageButtonClassName="w-6 h-6 rounded-full object-cover"
          imageButtonSpanClassName="hidden sm:block text-xs font-bold text-copy-primary ml-2"
          onClick={() => openProfileHandler(userID)}
          className="p-2 hover:bg-hover-highlight rounded-md"
          analyticsString="My Profile Button: SiteHeaderMain"
        />
      </div>
    </header>
  );
};

export default SiteHeaderMain;
