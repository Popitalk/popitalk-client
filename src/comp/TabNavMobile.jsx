import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TabNavMobile({ selectedPage, updateSelectedPage }) {
  return (
    <div className="flex fixed bg-primaryBackground w-full justify-around z-50 bottom-0 md:hidden">
      <button onClick={() => updateSelectedPage("channels")} className="p-5">
        <FontAwesomeIcon
          icon="tv"
          className={`fa-2x ${
            selectedPage === "channels"
              ? "text-highlightText"
              : "text-secondaryButtonText"
          }`}
        />
      </button>
      <button onClick={() => updateSelectedPage("main")} className="p-5">
        <FontAwesomeIcon
          icon="globe"
          className={`fa-2x ${
            selectedPage === "main"
              ? "text-highlightText"
              : "text-secondaryButtonText"
          }`}
        />
      </button>
      <button onClick={() => updateSelectedPage("friends")} className="p-5">
        <FontAwesomeIcon
          icon="user-friends"
          className={`fa-2x ${
            selectedPage === "friends"
              ? "text-highlightText"
              : "text-secondaryButtonText"
          }`}
        />
      </button>
    </div>
  );
}

export default TabNavMobile;
