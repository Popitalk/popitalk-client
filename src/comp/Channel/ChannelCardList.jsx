import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard.jsx";

function ChannelCardList({ channelList, isCollapsed, tabSelected }) {
  const currentChannelList = [];
  channelList.forEach(type => currentChannelList.push(...type.channels));

  return (
    <div className="mx-4">
      <div
        className={`grid w-full ${
          isCollapsed ? "grid-cols-4 " : "grid-cols-3 "
        }`}
      >
        {currentChannelList.map(channel => (
          <ChannelCard key={channel.id} {...channel} />
        ))}
      </div>
    </div>
  );
}

ChannelCardList.propTypes = {
  channelList: PropTypes.array
};

ChannelCardList.defaultProps = {
  channelList: []
};

export default ChannelCardList;
