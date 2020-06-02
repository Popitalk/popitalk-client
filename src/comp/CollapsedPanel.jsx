import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import ChannelsList from "./InfoCardLists/ChannelsList";

function CollapsedPanel({
  channels,
  selected,
  handleSelect,
  handleCollapse,
  selectedPage,
  updateSelectedPage
}) {
  return (
    <div className="bg-primaryBackground p-1 flex flex-col items-center w-24 h-full">
      <button
        className="p-5 w-full flex items-center flex-col"
        onClick={handleCollapse}
      >
        <FontAwesomeIcon
          icon="bars"
          className="cursor-pointer text-secondaryText hover:text-highlightText fa-2x"
        />
      </button>
      <button
        className={`${
          selectedPage === "friends"
            ? "text-highlightText"
            : "text-secondaryButtonText"
        } p-5 w-full flex items-center flex-col`}
        onClick={() => updateSelectedPage("friends")}
      >
        <FontAwesomeIcon icon="user-friends" className="fa-2x" />
        <h3>friends</h3>
      </button>
      <button
        className={`${
          selectedPage === "channels"
            ? "text-highlightText"
            : "text-secondaryButtonText"
        } p-5 w-full flex items-center flex-col`}
        onClick={() => updateSelectedPage("channels")}
      >
        <FontAwesomeIcon icon="tv" className="fa-2x" />
        <h3>channels</h3>
      </button>
      <div className="flex flex-col w-full items-center mr-3">
        <ChannelsList
          channels={channels}
          selected={selected}
          handleSelect={handleSelect}
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
