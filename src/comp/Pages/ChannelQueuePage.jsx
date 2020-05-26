import React, { useState } from "react";
import ChannelPage from "../ChannelPage";
import ChannelsPanel from "../Channel/ChannelsPanel";
import ChannelQueue from "../Channel/ChannelQueue";
import { ChannelQueueShow } from "../../stories/07-Cards.stories";
import { ChannelChatPanel } from "../../stories/04-Components.stories";

function ChannelQueuePage({ channelPanelProps }) {
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
    <ChannelPage>
      <div
        className={`${
          selectedPage === "channels" ? "" : "hidden"
        } w-full md:block md:w-auto flex-none`}
      >
        <ChannelsPanel
          channels={channels}
          friends={friends}
          selected={selected}
          handleSelect={handleSelect}
          selectedPage={selectedPage}
        />
      </div>
      <div className="flex-1">
        <ChannelQueueShow />
      </div>
      <div className="flex-none">
        <ChannelChatPanel />
      </div>
    </ChannelPage>
  );
}

export default ChannelQueuePage;
