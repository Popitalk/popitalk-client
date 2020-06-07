import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage
}) {
  return (
    <div className="flex items-center justify-around w-full px-1 mb-2">
      <button className="p-4" onClick={handleCollapse}>
        <FontAwesomeIcon
          icon="bars"
          className="cursor-pointer text-secondaryText hover:text-highlightText"
        />
      </button>
      <button onClick={() => updateSelectedPage("channels")}>
        <h3
          className={`${
            selectedPage === "channels"
              ? "text-2xl font-semibold btn-playing p-1 px-2"
              : "text-secondaryText font-medium text-2xl hover:bg-highlightBackground p-1 px-2 rounded-xl"
          } `}
        >
          Channels
        </h3>
      </button>
      <button onClick={() => updateSelectedPage("friends")}>
        <h3
          className={`${
            selectedPage === "friends"
              ? "text-2xl font-semibold btn-playing p-1 px-2"
              : "text-secondaryText font-medium text-2xl hover:bg-highlightBackground p-1 px-2 rounded-xl"
          } `}
        >
          Friends
        </h3>
      </button>
    </div>
  );
}
