import React from "react";
import strings from "../../helpers/localization";
import InviteForm from "../Forms/InviteForm";
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
  return (
    <div className="flex flex-col w-screen md:w-84 h-full bg-background-primary select-none">
      <div className="flex flex-col justify-between h-full px-2 space-y-2">
        <div className="bg-background-secondary px-2 py-4 shadow-md rounded-md ">
          <InviteForm link={link} />
        </div>
        <LeftPanelDescription />
        <div className="py-1 w-full">
          <LeftPanelSubHeader headerString={strings.recommendedChannels} />
          <ChannelsList
            channels={recommendedChannels}
            selected={selectedChannel}
            handleSelect={handleSelectChannel}
            fullHeight={true}
            emptyMessage={strings.yourChannelsPlaceholder}
            isLoading={false}
          />
        </div>
        <div className="flex pt-24 pb-4 px-2">
          <LeftPanelFooter />
        </div>
      </div>
    </div>
  );
}
