import React, { useState } from "react";
import strings from "../../localization/strings";
import LoadMoreButton from "../Controls/LoadMoreButton";
import ChannelsList from "../InfoCardLists/ChannelsList";
import LeftPanelDescription from "./LeftPanelDescription";
import LeftPanelFooter from "./LeftPanelFooter";
import LeftPanelSubHeader from "./LeftPanelSubHeader";
import PanelHeader from "./PanelHeader";

export default function LeftPanelViewer({
  link,
  recommendedChannels,
  selectedChannel,
  handleSelectChannel,
  updateSelectedPage,
  selectedPage,
  openSignUpRequiredModal
}) {
  const [recommendedChannelsCount, setRecommendedChannelsCount] = useState(5); // Later on will load more recommendedChannels from api

  return (
    <div className="flex flex-col w-full sm:w-68 h-withoutHeader overflow-y-scroll bg-background-primary select-none">
      <div className="h-40">
        <PanelHeader
          openSignUpRequiredModal={openSignUpRequiredModal}
          updateSelectedPage={updateSelectedPage}
          selectedPage={selectedPage}
          viewer
        />
      </div>
      <LeftPanelDescription />
      <div className="py-2 w-full bg-background-primary">
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
      <div className="flex pt-24 pb-4 px-4 bg-background-primary">
        <LeftPanelFooter />
      </div>
    </div>
  );
}
