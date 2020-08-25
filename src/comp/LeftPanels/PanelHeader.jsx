import React from "react";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage,
  numberOfNotifications
}) {
  return (
    <div className="flex bg-primaryBackground items-center w-full select-none space-x-4">
      <Button
        hoverable
        styleNone
        icon="bars"
        className="p-4 ml-2 rounded-full text-secondaryText hover:text-highlightText"
        onClick={handleCollapse}
        analyticsString="Collapse Button: PanelHeader"
      />
      <nav
        className={`text-xl px-2 p-1 focus:outline-none hover:bg-secondaryBackground rounded-xl transition transform ease-in-out hover:scale-105 duration-100 ${
          selectedPage === "channels"
            ? "text-primaryText cursor-default font-semibold"
            : "text-secondaryText cursor-pointer font-regular"
        } `}
        onClick={() => updateSelectedPage("channels")}
      >
        {strings.channels}
      </nav>
      <nav
        className={`flex text-xl px-2 p-1 focus:outline-none hover:bg-secondaryBackground rounded-xl transition transform ease-in-out hover:scale-105 duration-100 ${
          selectedPage === "friends"
            ? "text-primaryText cursor-default font-semibold"
            : "text-secondaryText cursor-pointer font-regular"
        } `}
        onClick={() => updateSelectedPage("friends")}
      >
        {strings.friends}
        {numberOfNotifications !== 0 && (
          <span className="flex items-center justify-center bg-gradient-r-cancel rounded-full w-4 h-4 text-xs text-tertiaryText font-bold ml-2">
            {numberOfNotifications}
          </span>
        )}
      </nav>
    </div>
  );
}
