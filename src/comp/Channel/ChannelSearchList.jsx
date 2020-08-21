import React from "react";
import PropTypes from "prop-types";
import ChannelSearchCard from "./ChannelSearchCard.jsx";
import strings from "../../helpers/localization.js";

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
            <div className="flex items-center justify-center text-secondaryText w-full h-32">
              {strings.nothingToShow}
            </div>
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
