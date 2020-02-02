import _ from "lodash";

const addNewPost = (state, payload) => {
  return {
    ...state,
    posts: {
      ...state.posts,
      [payload.channelId]: state.posts[payload.channelId]
        ? _.uniqBy([payload, ...state.posts[payload.channelId]], "id")
        : payload.posts
    }
  };
};

export default addNewPost;
