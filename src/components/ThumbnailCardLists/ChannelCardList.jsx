import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "../ThumbnailCards/ChannelCard";

function ChannelCardList({ channelList, isCollapsed, tabSelected, isLoading }) {
  return (
    <div
      className={`grid grid-cols-1 w-full gap-3 gap-y-6 ${
        isCollapsed
          ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      }`}
    >
      {channelList.map(channel => {
        return <ChannelCard key={channel.id} {...channel} />;
      })}
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
