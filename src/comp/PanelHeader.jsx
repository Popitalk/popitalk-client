import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PanelHeader({ handleCollapse, updateSelectedPage }) {
  return (
    <div className="items-center justify-around hidden w-full px-4 pl-0 mb-4 md:flex">
      <button
        className="p-4 flex items-center flex-col"
        onClick={handleCollapse}
      >
        <FontAwesomeIcon
          icon="bars"
          className="cursor-pointer text-secondaryText hover:text-highlightText"
        />
      </button>
      <button onClick={() => updateSelectedPage("channels")}>
        <h3 className="text-2xl font-bold btn-playing">Channels</h3>
      </button>
      <button onClick={() => updateSelectedPage("friends")}>
        <h3 className="text-2xl font-bold btn-playing">Friends</h3>
      </button>
    </div>
  );
}
