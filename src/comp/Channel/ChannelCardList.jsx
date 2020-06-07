import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard.jsx";

function ChannelCardList({ header, channelList }) {
  // TODO: Use Redux to get "panelOpen" variable
  // from ChannelsPanel.jsx and set amount of videos shown
  // based on that as well. Eg. panelOpen?"md:grid-cols-2":""
  return (
    <div className="mx-2">
      <div className="flex flex-wrap w-full">
        {channelList.map(channel => (
          <ChannelCard key={channel.id} {...channel} />
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
