import React, { useState, Fragment } from "react";
import FriendsPanel from "./FriendsPanel";
import CollapsedPanel from "./CollapsedPanel";
import ChannelsPanel from "./Channel/ChannelsPanel";

export default function LeftPanel({
  channels,
  friends,
  selected,
  handleSelect,
  selectedPage
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Fragment>
      <div
        className={`
          ${selectedPage === "channels" ? "" : "hidden"}
          ${isCollapsed ? "md:hidden" : "md:block"}
          w-full md:block md:w-auto`}
      >
        <ChannelsPanel
          channels={channels}
          friends={friends}
          selected={selected}
          handleSelect={handleSelect}
          selectedPage={selectedPage}
          handleCollapse={handleCollapse}
        />
      </div>
      <div
        className={`
          ${selectedPage === "friends" ? "" : "hidden"}
          ${isCollapsed ? "md:hidden" : "md:block"}
           w-full md:w-auto md:hidden`}
      >
        <FriendsPanel
          channels={channels}
          friends={friends}
          selected={selected}
          handleSelect={handleSelect}
          selectedPage={selectedPage}
        />
      </div>
      {selectedPage === "main" ? (
        <div
          className={`my-12 md:my-0 block ${
            isCollapsed ? "md:block" : "md:hidden"
          }`}
        >
          <CollapsedPanel
            channels={channels}
            selected={selected}
            handleSelect={handleSelect}
            handleCollapse={handleCollapse}
          />
        </div>
      ) : null}
    </Fragment>
  );
}
