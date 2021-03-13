import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import ChannelsList from "../InfoCardLists/ChannelsList";
import MiniFriendsList from "../MiniFriendsList";
import strings from "../../localization/strings";
import LeftPanelFooter from "./LeftPanelFooter";
import LeftPanelSubHeader from "./LeftPanelSubHeader";
import LoadMoreButton from "../Controls/LoadMoreButton";

import history from "../../history";
import Button from "../Controls/Button";
import PanelHeader from "./PanelHeader";

export default function ChannelsPanel({
  yourChannels,
  followingChannels,
  recommendedChannels,
  selectedChannel,
  friends,
  handleSelectChannel,
  handleSelectRoom,
  handleCreateChannel,
  setFriendsSearchFocus,
  updateSelectedPage,
  selectedPage
}) {
  const [yourChannelsCount, setYourChannelsCount] = useState(5);
  const [followingChannelsCount, setFollowingChannelsCount] = useState(5);
  const [recommendedChannelsCount, setRecommendedChannelsCount] = useState(5); // Later on will load more recommendedChannels from api
  const leftPanelChannelList = (
    listType,
    headerString,
    emptyMessage,
    button,
    isLoadMore,
    handleLoadMore
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
      <LoadMoreButton isLoadMore={isLoadMore} handleLoadMore={handleLoadMore} />
    </div>
  );

  const toSearchFriend = () => {
    setFriendsSearchFocus(true);
    history.push(`/friends`);
  };

  return (
    <div className="flex flex-col w-full sm:w-68 h-withoutHeader overflow-y-auto bg-background-primary select-none">
      <div className="flex-col h-full overflow-y-scroll space-y-2">
        <PanelHeader
          updateSelectedPage={updateSelectedPage}
          selectedPage={selectedPage}
        />
        <LeftPanelSubHeader
          headerString={strings.recentFriends}
          searchUser
          onClick={() => toSearchFriend()}
          tooltip={strings.searchFriendsInput}
          analyticsString="Add Friend Button: MiniFriendsList"
        />
        <MiniFriendsList
          friends={friends}
          handleSelectRoom={handleSelectRoom}
          isLoading={false}
        />
        <div className="relative flex flex-col items-start bg-background-primary">
          {yourChannels.length >= 1 ? (
            leftPanelChannelList(
              yourChannels.slice(0, yourChannelsCount),
              strings.yourChannels,
              strings.yourChannelsPlaceholder,
              yourChannelsCount < yourChannels.length,
              () => setYourChannelsCount(count => count + 5)
            )
          ) : (
            <div className="flex items-center justify-start w-full shadow-xs">
              <Button
                styleNone
                icon="plus"
                styleNoneIconClassName="text-sm text-copy-primary mr-2"
                styleNoneContent={strings.yourChannelsPlaceholder}
                styleNoneContentClassName="text-sm text-copy-primary"
                onClick={handleCreateChannel}
                className="hover:bg-hover-highlight duration-100 w-full h-14"
              />
            </div>
          )}
          {followingChannels.length !== 0 &&
            leftPanelChannelList(
              followingChannels.slice(0, followingChannelsCount),
              strings.followingChannels,
              strings.followingChannelsPlaceholder,
              null,
              followingChannelsCount < followingChannels.length,
              () => setFollowingChannelsCount(count => count + 5)
            )}
          {leftPanelChannelList(
            recommendedChannels.slice(0, recommendedChannelsCount),
            strings.recommendedChannels,
            null,
            null,
            recommendedChannelsCount < recommendedChannels.length,
            () => setRecommendedChannelsCount(count => count + 5)
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
