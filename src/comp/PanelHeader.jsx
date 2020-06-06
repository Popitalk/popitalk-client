import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage
}) {
  return (
    <div className="flex items-center justify-around w-full px-4 pl-0 mb-4">
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
              ? "text-2xl text-3xl font-bold btn-playing"
              : "text-secondaryText text-2xl bg-highlightBackground p-2 rounded-xl"
          } `}
        >
          Channels
        </h3>
      </button>
      <button onClick={() => updateSelectedPage("friends")}>
        <h3
          className={`${
            selectedPage === "friends"
              ? "text-2xl text-3xl font-bold btn-playing"
              : "text-secondaryText text-2xl bg-highlightBackground p-2 rounded-xl"
          } `}
        >
          Friends
        </h3>
      </button>
    </div>
  );
}
