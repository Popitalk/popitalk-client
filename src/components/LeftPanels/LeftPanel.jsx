import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import FriendsPanel from "./FriendsPanel";
import CollapsedPanel from "./CollapsedPanel";
import ChannelsPanel from "./ChannelsPanel";
import strings from "../../helpers/localization";
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
  handleCollapse,
  handleCreateChannel,
  handleProfile,
  isCollapsed,
  hideLeftPanel,
  updateSelectedPage,
  handleCreateRoom,
  friendsSearchFocus,
  setFriendsSearchFocus,
  numberOfNotifications
}) {
  const { loggedIn } = useSelector(state => state.general);
  const channels = [...yourChannels, ...followingChannels];

  if (!loggedIn) {
    return (
      <div className="relative z-30">
        <div
          className={
            hideLeftPanel === true ? "w-full sm:w-full" : "hidden sm:flex"
          }
        >
          <LeftPanelViewer
            recommendedChannels={recommendedChannels}
            selectedChannel={selected}
            handleSelectChannel={handleSelectChannel}
            selectedPage={selectedPage}
            updateSelectedPage={updateSelectedPage}
            hideLeftPanel={hideLeftPanel}
          />
        </div>
      </div>
    );
  } else if (isCollapsed) {
    return (
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
        setFriendsSearchFocus={setFriendsSearchFocus}
        numberOfNotifications={numberOfNotifications}
        loggedIn={loggedIn}
      />
    );
  } else {
    return (
      <Fragment>
        <div
          className={
            hideLeftPanel === true ? "w-screen sm:w-full" : "hidden sm:flex"
          }
        >
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
              selectedPage={selectedPage}
              updateSelectedPage={updateSelectedPage}
              handleCollapse={handleCollapse}
              setFriendsSearchFocus={setFriendsSearchFocus}
              numberOfNotifications={numberOfNotifications}
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
              updateSelectedPage={updateSelectedPage}
              handleCollapse={handleCollapse}
              handleProfile={handleProfile}
              selectedPage={selectedPage}
              handleCreateRoom={handleCreateRoom}
              friendsSearchFocus={friendsSearchFocus}
              setFriendsSearchFocus={setFriendsSearchFocus}
              numberOfNotifications={numberOfNotifications}
              loggedIn={loggedIn}
            />
          )}
        </div>
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
