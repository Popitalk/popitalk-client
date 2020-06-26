import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import ChannelsList from "../InfoCardLists/ChannelsList";

function CollapsedPanel({
  channels,
  selected,
  handleSelect,
  handleCollapse,
  selectedPage,
  updateSelectedPage
}) {
  return (
    <div className="bg-primaryBackground px-2 flex flex-col items-center w-20 h-full">
      <button
        className="py-5 w-full flex items-center flex-col focus:outline-none"
        onClick={handleCollapse}
      >
        <FontAwesomeIcon
          icon="bars"
          className="cursor-pointer text-secondaryText hover:text-highlightText duration-100 fa-1x transition transform ease-in-out hover:scale-110 duration-100"
        />
      </button>
      <button
        className={`${
          selectedPage === "friends"
            ? "text-highlightText"
            : "text-secondaryButtonText"
        } py-4 w-full flex items-center flex-col hover:text-highlightText duration-100 rounded-xl focus:outline-none transition transform ease-in-out hover:scale-110 duration-100`}
        onClick={() => updateSelectedPage("friends")}
      >
        <FontAwesomeIcon icon="user-friends" className="fa-1x" />
        <h3 className="text-xs p-1">Friends</h3>
      </button>
      <button
        className={`${
          selectedPage === "channels"
            ? "text-highlightText"
            : "text-secondaryButtonText"
        } py-4 w-full flex items-center flex-col hover:text-highlightText duration-100 rounded-xl focus:outline-none transition transform ease-in-out hover:scale-110 duration-100`}
        onClick={() => updateSelectedPage("channels")}
      >
        <FontAwesomeIcon icon="tv" className="fa-1x" />
        <h3 className="text-xs p-1">Channels</h3>
      </button>
      <div className="flex flex-col w-full items-center mr-0">
        <ChannelsList
          channels={channels}
          selected={selected}
          handleSelect={handleSelect}
          fullHeight={true}
        />
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
