import React from "react";
import ReactTooltip from "react-tooltip";

import ChannelsList from "../InfoCardLists/ChannelsList";
import Button from "../Controls/Button";
import MiniFriendsList from "../MiniFriendsList";
import PanelHeader from "./PanelHeader";
import strings from "../../helpers/localization";
import LeftPanelFooter from "./LeftPanelFooter";
import LeftPanelViewer from "./LeftPanelViewer";

export default function ChannelsPanel({
  yourChannels,
  followingChannels,
  selectedChannel,
  friends,
  handleSelectChannel,
  handleSelectRoom,
  handleCollapse,
  handleCreateChannel,
  updateSelectedPage,
  selectedPage,
  setFriendsSearchFocus,
  numberOfNotifications,
  loggedIn
}) {
  return (
    <div className="flex flex-col w-84 h-full bg-background-primary select-none">
      <PanelHeader
        handleCollapse={handleCollapse}
        updateSelectedPage={updateSelectedPage}
        selectedPage={selectedPage}
        numberOfNotifications={numberOfNotifications}
      />
      {loggedIn ? (
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
          <div className="flex flex-col items-start bg-background-primary">
            <div className="flex items-center mx-4 my-2 space-x-2">
              <h4 className="text-sm font-semibold text-copy-secondary">
                {strings.yourChannels}
              </h4>
              <Button
                actionButton
                size="sm"
                icon="plus"
                background="primaryButton"
                onClick={handleCreateChannel}
                analyticsString="Create Channel Button: ChannelsPanel"
                className="hover:scale-110"
                tooltip={strings.createChannelButton}
              />
            </div>
            <ChannelsList
              channels={yourChannels}
              selected={selectedChannel}
              handleSelect={handleSelectChannel}
              fullHeight={true}
              emptyMessage={strings.yourChannelsPlaceholder}
              isLoading={false}
            />
            <h4 className="mx-4 my-2 text-sm font-semibold text-copy-secondary">
              {strings.followingChannels}
            </h4>
            <ChannelsList
              channels={followingChannels}
              selected={selectedChannel}
              handleSelect={handleSelectChannel}
              fullHeight={true}
              emptyMessage={strings.followingChannelsPlaceholder}
              isLoading={false}
            />
            <div className="flex flex-col justify-between h-full px-6 py-4 mt-24">
              <LeftPanelFooter />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full px-6 py-4">
          <LeftPanelViewer />
          <LeftPanelFooter />
        </div>
      )}
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
