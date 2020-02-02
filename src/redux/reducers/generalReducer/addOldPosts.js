import _ from "lodash";

const addOldPosts = (state, payload) => {
  return {
    ...state,
    posts: {
      ...state.posts,
      [payload.channelId]: state.posts[payload.channelId]
        ? _.uniqBy([...state.posts[payload.channelId], ...payload.posts], "id")
        : payload.posts
    },
    comments: {
      ...state.comments,
      ...payload.comments
    }
  };
};

export default addOldPosts;
