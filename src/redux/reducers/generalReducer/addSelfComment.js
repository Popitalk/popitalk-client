import _ from "lodash";

const addSelfComment = (state, payload) => {
  return {
    ...state,
    comments: {
      ...state.comments,
      [payload.postId]: state.comments[payload.postId]
        ? _.uniqBy([...state.comments[payload.postId], ...[payload]], "id")
        : [payload]
    }
  };
};

export default addSelfComment;
