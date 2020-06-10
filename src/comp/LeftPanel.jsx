import React, { Fragment } from "react";
import FriendsPanel from "./FriendsPanel";
import CollapsedPanel from "./CollapsedPanel";
import ChannelsPanel from "./Channel/ChannelsPanel";

export default function LeftPanel({
  yourChannels,
  followingChannels,
  friends,
  selected,
  handleSelect,
  selectedPage,
  handleCollapse,
  handleCreateChannel,
  isCollapsed,
  updateSelectedPage
}) {
  const channels = [...yourChannels, ...followingChannels];

  return (
    <Fragment>
      <div
        className={`${
          isCollapsed ? "hidden" : ""
        } w-full md:w-auto shadow-md h-full`}
      >
        {selectedPage === "channels" ? (
          <ChannelsPanel
            yourChannels={yourChannels}
            followingChannels={followingChannels}
            friends={friends}
            selected={selected}
            handleSelect={handleSelect}
            handleCreateChannel={handleCreateChannel}
            selectedPage={selectedPage}
            updateSelectedPage={updateSelectedPage}
            handleCollapse={handleCollapse}
          />
        ) : (
          <FriendsPanel
            userSearchResults={friends}
            selected={selected}
            handleSelect={handleSelect}
            updateSelectedPage={updateSelectedPage}
            handleCollapse={handleCollapse}
            selectedPage={selectedPage}
          />
        )}
      </div>
      <div className={`block ${isCollapsed ? "md:block" : "hidden"} h-full`}>
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
