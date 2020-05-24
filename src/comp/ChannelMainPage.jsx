import React, { Fragment } from "react";
import RecommendedChannels from "./RecommendedChannels";
import ChannelsPanel from "./ChannelsPanel";
import SiteHeaderMain from "./SiteHeaderMain";

function ChannelMainPage({ list, channelPanelProps }) {
  const { channels, friends, selected, handleSelect } = channelPanelProps;
  return (
    <Fragment>
      <div className="fixed w-full z-40">
        <SiteHeaderMain />
      </div>
      <div className="flex">
        <div className="w-auto absolute z-30 sm:relative">
          <ChannelsPanel
            channels={channels}
            friends={friends}
            selected={selected}
            handleSelect={handleSelect}
          />
        </div>
        <div className="flex-grow mt-10 mx-2 md:mx-10">
          <RecommendedChannels list={list} />
        </div>
      </div>
    </Fragment>
  );
}

export default ChannelMainPage;
