import React from "react";
import ChannelsList from "../InfoCardLists/ChannelsList";
import Button from "../Controls/Button";
import MiniFriendsList from "../MiniFriendsList";
import PanelHeader from "./PanelHeader";
import ReactTooltip from "react-tooltip";
import "./Tooltip.css";

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
  setFriendsSearchFocus
}) {
  return (
    <div className="flex flex-col w-84 h-full bg-primaryBackground select-none">
      <PanelHeader
        handleCollapse={handleCollapse}
        updateSelectedPage={updateSelectedPage}
        selectedPage={selectedPage}
      />
      <div className="flex-col h-full overflow-y-scroll">
        <MiniFriendsList
          friends={friends}
          handleSelectRoom={handleSelectRoom}
          handleFindFriends={() => {
            setFriendsSearchFocus(true);
            updateSelectedPage("friends");
          }}
        />
        <div className="flex flex-col items-start px-2 bg-primaryBackground sm:mt-4">
          <div className="flex items-center mb-4">
            <h4 className="mx-2 text-md font-semibold text-secondaryText">
              Your channels
            </h4>
            <Button
              size="sm"
              icon="plus"
              background="primaryButton"
              onClickEvent={handleCreateChannel}
              analyticsString="Create Channel Button: ChannelsPanel"
              className="hover:scale-110"
              tooltip="Create"
            />
          </div>
          <ChannelsList
            channels={yourChannels}
            selected={selectedChannel}
            handleSelect={handleSelectChannel}
            fullHeight={true}
            emptyMessage="Create your own public Channel!"
          />
          <h4 className="my-4 mx-2 text-md font-semibold text-secondaryText">
            Following
          </h4>
          <ChannelsList
            channels={followingChannels}
            selected={selectedChannel}
            handleSelect={handleSelectChannel}
            fullHeight={true}
            emptyMessage="Discover and Follow Channels!"
          />
        </div>
      </div>
      <ReactTooltip effect="solid" className="tooltip truncate" />
    </div>
  );
}
