import React, { Fragment, useState, useEffect } from "react";
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
  const size = useWindowSize();
  const [isCollapsedResponsive, setCollapsedResponsive] = useState();

  useEffect(() => {
    if (size.width <= 1024) {
      setCollapsedResponsive(true);
    } else {
      setCollapsedResponsive(false);
    }
  }, [isCollapsed, selectedPage, size.width]);
  if ((isCollapsed === false) & (isCollapsedResponsive === true)) {
    isCollapsed = true;
  }

  return (
    <Fragment>
      <div
        className={`${
          isCollapsed || isCollapsedResponsive ? "hidden" : ""
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
      <div
        className={`block ${
          isCollapsed || isCollapsedResponsive ? "md:block" : "hidden"
        } h-full`}
      >
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
        />
      </div>
    </Fragment>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
