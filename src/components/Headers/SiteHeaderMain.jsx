import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/logo.png";
import DropDownMenu from "../DropDowns/DropDownMenu";
import DeleteAccountDropDown from "../DropDowns/DeleteAccountDropDown";
import FriendRequests from "../DropDowns/FriendRequests";
// import Notifications from "./DropDowns/Notifications";
import DropDownControls from "../DropDowns/DropDownControls";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";
import { updateChannelsList } from "../../helpers/functions";
import {
  setSelectedTab,
  setIsSearchForChannels,
  getFollowingChannels,
  toggleLeftPanel
} from "../../redux/actions";

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
  logoutHandler,
  hideLeftPanelButton
}) => {
  const [dropdownList, setDropdownList] = useState([]);

  const followingChannels = useSelector(state => state.followingChannels);
  const { defaultAvatar, defaultIcon } = useSelector(state => state.general);

  const dispatch = useDispatch();
  const history = useHistory();

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
      href: "https://discord.gg/WFARTv3JC4",
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
    <header className="sm:px-6 // relative flex items-center justify-between h-12 bg-background-primary select-none">
      <div className="flex flex-row items-center">
        {hideLeftPanelButton}
        <Button
          hoverable
          styleNone
          icon="bars"
          styleNoneIconClassName="text-lg"
          className="hidden sm:block rounded-full text-copy-secondary w-10 h-10 hover:text-copy-highlight mr-4"
          onClick={() => dispatch(toggleLeftPanel())}
          analyticsString="Collapse Button: PanelHeader"
        />
        <Button
          imageButton
          imageButtonSrc={Logo}
          imageButtonClassName="w-8 h-8"
          analyticsString="Main Logo Button: SiteHeaderMain"
          hoverable
          onClick={() => {
            updateChannelsList(
              dispatch,
              followingChannels.lastRequestAt,
              getFollowingChannels,
              followingChannels,
              defaultAvatar,
              defaultIcon
            );
            dispatch(setSelectedTab(strings.following));
            dispatch(setIsSearchForChannels(false));
            history.push("/");
          }}
        />
      </div>
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
