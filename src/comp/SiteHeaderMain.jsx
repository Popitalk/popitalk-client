import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";

import Transition from "./Transition";

export default function SiteHeaderMain({ hasNotification }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="relative flex flex-col px-4 py-2">
      {!mobileMenu && (
        <div className="flex items-center justify-between">
          <img src={Logo} alt="PlayNow's logo" className="w-12 h-12" />
          <ul className="items-center hidden space-x-8 md:flex">
            <li>
              <div className="flex items-center p-2 transition-colors duration-150 cursor-pointer rounded-xl hover:bg-highlightBackground">
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
                    hasNotification
                      ? "text-highlightText"
                      : "text-secondaryText"
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
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <>
          <div className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden">
            <div className="p-4 space-y-6 bg-white border rounded-lg shadow-md border-primaryBorder">
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
