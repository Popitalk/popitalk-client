import { useState, useEffect } from "react";

export function useGetYourandFollowingChannels({
  channelIds,
  channels,
  defaultIcon,
  ownId
}) {
  const [yourChannels, setYourChannels] = useState([]);
  const [followingChannels, setFollowingChannels] = useState([]);
  useEffect(() => {
    let tempFollowingChannels = [];
    let tempYourChannels = [];
    const channelObjects = channelIds.map(channelId => {
      return {
        id: channelId,
        ...channels[channelId],
        icon: channels[channelId].icon || defaultIcon
      };
    });
    channelObjects.forEach(channel => {
      if (channel.ownerId === ownId || channel.owner_id === ownId) {
        tempYourChannels.push(channel);
      } else {
        if (
          channel.ownerId !== ownId &&
          channel.owner_id !== ownId &&
          channel.members
        ) {
          if (channel.members.includes(ownId)) {
            tempFollowingChannels.push(channel);
          }
        }
      }
    });
    setYourChannels(tempYourChannels);
    setFollowingChannels(tempFollowingChannels);
  }, [channelIds, channels, defaultIcon, ownId]);
  return { yourChannels, followingChannels };
}
