import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";

export default function SiteHeaderMain({ hasNotification }) {
  return (
    <header className="flex justify-between px-4 py-2 bg-primaryBackground">
      <img src={Logo} alt="PlayNow's logo" className="w-12 h-12" />
      <ul className="flex items-center space-x-8">
        <li>
          <div className="flex items-center p-2 cursor-pointer rounded-xl bg-highlightBackground">
            <span className="font-bold">Andrew</span>
            <img
              className="w-8 h-8 ml-4 rounded-full"
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="User"
            />
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon="user-plus"
            className="cursor-pointer text-secondaryText hover:text-highlightText"
          />
        </li>
        <li>
          <div className="relative">
            <FontAwesomeIcon
              icon="bell"
              className={`cursor-pointer ${
                hasNotification ? "text-highlightText" : "text-secondaryText"
              } hover:text-highlightText`}
            />
            {hasNotification && (
              <div className="absolute top-0 z-10 p-1 ml-2 border-2 rounded-full border-primaryBackground bg-errorText"></div>
            )}
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon="cog"
            className="cursor-pointer text-secondaryText hover:text-highlightText"
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon="info-circle"
            className="cursor-pointer text-secondaryText hover:text-highlightText"
          />
        </li>
      </ul>
    </header>
  );
}
