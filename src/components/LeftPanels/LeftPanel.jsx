import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import useSound from "use-sound";
import { useInterval } from "react-use";

import FriendsPanel from "./FriendsPanel";
import CollapsedPanel from "./CollapsedPanel";
import ChannelsPanel from "./ChannelsPanel";
import notificationSound from "../../assets/sounds/pop-sound.mp3";
import strings from "../../helpers/localization";
import LeftPanelViewer from "./LeftPanelViewer";
import Button from "../Controls/Button";

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
  updateSelectedPage,
  handleCreateRoom,
  friendsSearchFocus,
  setFriendsSearchFocus,
  numberOfNotifications
}) {
  const { loggedIn } = useSelector(state => state.general);

  const channels = [...yourChannels, ...followingChannels];
  const [isFavicon, setFavicon] = useState();
  const [play] = useSound(notificationSound);
  const [isRunning, setIsRunning] = useState(true);
  const [checked, setChecked] = useState(false);
  const [viewersPanelExpanded, setViewersPanelExpanded] = useState(false);

  useInterval(
    // Sound notifications are triggered.
    () => {
      if (checked) {
        play();
        setIsRunning(false);
      }
    },
    isRunning ? 50 : null
  );

  useEffect(() => {
    // Favicon changes state depending on notifications.
    if (numberOfNotifications !== 0) {
      setFavicon("https://i.ibb.co/JkKgxv9/favicon-notification.png");
      setChecked(true);
    } else {
      setFavicon("https://i.ibb.co/wL0BpLN/favicon.png");
      setChecked(false);
      setIsRunning(true);
    }
  }, [isCollapsed, numberOfNotifications, selectedPage]);

  useEffect(() => {
    setViewersPanelExpanded(false);
  }, [handleSelectChannel, selected]);

  if (!loggedIn) {
    return (
      <div className="z-30">
        <Button
          hoverable
          styleNone
          icon={viewersPanelExpanded === true ? "times" : "bars"}
          styleNoneIconClassName="text-xl"
          className="absolute top-0 left-0 ml-4 z-30 md:hidden flex items-center justify-center text-copy-secondary w-12 h-12 hover:text-copy-highlight"
          analyticsString="Collapse Button: PanelHeader"
          onClick={() => setViewersPanelExpanded(!viewersPanelExpanded)}
        />
        <div
          className={
            viewersPanelExpanded === true
              ? "w-screen sm:w-full"
              : "hidden md:flex"
          }
        >
          <LeftPanelViewer
            recommendedChannels={recommendedChannels}
            selectedChannel={selected}
            handleSelectChannel={handleSelectChannel}
            selectedPage={selectedPage}
            updateSelectedPage={updateSelectedPage}
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
        <Button
          hoverable
          styleNone
          icon={viewersPanelExpanded === true ? "times" : "bars"}
          styleNoneIconClassName="text-xl"
          className="absolute top-0 left-0 ml-4 z-30 md:hidden flex items-center justify-center text-copy-secondary w-12 h-12 hover:text-copy-highlight"
          analyticsString="Collapse Button: PanelHeader"
          onClick={() => setViewersPanelExpanded(!viewersPanelExpanded)}
        />
        <div
          className={
            viewersPanelExpanded === true
              ? "w-screen sm:w-full"
              : "hidden md:flex"
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
          <link rel="icon" type="image/png" href={isFavicon} target="_blank" />
          <meta name="keywords" content={strings.mainKeywords} />
        </Helmet>
      </Fragment>
    );
  }
}
