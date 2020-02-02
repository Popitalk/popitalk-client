import _ from "lodash";

const addComments = (state, payload) => {
  return {
    ...state,
    comments: {
      ...state.comments,
      [payload.postId]: state.comments[payload.postId]
        ? _.uniqBy(
            [...payload.comments, ...state.comments[payload.postId]],
            "id"
          )
        : payload.comments
    }
  };
};

export default addComments;
