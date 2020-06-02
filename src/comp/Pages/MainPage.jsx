import React, { Fragment, useState } from "react";

import SiteHeaderMain from "../SiteHeaderMain";
import TabNavMobile from "../TabNavMobile";
import LeftPanel from "../LeftPanel";
import RecommendedView from "../RecommendedView";

export default function MainPage({ list, channelPanelProps }) {
  // TODO: list prop should be received based on the selected page. A channels list
  // for channels page and a recommended by friends list for friends page.
  const { channels, friends, selected, handleSelect } = channelPanelProps;
  const [selectedPage, setSelectedPage] = useState("channels");
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
      <div className="fixed z-40 w-full md:relative">
        <SiteHeaderMain />
      </div>
      <div className="flex">
        <LeftPanel
          channels={channels}
          friends={friends}
          selected={selected}
          handleSelect={handleSelect}
          updateSelectedPage={updateSelectedPage}
          selectedPage={selectedPage}
        />
        <div className={`flex-grow mt-10 mx-2 md:mx-10`}>
          <RecommendedView list={list} selectedPage={selectedPage} />
        </div>
      </div>
    </Fragment>
  );
}
