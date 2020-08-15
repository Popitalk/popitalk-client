import React from "react";
import Button from "../Controls/Button";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage
}) {
  return (
    <div className="flex bg-primaryBackground items-center justify-around w-full select-none">
      <Button
        hoverable
        styleNone
        icon="bars"
        className="p-4 ml-2 rounded-full text-secondaryText hover:text-highlightText"
        onClick={handleCollapse}
      />
      <nav
        className={`text-2xl px-2 p-1 focus:outline-none font-semibold hover:bg-secondaryBackground rounded-xl transition transform ease-in-out hover:scale-105 duration-100 ${
          selectedPage === "channels"
            ? "rainbow-text cursor-default"
            : "text-secondaryText cursor-pointer"
        } `}
        onClick={() => updateSelectedPage("channels")}
      >
        Channels
      </nav>
      <nav
        className={`text-2xl px-2 p-1 focus:outline-none font-semibold hover:bg-secondaryBackground rounded-xl transition transform ease-in-out hover:scale-105 duration-100 ${
          selectedPage === "friends"
            ? "rainbow-text cursor-default"
            : "text-secondaryText cursor-pointer"
        } `}
        onClick={() => updateSelectedPage("friends")}
      >
        Friends
      </nav>
    </div>
  );
}
