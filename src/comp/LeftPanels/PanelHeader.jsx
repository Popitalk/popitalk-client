import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage
}) {
  return (
    <div className="flex sticky top-0 bg-primaryBackground items-center justify-around w-full z-20 select-none">
      <button
        className="p-4 ml-1 rounded-full focus:outline-none text-secondaryText hover:text-highlightText transition transform ease-in-out hover:scale-110 duration-100"
        onClick={handleCollapse}
      >
        <FontAwesomeIcon icon="bars" />
      </button>
      <button
        className={`text-2xl px-2 p-1 focus:outline-none font-semibold ${
          selectedPage === "channels"
            ? "btn-playing"
            : "text-secondaryText hover:bg-secondaryBackground rounded-xl transition transform ease-in-out hover:scale-105 duration-100"
        } `}
        onClick={() => updateSelectedPage("channels")}
      >
        Channels
      </button>
      <button
        className={`text-2xl px-2 p-1 focus:outline-none font-semibold ${
          selectedPage === "friends"
            ? "btn-playing"
            : "text-secondaryText hover:bg-secondaryBackground rounded-xl transition transform ease-in-out hover:scale-105 duration-100"
        } `}
        onClick={() => updateSelectedPage("friends")}
      >
        Friends
      </button>
    </div>
  );
}
