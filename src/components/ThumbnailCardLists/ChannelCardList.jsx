import React from "react";
import PropTypes from "prop-types";
import ChannelCard from "../ThumbnailCards/ChannelCard";
import strings from "../../localization/strings";
import Button from "../Controls/Button";

function ChannelCardList({ channelList, isCollapsed, onClick, isLoading }) {
  if (!channelList || channelList.length === 0) {
    return (
      <div className="flex flex-col h-84 space-y-4 w-full items-center justify-center">
        <p className="text-sm text-copy-secondary">
          {strings.followingChannelsPlaceholder}
        </p>
        <Button actionButton size="md" onClick={onClick}>
          {strings.discoverChannels}
        </Button>
      </div>
    );
  }
  return (
    <div
      className={`grid grid-cols-1 w-full gap-3 gap-y-6 ${
        isCollapsed
          ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
