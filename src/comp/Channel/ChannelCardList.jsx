import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard.jsx";

function ChannelCardList({ channelList, isCollapsed, tabSelected, isLoading }) {
  const currentChannelList = [];
  channelList.forEach(type => {
    if (type.title === tabSelected.slice(2)) {
      currentChannelList.push(...type.channels);
    }
  });

  return (
    <div className="mx-4">
      {/* For loading: Placeholder */}
      {isLoading === true ? (
        <div
          className={`grid grid-cols-1 w-full my-8 ${
            isCollapsed
              ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          <ChannelCard isLoading />
          <ChannelCard isLoading />
          <ChannelCard isLoading />
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 w-full ${
            isCollapsed
              ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {currentChannelList.map(channel => (
            <ChannelCard key={channel.id} {...channel} />
          ))}
        </div>
      )}
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
