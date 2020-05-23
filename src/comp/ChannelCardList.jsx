import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard.jsx";

function ChannelCardList({ header, channelList }) {
  return (
    <div>
      <p className="text-base font-bold py-4">{header}</p>
      <div className="grid grid-cols-4 gap-4">
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
