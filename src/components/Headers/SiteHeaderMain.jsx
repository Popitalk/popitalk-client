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
import strings from "../../localization/strings";
import { updateChannelsList } from "../../helpers/functions";
import {
  setSelectedTab,
  setIsSearchForChannels,
  getFollowingChannels,
  toggleLeftPanel,
  removeLeftPanel,
  setLeftPanelActiveTabChannels
} from "../../redux/actions";
import Input from "../Controls/Input";

const MY_PROFILE = 1;
const SETTINGS = 2;
const ACCOUNT_SETTINGS = 3;
const DELETE_ACCOUNT = 4;
const INFORMATION = 5;

const SiteHeaderMain = ({
  userID,
  username,
  avatar,
  friendRequests,
  notifications,
  clearNotificationsHandler,
  openProfileHandler,
  openBlockedUsersHandler,
  openEditInformationHandler,
  openChangePasswordHandler,
  deleteAccountHandler,
  logoutHandler,
  setSearch,
  search,
  handleSearch,
  windowSize
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

  const openProfileModal = () => {
    setDropdownList([]);
    openProfileHandler(userID);
  };

  const settingsButtons = [
    {
      text: username,
      imageIcon: avatar,
      onClick: openProfileModal
    },
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
    <header className="sm:px-6 px-2 // relative flex items-center justify-between h-14 border-b border-outline-primary w-screen bg-background-primary select-none">
      <div className="flex flex-row items-center w-1/4 flex-shrink-0 space-x-4">
        <Button
          hoverable
          styleNone
          icon="bars"
          styleNoneIconClassName="text-lg"
          className="rounded-full text-copy-secondary w-10 h-10 hover:text-copy-highlight"
          onClick={
            windowSize.width <= 640
              ? () => dispatch(removeLeftPanel())
              : () => dispatch(toggleLeftPanel())
          }
          analyticsString="Collapse Button: PanelHeader"
        />
        <Button
          imageButton
          imageButtonSrc={Logo}
          imageButtonClassName="w-10 h-10"
          className="flex-shrink-0"
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
            setLeftPanelActiveTabChannels();
          }}
        />
      </div>
      <div className="w-full sm:w-1/4">
        <Input
          variant="user"
          size="sm"
          value={search}
          placeholder={strings.channelSearchInput}
          onChange={setSearch}
          onClick={handleSearch}
          className="w-full"
        />
      </div>
      <div className="sm:space-x-4 // flex items-center space-x-2 w-1/4 justify-end pr-2 flex-shrink-0">
        <ul className="sm:space-x-4 // flex items-center space-x-2">
          <li>
            <DropDownControls
              src="bell"
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
              userProfile
              src={avatar}
              username={username}
              onClick={toggleSettings}
              onClose={() => setDropdownList([])}
            >
              {settingsDropdown === MY_PROFILE ? (
                <DropDownMenu buttons={settingsButtons} />
              ) : settingsDropdown === SETTINGS ? (
                <DropDownMenu
                  title={strings.settingsHeader}
                  buttons={settingsButtons}
                  src="cog"
                />
              ) : settingsDropdown === ACCOUNT_SETTINGS ? (
                <DropDownMenu
                  title={strings.accountSettings}
                  buttons={accountSettingsButtons}
                  handleBack={popDropdown}
                  src="user-circle"
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
                  src="info-circle"
                />
              ) : (
                <></>
              )}
            </DropDownControls>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SiteHeaderMain;
