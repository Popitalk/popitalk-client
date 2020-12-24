import { createReducer } from "@reduxjs/toolkit";
import { logout, deleteAccount, getDiscoverChannels } from "../actions";

const initialState = {
  channels: {},
  users: {},
  page: 1,
  isNextPage: false,
  lastRequestAt: null
};

const R_addDiscoverChannels = (state, { payload }) => {
  const channelsCount = Object.keys(payload.channels).length;

  state.page += 1;
  state.isNextPage = channelsCount === 30;
  state.lastRequestAt = new Date().toString();

  if (payload.page === 1) {
    state.users = payload.users;
    state.channels = payload.channels;
  } else {
    state.users = { ...state.users, ...payload.users };
    state.channels = { ...state.channels, ...payload.channels };
  }
};

const R_resetState = () => initialState;

export default createReducer(initialState, {
  [getDiscoverChannels.fulfilled]: R_addDiscoverChannels,
  [deleteAccount.fulfilled]: R_resetState
});
