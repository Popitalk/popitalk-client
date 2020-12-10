import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import DropDownMenu from "../DropDowns/DropDownMenu";
import DropDownControls from "../DropDowns/DropDownControls";
import Button from "../Controls/Button";
import SignInButton from "../SignInButton";
import strings from "../../helpers/localization";

const SETTINGS = 1;
const INFORMATION = 4;

const SiteHeaderViewers = () => {
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
