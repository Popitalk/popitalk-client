import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage
}) {
  return (
    <div className="flex sticky top-0 bg-primaryBackground items-center justify-around w-full px-0 z-20">
      <button className="p-4 ml-2" onClick={handleCollapse}>
        <FontAwesomeIcon
          icon="bars"
          className="cursor-pointer text-secondaryText hover:text-highlightText duration-50"
        />
      </button>
      <button onClick={() => updateSelectedPage("channels")}>
        <h3
          className={`${
            selectedPage === "channels"
              ? "text-2xl font-semibold btn-playing px-2 p-1 rounded-full shadow-inner"
              : "text-secondaryText font-semibold text-2xl duration-50 hover:bg-secondaryBackground rounded-xl px-2 p-1"
          } `}
        >
          Channels
        </h3>
      </button>
      <button onClick={() => updateSelectedPage("friends")}>
        <h3
          className={`${
            selectedPage === "friends"
              ? "text-2xl font-semibold btn-playing px-2 p-1 rounded-full shadow-inner"
              : "text-secondaryText font-semibold text-2xl duration-50 hover:bg-secondaryBackground rounded-xl px-2 p-1"
          } `}
        >
          Friends
        </h3>
      </button>
    </div>
  );
}
