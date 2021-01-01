import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/logo.png";
import DropDownMenu from "../DropDowns/DropDownMenu";
import DropDownControls from "../DropDowns/DropDownControls";
import Button from "../Controls/Button";
import SignInButton from "../SignInButton";
import strings from "../../helpers/localization";
import { updateChannelsList } from "../../helpers/functions";
import {
  setSelectedTab,
  setIsSearchForChannels,
  getTrendingChannels
} from "../../redux/actions";

const SETTINGS = 1;
const INFORMATION = 4;

const SiteHeaderViewers = ({ hideLeftPanelButton }) => {
  const [dropdownList, setDropdownList] = useState([]);

  const trendingChannels = useSelector(state => state.trendingChannels);
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

  const settingsDropdown =
    dropdownList.length > 0 ? dropdownList[dropdownList.length - 1] : 0;

  const settingsButtons = [
    {
      text: strings.aboutPopitalk,
      leftIcon: "info-circle",
      onClick: () => setDropdownList([...dropdownList, INFORMATION]),
      rightIcon: "angle-right"
    },
    {
      text: "Dark mode",
      display: true
    }
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

  return (
    <header className="sm:px-6 // relative flex items-center justify-between h-12 bg-background-primary z-30 select-none">
      <div className="flex flex-row items-center">
        {hideLeftPanelButton}
        <Button
          imageButton
          imageButtonSrc={Logo}
          imageButtonClassName="w-10 h-10"
          analyticsString="Main Logo Button: SiteHeaderMain"
          hoverable
          onClick={() => {
            updateChannelsList(
              dispatch,
              trendingChannels.lastRequestAt,
              getTrendingChannels,
              trendingChannels,
              defaultAvatar,
              defaultIcon
            );
            dispatch(setIsSearchForChannels(false));
            dispatch(setSelectedTab(strings.trending));
            history.push("/");
          }}
        />
      </div>
      <div className="sm:space-x-6 // flex items-center space-x-2">
        <ul className="sm:space-x-6 // flex items-center space-x-2">
          <li>
            <SignInButton />
          </li>
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
      </div>
    </header>
  );
};

export default SiteHeaderViewers;
