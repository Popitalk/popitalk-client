import { useEffect, useState } from "react";
import {
  useSelectTrendingChannels,
  useSelectDiscoverChannels
} from "../selectors/selectChannels";

export default function useGetChannels({
  channelIds,
  channels,
  defaultIcon,
  ownId
}) {
  const trendingChannels = useSelectTrendingChannels();
  const discoverChannels = useSelectDiscoverChannels();
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const followingChannels = [];
    // Adds channels to "following"
    channelIds
      .map(channelId => {
        return {
          id: channelId,
          ...channels[channelId],
          icon: channels[channelId].icon || defaultIcon
        };
      })
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
    setChannelList([
      { title: "Following", channels: { channels: followingChannels } }
    ]);
  }, [channelIds, channels, defaultIcon, ownId]);
  return [
    ...channelList,
    { title: "Trending", channels: trendingChannels },
    { title: "Discover", channels: discoverChannels }
  ];
}
