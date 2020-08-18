import React from "react";
import Button from "../Controls/Button";
import strings from "../Localization";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage
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
        className={`text-2xl px-2 p-1 focus:outline-none font-semibold hover:bg-secondaryBackground rounded-xl transition transform ease-in-out hover:scale-105 duration-100 ${
          selectedPage === "channels"
            ? "rainbow-text cursor-default"
            : "text-secondaryText cursor-pointer"
        } `}
        onClick={() => updateSelectedPage("channels")}
      >
        {strings.channels}
      </nav>
      <nav
        className={`text-2xl px-2 p-1 focus:outline-none font-semibold hover:bg-secondaryBackground rounded-xl transition transform ease-in-out hover:scale-105 duration-100 ${
          selectedPage === "friends"
            ? "rainbow-text cursor-default"
            : "text-secondaryText cursor-pointer"
        } `}
        onClick={() => updateSelectedPage("friends")}
      >
        {strings.friends}
      </nav>
    </div>
  );
}
