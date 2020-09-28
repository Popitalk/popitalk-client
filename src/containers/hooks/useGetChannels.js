import { useEffect, useState } from "react";

export default function useGetChannels({
  channelIds,
  channels,
  defaultIcon,
  ownId
}) {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const allChannelIds = Object.keys(channels);
    const discoverChannels = [];
    const trendingChannels = [];
    const followingChannels = [];
    // Adds channels to "following"
    channelIds
      .map(channelId => ({
        id: channelId,
        ...channels[channelId],
        icon: channels[channelId].icon || defaultIcon
      }))
      .forEach(channel => {
        if (
          channel.ownerId !== ownId &&
          channel.owner_id !== ownId &&
          channel.members
        ) {
          if (channel.members.includes(ownId)) {
            followingChannels.push(channel);
          }
        }
      });
    // Adds channels to "trending" and "discover"
    allChannelIds
      .map(channelId => {
        return {
          id: channelId,
          ...channels[channelId],
          icon: channels[channelId].icon || defaultIcon
        };
      })
      .forEach(channel => {
        // Replace these conditions when channels are returned from the server
        if (channel.type === "channel") {
          if (channel.speciality === "discover") {
            discoverChannels.push(channel);
          } else if (channel.speciality === "trending") {
            trendingChannels.push(channel);
          }
        }
      });
    setChannelList([
      { title: "Following", channels: followingChannels },
      { title: "Discover", channels: discoverChannels },
      { title: "Trending", channels: trendingChannels }
    ]);
  }, [channelIds, channels, defaultIcon, ownId]);
  return channelList;
}
