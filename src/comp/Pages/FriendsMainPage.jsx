import React, { useState } from "react";

import SiteHeaderMain from "../SiteHeaderMain";
import TabNavMobile from "../TabNavMobile";
import FriendsPanel from "../FriendsPanel";
import RecommendedVideos from "../RecommendedVideos";

function FriendMainPage({ list, channelPanelProps }) {
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
    <>
      <div className="fixed z-40 w-full md:relative">
        <SiteHeaderMain />
      </div>
      <div className="flex">
        <div
          className={`${
            selectedPage === "channels" ? "" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <FriendsPanel />
        </div>
        <div
          className={`${
            selectedPage === "main" ? "" : "hidden"
          } flex-grow mt-10 mx-2 md:mx-10 md:block`}
        >
          <RecommendedVideos list={list} />
        </div>
      </div>
      <TabNavMobile
        selectedPage={selectedPage}
        updateSelectedPage={updateSelectedPage}
      />
    </>
  );
}

export default FriendMainPage;
