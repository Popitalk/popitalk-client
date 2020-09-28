import { useSelector } from "react-redux";

export function useSelectChannel(channelId) {
  return useSelector(state => state.channels.channels[channelId]);
}

export function useSelectChannels() {
  return useSelector(state => state.channels.channels);
}
export function useSelectChannelInitialScroll(channelId) {
  return useSelector(state => {
    return state.channels.channels[channelId].initialScroll || "bottom";
  });
}
export function useSelectChannelFollowerCount(channelId) {
  return useSelector(
    state => state.channels.channels[channelId]?.members?.length
  );
}
export function useSelectTrendingChannels() {
  return useSelector(state => state.channels.trendingChannels);
}
export function useSelectDiscoverChannels() {
  return useSelector(state => state.channels.discoverChannels);
}
