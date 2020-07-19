import React, { Fragment } from "react";
import FriendsPanel from "./FriendsPanel";
import CollapsedPanel from "./CollapsedPanel";
import ChannelsPanel from "./ChannelsPanel";

export default function LeftPanel({
  yourChannels,
  followingChannels,
  userSearchResults,
  userSearchStatus,
  blocks,
  handleSearch,
  roomsResults,
  selected,
  handleSelectChannel,
  handleSelectRoom,
  selectedPage,
  handleCollapse,
  handleCreateChannel,
  handleProfile,
  isCollapsed,
  updateSelectedPage,
  handleCreateRoom,
  friendsSearchFocus,
  setFriendsSearchFocus
}) {
  const channels = [...yourChannels, ...followingChannels];

  return (
    <Fragment>
      <div
        className={`${
          isCollapsed ? "hidden" : ""
        } w-full md:w-auto shadow-md h-full`}
      >
        {selectedPage === "channels" ? (
          <ChannelsPanel
            yourChannels={yourChannels}
            followingChannels={followingChannels}
            friends={roomsResults}
            selectedChannel={selected}
            handleSelectChannel={handleSelectChannel}
            handleSelectRoom={handleSelectRoom}
            handleCreateChannel={handleCreateChannel}
            selectedPage={selectedPage}
            updateSelectedPage={updateSelectedPage}
            handleCollapse={handleCollapse}
            setFriendsSearchFocus={setFriendsSearchFocus}
          />
        ) : (
          <FriendsPanel
            userSearchResults={userSearchResults}
            userSearchStatus={userSearchStatus}
            blocks={blocks}
            handleSearch={handleSearch}
            initialRooms={roomsResults}
            selectedRoom={selected}
            handleSelectRoom={handleSelectRoom}
            updateSelectedPage={updateSelectedPage}
            handleCollapse={handleCollapse}
            handleProfile={handleProfile}
            selectedPage={selectedPage}
            handleCreateRoom={handleCreateRoom}
            friendsSearchFocus={friendsSearchFocus}
            setFriendsSearchFocus={setFriendsSearchFocus}
          />
        )}
      </div>
      <div className={`block ${isCollapsed ? "md:block" : "hidden"} h-full`}>
        <CollapsedPanel
          rooms={roomsResults}
          channels={channels}
          selected={selected}
          handleSelectRoom={handleSelectRoom}
          handleSelect={handleSelectChannel}
          handleCollapse={handleCollapse}
          isCollapsed={isCollapsed}
          selectedPage={selectedPage}
          updateSelectedPage={updateSelectedPage}
        />
      </div>
    </Fragment>
  );
}
