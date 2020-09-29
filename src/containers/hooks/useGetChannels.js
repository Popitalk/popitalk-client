import { useSelector } from "react-redux";

export default function useGetChannels() {
  const followedChannels = useSelector(state => {
    return state.followingChannels.channels;
  });
  const trendingChannels = useSelector(state => {
    return state.trendingChannels.channels;
  });
  const discoverChannels = useSelector(state => {
    return state.discoverChannels.channels;
  });

  return [
    { title: "Following", channels: followedChannels },
    { title: "Discover", channels: discoverChannels },
    { title: "Trending", channels: trendingChannels }
  ];
}
