import React, { Fragment } from "react";
import FriendsPanel from "./FriendsPanel";
import CollapsedPanel from "./CollapsedPanel";
import ChannelsPanel from "./Channel/ChannelsPanel";

export default function LeftPanel({
  channels,
  friends,
  selected,
  handleSelect,
  selectedPage,
  handleCollapse,
  isCollapsed,
  updateSelectedPage
}) {
  return (
    <Fragment>
      <div
        className={`${isCollapsed ? "hidden" : ""} w-full md:w-auto shadow-md`}
      >
        {selectedPage === "channels" ? (
          <ChannelsPanel
            channels={channels}
            friends={friends}
            selected={selected}
            handleSelect={handleSelect}
            selectedPage={selectedPage}
            updateSelectedPage={updateSelectedPage}
            handleCollapse={handleCollapse}
          />
        ) : (
          <FriendsPanel
            channels={channels}
            friends={friends}
            selected={selected}
            handleSelect={handleSelect}
            updateSelectedPage={updateSelectedPage}
            handleCollapse={handleCollapse}
            selectedPage={selectedPage}
          />
        )}
      </div>
      <div className={`block ${isCollapsed ? "md:block" : "hidden"}`}>
        <CollapsedPanel
          channels={channels}
          selected={selected}
          handleSelect={handleSelect}
          handleCollapse={handleCollapse}
          selectedPage={selectedPage}
          updateSelectedPage={updateSelectedPage}
        />
      </div>
    </Fragment>
  );
}
