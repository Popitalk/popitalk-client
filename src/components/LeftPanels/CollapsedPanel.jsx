import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RoomIcon from "../Controls/RoomIcon";
import Button from "../Controls/Button";
import useCollapse from "react-collapsed";
import strings from "../../localization/strings";
import ReactTooltip from "react-tooltip";
import { channelHasNewMessage } from "../../util/channelHasNewMessage";
function CollapsedPanel({
  rooms,
  channels,
  selected,
  handleSelectRoom,
  handleSelect,
  handleCollapse,
  updateSelectedPage,
  selectedPage,
  isCollapsed,
  handleFindFriends,
  setFriendsSearchFocus,
  numberOfNotifications,
  loggedIn
}) {
  // States to control whether the channels and friends lists are expanded in the collapsed panel.
  const [isFollowingExpanded, setFollowingExpanded] = useState(false);
  const [isDiscoverExpanded, setDiscoverExpanded] = useState(false);
  // Extracts properties from react-collapsed library for both buttons.
  const {
    getCollapseProps: getCollapsePropsFollowing,
    getToggleProps: getTogglePropsFollowing
  } = useCollapse({ isExpanded: isFollowingExpanded });
  const {
    getCollapseProps: getCollapsePropsDiscover,
    getToggleProps: getTogglePropsDiscover
  } = useCollapse({ isExpanded: isDiscoverExpanded });
  // This useEffect controls which list will be open when the panel is collapsed.
  useEffect(() => {
    if (isCollapsed) {
      if (selectedPage === "channels") {
        setFollowingExpanded(true);
        setDiscoverExpanded(false);
      } else if (selectedPage === "friends") {
        setFollowingExpanded(false);
        setDiscoverExpanded(true);
      }
    }
  }, [isCollapsed, setFollowingExpanded, setDiscoverExpanded, selectedPage]);
  return (
    <div className="hidden sm:flex flex-col bg-background-primary px-2 items-center w-20 h-full select-none overflow-x-hidden">
      <div className="flex-col h-full overflow-y-scroll">
        {/* == CHANNELS == */}
        <div className="bg-background-primary rounded-xl">
          <Button
            styleNone
            className={`flex items-center justify-center h-12 w-20 shadow-none hover:bg-hover-highlight ${
              isFollowingExpanded
                ? "bg-background-primary"
                : "bg-background-secondary"
            }`}
            icon="globe-americas"
            styleNoneIconClassName={`text-lg ${
              isFollowingExpanded
                ? "text-copy-highlight"
                : "text-copy-secondary"
            }`}
            analyticsString="Channels Collapse Button: CollapsedPanel"
            // updateSelectedPage here updates which tab of the panel will be open when the panel is expanded.
            {...getTogglePropsFollowing({
              onClick: () => {
                setFollowingExpanded(!isFollowingExpanded);
                updateSelectedPage("channels");
              }
            })}
          />
          <section {...getCollapsePropsFollowing()}>
            <div className="flex flex-col w-full items-center my-2">
              {channels.map(channel => {
                const roomIcon = (
                  <RoomIcon
                    ids={[channel.id]}
                    images={[channel.icon]}
                    watching={channel.watching}
                    size="lg"
                    tooltip={channel.name}
                    tooltipPlace="right"
                  />
                );
                return (
                  <div
                    key={channel.id}
                    className={`flex-shrink-0 transition transform ease-in-out
                      hover:scale-110 duration-100 m-1 rounded-circle p-px
                      ${selected === channel.id && "bg-gradient-r-button"}`}
                    onClick={() => handleSelect(channel.id)}
                    role="button"
                  >
                    {roomIcon}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        {/* == FRIENDS == */}
        <div className="bg-background-primary rounded-xl mb-4">
          <Button
            styleNone
            className={`flex items-center justify-center h-12 w-20 shadow-none hover:bg-hover-highlight ${
              isDiscoverExpanded
                ? "bg-background-primary"
                : "bg-background-secondary"
            }`}
            icon="paper-plane"
            styleNoneIconClassName={`text-lg ${
              isDiscoverExpanded ? "text-copy-highlight" : "text-copy-secondary"
            }`}
            analyticsString="Friends Expand Button: CollapsedPanel"
            // updateSelectedPage here updates which tab of the panel will be open when the panel is expanded.
            {...getTogglePropsDiscover({
              onClick: () => {
                setDiscoverExpanded(!isDiscoverExpanded);
                updateSelectedPage("friends");
              }
            })}
          >
            <div className="flex">
              {numberOfNotifications !== 0 && (
                <span className="flex bg-gradient-r-cancel rounded-full w-2 h-2 animate-bounce ml-1">
                  {/* {numberOfNotifications} */}
                </span>
              )}
            </div>
          </Button>
          <section {...getCollapsePropsDiscover()}>
            <div className="flex flex-col w-full items-center my-2">
              {rooms.map(room => {
                const images = room.members.map(m => m.avatar);
                const name = room.members.map(m => " " + m.username).join();
                const roomIcon = (
                  <RoomIcon
                    images={images}
                    self={room.type === "self"}
                    online={room.online}
                    watching={room.watching}
                    notifications={channelHasNewMessage(room)}
                    size="lg"
                    tooltip={name}
                    tooltipPlace="right"
                  />
                );
                return (
                  <div
                    key={room.id}
                    className={`flex-shrink-0 transition transform ease-in-out
                      hover:scale-110 duration-100 m-1 rounded-circle p-px
                      ${selected === room.id && "bg-gradient-r-button"}`}
                    onClick={() => handleSelectRoom(room.id)}
                    role="button"
                  >
                    {roomIcon}
                  </div>
                );
              })}
              {loggedIn && (
                <div className="py-2">
                  <Button
                    actionButton
                    icon="user-plus"
                    size="lg"
                    background="primary"
                    className="hover:scale-110"
                    tooltip={strings.addFriendsButton}
                    onClick={handleCollapse}
                    analyticsString="Search Friends Button: CollapsedPanel"
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
      <ReactTooltip
        effect="solid"
        backgroundColor="#F2F2F2"
        textColor="black"
        className="shadow-md rounded-md py-1 px-3"
        arrowColor="transparent"
      />
    </div>
  );
}

CollapsedPanel.propTypes = {
  channels: PropTypes.array
};
CollapsedPanel.defaultProps = {
  channels: []
};
export default CollapsedPanel;
