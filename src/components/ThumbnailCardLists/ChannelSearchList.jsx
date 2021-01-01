import React from "react";
import PropTypes from "prop-types";
import ChannelSearchCard from "../ThumbnailCards/ChannelSearchCard.jsx";
import strings from "../../helpers/localization.js";

function ChannelSearchList({ channelList }) {
  function mapChannels(channels) {
    let channelSearchCards = [];
    for (let cid in channels) {
      channelSearchCards.push(
        <ChannelSearchCard key={cid} id={cid} {...channels[cid]} />
      );
    }
    return channelSearchCards;
  }
  return (
    <div>
      {Object.keys(channelList).length > 0 ? (
        <div className="grid grid-cols-1 w-full md:gap-y-4 gap-y-12 py-4 mb-12">
          {mapChannels(channelList)}
        </div>
      ) : (
        <div className="flex items-center justify-center text-copy-secondary text-sm w-full h-32">
          {strings.nothingToShow}
        </div>
      )}
    </div>
  );
}

ChannelSearchList.propTypes = {
  channelList: PropTypes.object
};

ChannelSearchList.defaultProps = {
  channelList: {}
};

export default ChannelSearchList;
