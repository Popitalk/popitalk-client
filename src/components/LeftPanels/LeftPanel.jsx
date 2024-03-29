import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import FriendsPanel from "./FriendsPanel";
import CollapsedPanel from "./CollapsedPanel";
import ChannelsPanel from "./ChannelsPanel";
import LeftPanelViewer from "./LeftPanelViewer";

export default function LeftPanel({
  yourChannels,
  followingChannels,
  recommendedChannels,
  userSearchResults,
  userSearchStatus,
  blocks,
  handleSearch,
  roomsResults,
  selected,
  handleSelectChannel,
  handleSelectRoom,
  selectedPage,
  handleCreateChannel,
  handleProfile,
  isCollapsed,
  handleCreateRoom,
  friendsSearchFocus,
  setFriendsSearchFocus,
  updateSelectedPage,
  openSignUpRequiredModal
}) {
  const { loggedIn } = useSelector(state => state.general);
  const channels = [...yourChannels, ...followingChannels];

  if (!loggedIn) {
    return (
      <LeftPanelViewer
        recommendedChannels={recommendedChannels}
        selectedChannel={selected}
        handleSelectChannel={handleSelectChannel}
        updateSelectedPage={updateSelectedPage}
        selectedPage={selectedPage}
        openSignUpRequiredModal={openSignUpRequiredModal}
      />
    );
  } else if (isCollapsed) {
    return (
      <CollapsedPanel
        rooms={roomsResults}
        channels={channels}
        selected={selected}
        handleSelectRoom={handleSelectRoom}
        handleSelect={handleSelectChannel}
        setFriendsSearchFocus={setFriendsSearchFocus}
        type={selectedPage}
      />
    );
  } else {
    return (
      <>
        <Fragment>
          {selectedPage === "channels" ? (
            <ChannelsPanel
              yourChannels={yourChannels}
              followingChannels={followingChannels}
              recommendedChannels={recommendedChannels}
              friends={roomsResults}
              selectedChannel={selected}
              handleSelectChannel={handleSelectChannel}
              handleSelectRoom={handleSelectRoom}
              handleCreateChannel={handleCreateChannel}
              setFriendsSearchFocus={setFriendsSearchFocus}
              loggedIn={loggedIn}
              updateSelectedPage={updateSelectedPage}
              selectedPage={selectedPage}
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
              handleProfile={handleProfile}
              handleCreateRoom={handleCreateRoom}
              friendsSearchFocus={friendsSearchFocus}
              setFriendsSearchFocus={setFriendsSearchFocus}
              loggedIn={loggedIn}
              updateSelectedPage={updateSelectedPage}
              selectedPage={selectedPage}
            />
          )}
        </Fragment>
      </>
    );
  }
}
