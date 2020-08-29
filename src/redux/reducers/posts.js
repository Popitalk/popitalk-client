import { createReducer } from "@reduxjs/toolkit";
import _ from "lodash";
import {
  logout,
  deleteAccount,
  getChannel,
  addChannel,
  addChannelWs,
  addPost,
  addPostWs,
  likePost,
  likePostWs,
  unlikePost,
  unlikePostWs,
  deletePost,
  deletePostWs,
  addComment,
  deleteComment,
  incrementCommentCountWs,
  decrementCommentCountWs,
  flushPosts,
  getPosts
} from "../actions";

const initialState = {};

const R_postsInit = (state, { payload }) => {
  if (payload.channel?.type === "channel") {
    if (!state[payload.channelId]) {
      state[payload.channelId] = [];
    }

    if (payload.posts && state[payload.channelId].length < 7) {
      state[payload.channelId] = _.uniqBy(
        [...payload.posts, ...state[payload.channelId]],
        "id"
      );
    }
  }
};

const R_addPost = (state, { payload }) => {
  if (!state[payload.channelId]) {
    state[payload.channelId] = [payload];
  } else {
    state[payload.channelId] = [payload, ...state[payload.channelId]];

    // if (state[payload.channelId].length === 7) {
    //   state[payload.channelId] = state[payload.channelId].slice(-7);
    // }
  }
};
const R_addPosts = (state, { payload }) => {
  if (!state[payload.channelId]) {
    state[payload.channelId] = payload.posts;
  } else {
    state[payload.channelId].push(...payload.posts);
  }
};

const R_deletePost = (state, { payload }) => {
  if (state[payload.channelId]) {
    state[payload.channelId] = state[payload.channelId].filter(
      post => post.id !== payload.id
    );
  }
};
const R_flushPosts = (state, { payload }) => {
  if (state[payload.channelId]) {
    state[payload.channelId] = state[payload.channelId].slice(0, 7);
  }
};

const R_likePost = (state, { payload }) => {
  if (state[payload.channelId]) {
    const indexOfPost = state[payload.channelId].findIndex(post => {
      return post.id === payload.postId;
    });

    if (indexOfPost !== -1) {
      state[payload.channelId][indexOfPost].likeCount =
        Number(state[payload.channelId][indexOfPost].likeCount) + 1;

      if (payload.userId === payload.ownId) {
        state[payload.channelId][indexOfPost].liked = true;
      }
    }
  }
};
const R_unlikePost = (state, { payload }) => {
  if (state[payload.channelId]) {
    const indexOfPost = state[payload.channelId].findIndex(
      post => post.id === payload.postId
    );

    if (indexOfPost !== -1) {
      state[payload.channelId][indexOfPost].likeCount =
        Number(state[payload.channelId][indexOfPost].likeCount) - 1;

      if (payload.userId === payload.ownId) {
        state[payload.channelId][indexOfPost].liked = false;
      }
    }
  }
};
const R_incrementChannelCommentCount = (state, { payload }) => {
  if (state[payload.channelId]) {
    const indexOfPost = state[payload.channelId].findIndex(
      post => post.id === payload.postId
    );

    if (indexOfPost !== -1) {
      state[payload.channelId][indexOfPost].commentCount =
        Number(state[payload.channelId][indexOfPost].commentCount) + 1;
    }
  }
};

const R_decrementChannelCommentCount = (state, { payload }) => {
  if (state[payload.channelId]) {
    const indexOfPost = state[payload.channelId].findIndex(
      post => post.id === payload.postId
    );

    if (indexOfPost !== -1) {
      state[payload.channelId][indexOfPost].commentCount =
        Number(state[payload.channelId][indexOfPost].commentCount) - 1;
    }
  }
};

const R_addedCommentUpdate = (state, { payload }) => {
  const indexOfPost = state[payload.channelId].findIndex(
    post => post.id === payload.postId
  );

  if (indexOfPost !== -1) {
    if (!state[payload.channelId][indexOfPost].firstCommentId) {
      state[payload.channelId][indexOfPost].firstCommentId = payload.id;
    }

    state[payload.channelId][indexOfPost].lastCommentId = payload.id;
    state[payload.channelId][indexOfPost].selfCommentCount =
      payload.selfCommentCount;

    state[payload.channelId][indexOfPost].commentCount =
      Number(state[payload.channelId][indexOfPost].commentCount) + 1;
  }
};

const R_deletedCommentUpdate = (state, { payload }) => {
  const indexOfPost = state[payload.channelId].findIndex(
    post => post.id === payload.postId
  );

  if (indexOfPost !== -1) {
    state[payload.channelId][indexOfPost].firstCommentId =
      payload.firstCommentId;
    state[payload.channelId][indexOfPost].lastCommentId = payload.lastCommentId;
    state[payload.channelId][indexOfPost].selfCommentCount =
      payload.selfCommentCount;
  }
};

const R_resetState = () => initialState;

export default createReducer(initialState, {
  [getChannel.fulfilled]: R_postsInit,
  [addChannel.fulfilled]: R_postsInit,
  [addChannelWs]: R_postsInit,
  [addPost.fulfilled]: R_addPost,
  [addPostWs]: R_addPost,
  [deletePost.fulfilled]: R_deletePost,
  [deletePostWs]: R_deletePost,
  [getPosts.fulfilled]: R_addPosts,
  [flushPosts]: R_flushPosts,
  [likePost.fulfilled]: R_likePost,
  [likePostWs]: R_likePost,
  [unlikePost.fulfilled]: R_unlikePost,
  [unlikePostWs]: R_unlikePost,
  [addComment.fulfilled]: R_addedCommentUpdate,
  [deleteComment.fulfilled]: R_deletedCommentUpdate,
  [incrementCommentCountWs]: R_incrementChannelCommentCount,
  [decrementCommentCountWs]: R_decrementChannelCommentCount,
  [logout.fulfilled]: R_resetState,
  [deleteAccount.fulfilled]: R_resetState
});
