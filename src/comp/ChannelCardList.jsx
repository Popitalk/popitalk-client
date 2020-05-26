import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard.jsx";

function ChannelCardList({ header, channelList }) {
  // TODO: Use Redux to get "panelOpen" variable
  // from ChannelsPanel.jsx and set amount of videos shown
  // based on that as well. Eg. panelOpen?"md:grid-cols-2":""
  return (
    <div className="mx-2">
      <p className="text-base font-bold py-4">{header}</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channelList.map(channel => (
          <ChannelCard cardWidthClass="w-auto" key={channel.id} {...channel} />
        ))}
      </div>
    </div>
  );
}

ChannelCardList.propTypes = {
  header: PropTypes.string.isRequired,
  channelList: PropTypes.array
};

ChannelCardList.defaultProps = {
  channelList: []
};

export default ChannelCardList;
