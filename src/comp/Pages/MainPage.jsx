import React, { Fragment, useState } from "react";

import SiteHeaderMain from "../SiteHeaderMain";
import TabNavMobile from "../TabNavMobile";
import LeftPanel from "../LeftPanels/LeftPanel";
import RecommendedView from "../RecommendedView";

export default function MainPage({ list, channelPanelProps }) {
  // TODO: list prop should be received based on the selected page. A channels list
  // for channels page and a recommended by friends list for friends page.
  const { channels, friends, selected, handleSelect } = channelPanelProps;
  const [selectedPage, setSelectedPage] = useState("channels");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const updateSelectedPage = page => {
    const pages = {
      channels: "channels",
      friends: "friends"
    };
    if (pages[page]) {
      setSelectedPage(pages[page]);
    } else {
      console.log("no such page exists.");
    }
  };

  return (
    <Fragment>
      <div className="fixed z-40 w-full">
        <SiteHeaderMain />
      </div>
      <div className="flex">
        <LeftPanel
          yourChannels={channels}
          followingChannels={channels}
          friends={friends}
          selected={selected}
          handleSelect={handleSelect}
          updateSelectedPage={updateSelectedPage}
          isCollapsed={isCollapsed}
          selectedPage={selectedPage}
          handleCollapse={handleCollapse}
        />
        <div
          className={`${
            isCollapsed ? "block" : "hidden"
          } flex-grow p-2 md:block h-screen py-16 overflow-scroll`}
        >
          <RecommendedView list={list} selectedPage={selectedPage} />
        </div>
      </div>
    </Fragment>
  );
}
