import React from "react";
import ReactTooltip from "react-tooltip";

import ChannelsList from "../InfoCardLists/ChannelsList";
import Button from "../Controls/Button";
import MiniFriendsList from "../MiniFriendsList";
import PanelHeader from "./PanelHeader";
import strings from "../../helpers/localization";
import LeftPanelFooter from "./LeftPanelFooter";

export default function ChannelsPanel({
  yourChannels,
  followingChannels,
  recommendedChannels,
  selectedChannel,
  friends,
  handleSelectChannel,
  handleSelectRoom,
  handleCollapse,
  handleCreateChannel,
  updateSelectedPage,
  selectedPage,
  setFriendsSearchFocus,
  numberOfNotifications
}) {
  const subHeaderClassName =
    "mx-4 my-2 text-sm font-semibold text-copy-secondary";

  const leftPanelChannelList = (listType, headerString, emptyMessage) => (
    <div className="py-1 w-full">
      <h4 className={subHeaderClassName}>{headerString}</h4>
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
    <div className="flex flex-col w-84 h-full bg-background-primary select-none">
      <PanelHeader
        handleCollapse={handleCollapse}
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
          <Button
            actionButton
            size="sm"
            icon="plus"
            onClick={handleCreateChannel}
            analyticsString="Create Channel Button: ChannelsPanel"
            tooltip={strings.createChannelButton}
            className="absolute top-0 right-0 my-1 mx-2 "
          />
          {leftPanelChannelList(
            yourChannels,
            strings.yourChannels,
            strings.yourChannelsPlaceholder
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
