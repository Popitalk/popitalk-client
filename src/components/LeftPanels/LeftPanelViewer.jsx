import React, { useState } from "react";
import strings from "../../localization/strings";
import LoadMoreButton from "../Controls/LoadMoreButton";
import ChannelsList from "../InfoCardLists/ChannelsList";
import LeftPanelDescription from "./LeftPanelDescription";
import LeftPanelFooter from "./LeftPanelFooter";
import LeftPanelSubHeader from "./LeftPanelSubHeader";

export default function LeftPanelViewer({
  link,
  recommendedChannels,
  selectedChannel,
  handleSelectChannel
}) {
  const [recommendedChannelsCount, setRecommendedChannelsCount] = useState(5); // Later on will load more recommendedChannels from api

  return (
    <div className="flex flex-col w-screen sm:w-68 h-full bg-background-primary select-none">
      <LeftPanelDescription />
      <div className="py-2 w-full">
        <LeftPanelSubHeader headerString={strings.recommendedChannels} />
        <ChannelsList
          channels={recommendedChannels.slice(0, recommendedChannelsCount)}
          selected={selectedChannel}
          handleSelect={handleSelectChannel}
          fullHeight={true}
          emptyMessage={strings.yourChannelsPlaceholder}
          isLoading={false}
        />
        <LoadMoreButton
          isLoadMore={recommendedChannelsCount < recommendedChannels.length}
          handleLoadMore={() => setRecommendedChannelsCount(count => count + 5)}
        />
      </div>
      <div className="flex pt-24 pb-4 px-4">
        <LeftPanelFooter />
      </div>
    </div>
  );
}
