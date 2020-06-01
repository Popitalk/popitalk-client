import React, { Fragment, useState, useEffect } from "react";
import RecommendedChannels from "../Channel/RecommendedChannels";
import ChannelsPanel from "../Channel/ChannelsPanel";
import SiteHeaderMain from "../SiteHeaderMain";
import TabNavMobile from "../TabNavMobile";
import FriendsPanel from "../FriendsPanel";
import CollapsedPanel from "../CollapsedPanel";

function ChannelMainPage({ list, channelPanelProps }) {
  const { channels, friends, selected, handleSelect } = channelPanelProps;
  const [selectedPage, setSelectedPage] = useState("main");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const updateSelectedPage = page => {
    const pages = { channels: "channels", main: "main", friends: "friends" };
    if (pages[page]) {
      setSelectedPage(pages[page]);
    } else {
      console.log("no such page exists.");
    }
  };
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const panel = () => {
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
        <div className={`hidden ${isCollapsed ? "md:block" : "md:hidden"}`}>
          <CollapsedPanel
            channels={channels}
            selected={selected}
            handleSelect={handleSelect}
            handleCollapse={handleCollapse}
          />
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className="fixed z-40 w-full md:relative">
        <SiteHeaderMain />
      </div>
      <div className="flex">
        {panel()}
        <div
          className={`${
            selectedPage === "main" ? "" : "hidden"
          } flex-grow mt-10 mx-2 md:mx-10 md:block`}
        >
          <RecommendedChannels list={list} />
        </div>
        <TabNavMobile
          selectedPage={selectedPage}
          updateSelectedPage={updateSelectedPage}
        />
      </div>
    </Fragment>
  );
}

export default ChannelMainPage;
