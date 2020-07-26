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
    <div className="w-full h-full bg-primaryBackground w-84 xl:w-84 lg:w-84 md:w-84 sm:w-84 select-none overflow-y-scroll">
      <PanelHeader
        handleCollapse={handleCollapse}
        updateSelectedPage={updateSelectedPage}
        selectedPage={selectedPage}
      />
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
            onClick={handleCreateChannel}
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
      <ReactTooltip
        effect="solid"
        place="bottom"
        className="tooltip truncate"
      />
      {/* <div className="sm:mt-10">
        <h4 className="my-4 mx-2 text-md font-semibold text-secondaryText">
          Suggested
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-1">
          <div className="flex justify-center py-2 px-2">
            <SuggestionCard
              id={123}
              name="Thelmo Society"
              icon="https://i.imgur.com/xCGu56D.jpg"
              videoStatus="playing"
              videoTitle="Video Title"
              videoSource="youtube"
              videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
              activeViewers="2,000"
            />
          </div>
          <div className="flex justify-center py-16 px-2">
            <SuggestionCard
              id={123}
              name="Thelmo Society"
              icon="https://i.imgur.com/xCGu56D.jpg"
              videoStatus="paused"
              videoTitle="Video Title"
              videoSource="youtube"
              videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
              activeViewers="2,000"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
