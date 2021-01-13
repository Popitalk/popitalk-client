import { createReducer } from "@reduxjs/toolkit";
import {
  getRecommendedChannelsPanel,
  getRecommendedChannelsTabs
} from "../actions";

const initialState = {
  panel: {
    channels: {},
    users: {},
    lastRequestAt: null
  },
  tabs: {
    channels: {},
    users: {},
    lastRequestAt: null
  }
};

const R_addRecommendedChannelsPanel = (state, { payload }) => {
  state.panel.users = payload.users;
  state.panel.channels = payload.channels;
};

const R_addRecommendedChannelsTabs = (state, { payload }) => {
  state.tabs.users = payload.users;
  state.tabs.channels = payload.channels;
};

export default createReducer(initialState, {
  [getRecommendedChannelsPanel.fulfilled]: R_addRecommendedChannelsPanel,
  [getRecommendedChannelsTabs.fulfilled]: R_addRecommendedChannelsTabs
});
