import { GENERAL_REFRESH_POSTS } from "../../../helpers/constants";

const refreshPosts = channelId => ({
  type: GENERAL_REFRESH_POSTS,
  payload: { channelId }
});

export default refreshPosts;
