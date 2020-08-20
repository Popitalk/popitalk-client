import React from "react";
import PropTypes from "prop-types";
import ChannelSearchCard from "./ChannelSearchCard.jsx";

function ChannelSearchList({ channelList }) {
  return (
    <div className="mx-4">
      {channelList !== [] ? (
        <div>
          {channelList.length !== 0 ? (
            <div>
              {channelList.map(channel => (
                <ChannelSearchCard key={channel.id} {...channel} />
              ))}
            </div>
          ) : (
            <div>Not found Component (you know the sad face thing)</div>
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

ChannelSearchList.propTypes = {
  channelList: PropTypes.array
};

ChannelSearchList.defaultProps = {
  channelList: []
};

export default ChannelSearchList;
