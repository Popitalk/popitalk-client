import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import FeedbackDropDown from "../DropDowns/FeedbackDropDown";
import DropDownControls from "../DropDowns/DropDownControls";
import Button from "../Controls/Button";
import SignInButton from "../SignInButton";
import { Toggle } from "../../App/ThemeContext";

const SiteHeaderViewers = () => (
  <header className="sm:px-6 // relative flex items-center justify-between h-12 bg-background-primary px-2 z-30 select-none">
    <Link
      to="/channels"
      className="flex flex-shrink-0 items-center justify-center"
    >
      <Button
        imageButton
        imageButtonSrc={Logo}
        imageButtonClassName="w-8 h-8"
        analyticsString="Main Logo Button: SiteHeaderViewers"
        hoverable
      />
    </Link>
    <div className="sm:space-x-6 // flex items-center space-x-2">
      <ul className="sm:space-x-6 // flex items-center space-x-2">
        <li>
          <SignInButton />
        </li>
        <li>
          <Toggle />
        </li>
        <li className="hidden lg:block">
          <DropDownControls
            icon="info-circle"
            analyticsString="To about.popitalk Button: SiteHeaderViewers"
          >
            <FeedbackDropDown />
          </DropDownControls>
        </li>
        <li className="block lg:hidden">
          <DropDownControls icon="bars">
            <FeedbackDropDown />
          </DropDownControls>
        </li>
      </ul>
    </div>
  </header>
);

export default SiteHeaderViewers;
