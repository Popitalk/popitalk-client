import { createReducer } from "@reduxjs/toolkit";
import {
  login,
  deleteAccount,
  searchChannels,
  setChannelsList
} from "../actions";

const initialState = {
  channelName: null,
  page: null,
  channels: {},
  channelsList: [],
  users: {},
  lastRequestAt: null
};

const R_addSearchedChannels = (state, { payload }) => {
  state.channels = payload.channels;
  // if (state.channelName !== payload.channelName) {
  //   state.channels = payload.channels;
  //   state.users = payload.users;
  // } else if (
  //   state.channelName === payload.channelName &&
  //   state.page < payload.page
  // ) {
  //   state.channels = {
  //     ...state.channels,
  //     ...payload.channels
  //   };
  //   state.users = {
  //     ...state.users,
  //     ...payload.users
  //   };
  // }
  // state.channelName = payload.channelName;
  // state.page = payload.page;
  // state.lastRequestAt = new Date().toString();
};

const R_resetState = () => initialState;

const R_setChannelsList = (state, { payload }) => {
  state.channelsList = payload;
};

const R_ChannelsListInit = state => {
  state.channelsList = [];
};

export default createReducer(initialState, {
  [searchChannels.fulfilled]: R_addSearchedChannels,
  [deleteAccount.fulfilled]: R_resetState,
  [setChannelsList]: R_setChannelsList,
  [login.fulfilled]: R_ChannelsListInit
});
