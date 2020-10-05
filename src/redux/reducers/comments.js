import { createReducer } from "@reduxjs/toolkit";
import {
  logout,
  deleteAccount,
  getChannel,
  addComment,
  deleteComment,
  getComments,
  likeComment,
  unlikeComment,
  flushPosts,
  incrementCommentCountWs
} from "../actions";

const initialState = {};

const R_commentsInit = (state, { payload }) => {
  return {
    ...state,
    ...payload.comments
  };
};

const R_addComment = (state, { payload }) => {
  const { canComment, ...comment } = payload;
  if (!state[payload.postId]) {
    state[payload.postId] = [];
  }
  state[payload.postId].push(comment);
};

const R_replaceComments = (state, { payload }) => {
  state[payload.postId] = payload.comments;
};

const R_deleteComment = (state, { payload }) => {
  if (state[payload.postId]) {
    state[payload.postId] = state[payload.postId].filter(
      comment => comment.id !== payload.id
    );
  }
};

const R_likeComment = (state, { payload }) => {
  const indexOfComment = state[payload.postId].findIndex(
    comment => comment.id === payload.commentId
  );

  if (indexOfComment !== -1) {
    state[payload.postId][indexOfComment].likeCount =
      Number(state[payload.postId][indexOfComment].likeCount) + 1;

    if (payload.userId === payload.ownId) {
      state[payload.postId][indexOfComment].liked = true;
    }
  }
};
const R_unlikeComment = (state, { payload }) => {
  const indexOfComment = state[payload.postId].findIndex(
    comment => comment.id === payload.commentId
  );

  if (indexOfComment !== -1) {
    state[payload.postId][indexOfComment].likeCount =
      Number(state[payload.postId][indexOfComment].likeCount) - 1;

    if (payload.userId === payload.ownId) {
      state[payload.postId][indexOfComment].liked = false;
    }
  }
};
const R_flushComments = (state, { payload }) => {
  const allPostIds = Object.keys(state);

  allPostIds.forEach(postId => {
    state[postId] = state[postId].slice(-3);
  });
};

const R_resetState = () => initialState;

export default createReducer(initialState, {
  [getChannel.fulfilled]: R_commentsInit,
  [addComment.fulfilled]: R_addComment,
  [incrementCommentCountWs]: R_addComment,
  [deleteComment.fulfilled]: R_deleteComment,
  [getComments.fulfilled]: R_replaceComments,
  [likeComment.fulfilled]: R_likeComment,
  [unlikeComment.fulfilled]: R_unlikeComment,
  [flushPosts]: R_flushComments,
  [logout.fulfilled]: R_resetState,
  [deleteAccount.fulfilled]: R_resetState
});
