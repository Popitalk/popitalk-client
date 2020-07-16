import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard.jsx";

function ChannelCardList({ channelList, isCollapsed, chipSelected }) {
  if (chipSelected) {
    channelList = channelList.filter(type => type.title === chipSelected);
  }
  const currentChannelList = [];
  channelList.forEach(type => currentChannelList.push(...type.channels));
  return (
    <div className="mx-2">
      <div
        className={`grid ${
          isCollapsed ? "grid-cols-4 " : "grid-cols-3 "
        }w-full pb-8`}
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
