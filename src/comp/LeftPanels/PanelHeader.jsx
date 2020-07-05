import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage
}) {
  return (
    <div className="flex sticky top-0 bg-primaryBackground items-center justify-around w-full px-0 z-20 select-none">
      <button className="p-4 ml-2 focus:outline-none" onClick={handleCollapse}>
        <FontAwesomeIcon
          icon="bars"
          className="cursor-pointer text-secondaryText hover:text-highlightText transition transform ease-in-out hover:scale-110 duration-100"
        />
      </button>
      <button
        onClick={() => updateSelectedPage("channels")}
        className="focus:outline-none"
      >
        <h3
          className={`${
            selectedPage === "channels"
              ? "text-2xl font-semibold btn-playing px-2 p-1 rounded-full"
              : "text-secondaryText font-semibold text-2xl hover:bg-secondaryBackground rounded-xl px-2 p-1 transition transform ease-in-out hover:scale-105 duration-100"
          } `}
        >
          Channels
        </h3>
      </button>
      <button
        onClick={() => updateSelectedPage("friends")}
        className="focus:outline-none"
      >
        <h3
          className={`${
            selectedPage === "friends"
              ? "text-2xl font-semibold btn-playing px-2 p-1 rounded-full"
              : "text-secondaryText font-semibold text-2xl hover:bg-secondaryBackground rounded-xl px-2 p-1 transition transform ease-in-out hover:scale-105 duration-100"
          } `}
        >
          Friends
        </h3>
      </button>
    </div>
  );
}
