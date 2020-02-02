import _ from "lodash";

const refreshPosts = (state, payload) => {
  const newChannelPosts = state.posts[payload.channelId]
    ? state.posts[payload.channelId].slice(0, 7)
    : [];
  let newChannelComments = {};

  newChannelPosts.forEach(post => {
    if (state.comments[post.id]) {
      newChannelComments = {
        ...newChannelComments,
        [post.id]: state.comments[post.id].slice(-3)
      };
    }
  });

  return {
    ...state,
    posts: {
      ...state.posts,
      [payload.channelId]: newChannelPosts
    },
    comments: {
      ...state.comments,
      ...newChannelComments
    }
  };
};

export default refreshPosts;
