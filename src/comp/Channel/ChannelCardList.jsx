import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard.jsx";

function ChannelCardList({ channelList, isCollapsed }) {
  return (
    <div className="mx-2">
      <div
        className={`grid ${
          isCollapsed ? "grid-cols-4 " : "grid-cols-3 "
        }w-full pb-8`}
      >
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
