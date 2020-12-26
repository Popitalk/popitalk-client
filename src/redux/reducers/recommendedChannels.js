import { createReducer } from "@reduxjs/toolkit";
import { getRecommendedChannels } from "../actions";

const initialState = {
  channels: {},
  users: {},
  lastRequestAt: null
};

const R_addRecommendedChannels = (state, { payload }) => {
  state.users = payload.users;
  state.channels = payload.channels;
};

export default createReducer(initialState, {
  [getRecommendedChannels.fulfilled]: R_addRecommendedChannels
});
