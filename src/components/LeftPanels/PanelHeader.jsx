import React from "react";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage,
  numberOfNotifications
}) {
  return (
    <div className="flex bg-background-primary items-center w-full select-none space-x-4 px-2">
      <Button
        hoverable
        styleNone
        icon="bars"
        className="hidden sm:block p-4 ml-2 rounded-full text-copy-secondary hover:text-copy-highlight"
        onClick={handleCollapse}
        analyticsString="Collapse Button: PanelHeader"
      />
      <div className="flex space-x-2">
        <nav
          className={`flex items-center space-x-2 px-3 p-2 focus:outline-none hover:bg-hover-highlight rounded-xl transition transform ease-in-out hover:scale-105 duration-100 cursor-pointer ${
            selectedPage === "channels"
              ? "text-copy-highlight font-semibold"
              : "text-copy-secondary font-regular"
          }`}
          onClick={() => updateSelectedPage("channels")}
        >
          <FontAwesomeIcon icon="globe-americas" />
          <h1>{strings.channels}</h1>
        </nav>
        <nav
          className={`flex items-center space-x-2  px-3 p-2 focus:outline-none hover:bg-hover-highlight rounded-xl transition transform ease-in-out hover:scale-105 duration-100 cursor-pointer ${
            selectedPage === "friends"
              ? "text-copy-highlight font-semibold"
              : "text-copy-secondary font-regular"
          } `}
          onClick={() => updateSelectedPage("friends")}
        >
          <FontAwesomeIcon icon="paper-plane" />
          <h1>{strings.friends}</h1>
          {numberOfNotifications !== 0 && (
            <span className="flex items-center justify-center bg-gradient-r-cancel rounded-full w-2 h-2 animate-bounce text-xs text-copy-tertiary font-bold ml-2 mt-1" />
          )}
        </nav>
      </div>
    </div>
  );
}
