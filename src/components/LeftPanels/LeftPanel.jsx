import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import FriendsPanel from "./FriendsPanel";
import CollapsedPanel from "./CollapsedPanel";
import ChannelsPanel from "./ChannelsPanel";
import strings from "../../localization/strings";
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
  setFriendsSearchFocus
}) {
  const { loggedIn } = useSelector(state => state.general);
  const channels = [...yourChannels, ...followingChannels];

  if (!loggedIn) {
    return (
      <LeftPanelViewer
        recommendedChannels={recommendedChannels}
        selectedChannel={selected}
        handleSelectChannel={handleSelectChannel}
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
          />
        )}
        <Helmet>
          <meta charSet="UFT-8" />
          <title>{strings.mainTitle}</title>
          <meta name="description" content={strings.mainDescription} />
          <meta name="keywords" content={strings.mainKeywords} />
        </Helmet>
      </Fragment>
    );
  }
}
