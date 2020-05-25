import React, { Fragment, useState } from "react";
import RecommendedChannels from "./RecommendedChannels";
import ChannelsPanel from "./ChannelsPanel";
import SiteHeaderMain from "./SiteHeaderMain";
import TabNavMobile from "./TabNavMobile";
import FriendsPanel from "./FriendsPanel";

function ChannelMainPage({ list, channelPanelProps }) {
  const { channels, friends, selected, handleSelect } = channelPanelProps;
  const [selectedPage, setSelectedPage] = useState("main");
  const updateSelectedPage = page => {
    const pages = { channels: "channels", main: "main", friends: "friends" };
    if (pages[page]) {
      setSelectedPage(pages[page]);
    } else {
      console.log("no such page exists.");
    }
  };
  return (
    <Fragment>
      <div className="fixed w-full z-40">
        <SiteHeaderMain />
      </div>
      <div className="flex">
        <div
          className={`${
            selectedPage === "channels" ? "" : "hidden"
          } w-auto md:block`}
        >
          <ChannelsPanel
            channels={channels}
            friends={friends}
            selected={selected}
            handleSelect={handleSelect}
            selectedPage={selectedPage}
          />
        </div>
        <div
          className={`${
            selectedPage === "friends" ? "" : "hidden"
          } w-auto mt-12 md:hidden`}
        >
          <FriendsPanel
            channels={channels}
            friends={friends}
            selected={selected}
            handleSelect={handleSelect}
            selectedPage={selectedPage}
          />
        </div>
        <div
          className={`${
            selectedPage === "main" ? "" : "hidden"
          } flex-grow mt-10 mx-2 md:mx-10`}
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
