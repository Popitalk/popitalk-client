import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import RoomIcon from "../Controls/RoomIcon";
import Button from "../Controls/Button";
import useCollapse from "react-collapsed";
import ReactTooltip from "react-tooltip";

function CollapsedPanel({
  rooms,
  channels,
  selected,
  handleSelectRoom,
  handleSelect,
  handleCollapse,
  updateSelectedPage,
  selectedPage,
  isCollapsed
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
    <div className="flex flex-col bg-primaryBackground px-2 items-center w-20 h-full select-none overflow-x-hidden overflow-y-scroll">
      <button
        className="flex py-5 w-full items-center flex-col rounded-full focus:outline-none text-secondaryText hover:text-highlightText transition transform ease-in-out hover:scale-110 duration-100"
        onClick={handleCollapse}
      >
        <FontAwesomeIcon icon="bars" />
      </button>
      {/* CHANNELS */}
      <div className="bg-primaryBackground rounded-xl">
        <ReactTooltip effect="solid" className="tooltip truncate" />
        <Button
          className="flex flex-col h-12 w-20 bg-secondaryBackground shadow-none"
          shape="none"
          background="bgColor"
          selectedColor={isFollowingExpanded ? true : false}
          size="sm"
          // updateSelectedPage here updates which tab of the panel will be open when the panel is expanded.
          {...getTogglePropsFollowing({
            onClick: () => {
              setFollowingExpanded(!isFollowingExpanded);
              updateSelectedPage("channels");
            }
          })}
        >
          Channels
        </Button>
        <section {...getCollapsePropsFollowing()}>
          <div className="flex flex-col w-full items-center">
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
                    hover:scale-110 duration-100 m-1 rounded-circle
                    ${selected === channel.id && "bg-highlightText"}`}
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
      {/* FRIENDS */}
      <div className="bg-primaryBackground rounded-xl mb-4">
        <ReactTooltip effect="solid" className="tooltip truncate" />
        <Button
          className="flex flex-col h-12 w-20 mb-1 bg-secondaryBackground shadow-none"
          shape="none"
          background="bgColor"
          selectedColor={isDiscoverExpanded ? true : false}
          // updateSelectedPage here updates which tab of the panel will be open when the panel is expanded.
          {...getTogglePropsDiscover({
            onClick: () => {
              setDiscoverExpanded(!isDiscoverExpanded);
              updateSelectedPage("friends");
            }
          })}
          size="sm"
        >
          Friends
        </Button>
        <section {...getCollapsePropsDiscover()}>
          <div className="flex flex-col w-full items-center">
            {rooms.map(room => {
              const images = room.members.map(m => m.avatar);
              const name = room.members.map(m => " " + m.username).join();
              const roomIcon = (
                <RoomIcon
                  images={images}
                  self={room.type === "self"}
                  online={room.online}
                  watching={room.watching}
                  notifications={room.notifications}
                  size="lg"
                  tooltip={name}
                  tooltipPlace="right"
                />
              );
              return (
                <div
                  key={room.id}
                  className={`flex-shrink-0 transition transform ease-in-out
                    hover:scale-110 duration-100 m-1 rounded-circle
                    ${selected === room.id && "bg-highlightText"}`}
                  onClick={() => handleSelectRoom(room.id)}
                  role="button"
                >
                  {roomIcon}
                </div>
              );
            })}
          </div>
        </section>
      </div>
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
