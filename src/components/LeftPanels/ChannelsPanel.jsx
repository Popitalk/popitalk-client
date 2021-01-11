import React from "react";
import ReactTooltip from "react-tooltip";

import ChannelsList from "../InfoCardLists/ChannelsList";
import MiniFriendsList from "../MiniFriendsList";
import PanelHeader from "./PanelHeader";
import strings from "../../helpers/localization";
import LeftPanelFooter from "./LeftPanelFooter";
import LeftPanelSubHeader from "./LeftPanelSubHeader";

export default function ChannelsPanel({
  yourChannels,
  followingChannels,
  recommendedChannels,
  selectedChannel,
  friends,
  handleSelectChannel,
  handleSelectRoom,
  handleCreateChannel,
  updateSelectedPage,
  selectedPage,
  setFriendsSearchFocus,
  numberOfNotifications
}) {
  const leftPanelChannelList = (
    listType,
    headerString,
    emptyMessage,
    button
  ) => (
    <div className="py-1 w-full">
      <LeftPanelSubHeader
        headerString={headerString}
        button={button}
        onClick={handleCreateChannel}
        tooltip={strings.createChannelButton}
        analyticsString="Create Channel Button: ChannelsPanel"
      />
      <ChannelsList
        channels={listType}
        selected={selectedChannel}
        handleSelect={handleSelectChannel}
        fullHeight={true}
        emptyMessage={emptyMessage}
        isLoading={false}
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full sm:w-84 h-full bg-background-primary select-none">
      <PanelHeader
        updateSelectedPage={updateSelectedPage}
        selectedPage={selectedPage}
        numberOfNotifications={numberOfNotifications}
      />
      <div className="flex-col h-full overflow-y-scroll">
        <MiniFriendsList
          friends={friends}
          handleSelectRoom={handleSelectRoom}
          handleFindFriends={() => {
            setFriendsSearchFocus(true);
            updateSelectedPage("friends");
          }}
          isLoading={false}
        />
        <div className="relative flex flex-col items-start bg-background-primary">
          {leftPanelChannelList(
            yourChannels,
            strings.yourChannels,
            strings.yourChannelsPlaceholder,
            true
          )}
          {followingChannels.length !== 0 &&
            leftPanelChannelList(
              followingChannels,
              strings.followingChannels,
              strings.followingChannelsPlaceholder
            )}
          {leftPanelChannelList(
            recommendedChannels,
            strings.recommendedChannels
          )}
          <div className="flex flex-col justify-between h-full px-4 py-4 mt-24">
            <LeftPanelFooter />
          </div>
        </div>
      </div>
      <ReactTooltip
        effect="solid"
        backgroundColor="#F2F2F2"
        textColor="black"
        className="shadow-md rounded-md py-1 px-3 opacity-100"
        arrowColor="transparent"
      />
    </div>
  );
}
