import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/logo.png";
import DropDownMenu from "../DropDowns/DropDownMenu";
import DropDownControls from "../DropDowns/DropDownControls";
import Button from "../Controls/Button";
import SignInButton from "../SignInButton";
import strings from "../../localization/strings";
import { updateChannelsList } from "../../helpers/functions";
import {
  setSelectedTab,
  setIsSearchForChannels,
  getTrendingChannels,
  removeLeftPanel
} from "../../redux/actions";
import PanelHeader from "../LeftPanels/PanelHeader";

const SETTINGS = 1;
const INFORMATION = 4;

const SiteHeaderViewers = () => {
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

  return (
    <header className="sm:px-6 // relative flex items-center justify-around h-12 bg-background-primary z-30 select-none">
      <div className="flex flex-row items-center w-1/3 sm:w-1/4 flex-shrink-0">
        <Button
          hoverable
          styleNone
          icon="bars"
          styleNoneIconClassName="text-lg"
          className="sm:hidden block rounded-full text-copy-secondary w-10 h-10 hover:text-copy-highlight mr-4"
          onClick={() => dispatch(removeLeftPanel())}
          analyticsString="Collapse Button: PanelHeader"
        />
        <Button
          imageButton
          imageButtonSrc={Logo}
          imageButtonClassName="w-10 h-10 object-cover"
          analyticsString="Main Logo Button: SiteHeaderMain"
          className="flex-shrink-0"
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
      <div className="w-1/3 sm:w-1/2">
        <PanelHeader viewer />
      </div>
      <div className="sm:space-x-6 // flex items-center justify-end space-x-2 w-1/3 sm:w-1/4 flex-shrink-0">
        <ul className="sm:space-x-6 // flex items-center space-x-2 flex-shrink-0">
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
