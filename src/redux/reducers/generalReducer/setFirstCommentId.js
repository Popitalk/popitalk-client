const setFirstCommentId = (state, payload) => {
  return {
    ...state,
    posts: {
      ...state.posts,
      [payload.channelId]: state.posts[payload.channelId].map(post =>
        post.id === payload.postId
          ? {
              ...post,
              firstCommentId: payload.firstCommentId
            }
          : post
      )
    }
  };
};

export default setFirstCommentId;
