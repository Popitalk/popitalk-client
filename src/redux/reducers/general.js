import { createReducer } from "@reduxjs/toolkit";
import {
  validateSession,
  login,
  logout,
  deleteAccount,
  wsConnect,
  wsDisconnect,
  getTrending
} from "../actions";
import channelDefault from "../../assets/default/channel-default.png";
import userDefault from "../../assets/default/user-default.png";

const initialState = {
  loggedIn: false,
  validatedSession: false,
  siteVersion: "1.1.4",
  defaultAvatar: userDefault,
  defaultIcon: channelDefault,
  groupRoomMemberLimit: 8,
  wsConnected: false,
  heartbeatInterval: null,
  trendingResults: {
    source: "",
    results: [],
    totalResults: 0,
    page: 1
  }
};

const R_login = state => {
  state.loggedIn = true;
  state.validatedSession = true;
};

const R_validatedSession = state => {
  state.validatedSession = true;
};

const R_logout = state => {
  state.loggedIn = false;
};

const R_setTrending = (state, { payload }) => {
  if (!payload) return;

  let results = [];
  if (payload.next) {
    results = [...state.trendingResults.results, ...payload.results];
  } else {
    results = [...payload.results];
  }

  state.trendingResults = {
    source: payload.source,
    results: results,
    totalResults: payload.totalResults,
    page: payload.page ? payload.page : 1
  };
};

export default createReducer(initialState, {
  [validateSession.fulfilled]: R_login,
  [validateSession.rejected]: R_validatedSession,
  [login.fulfilled]: R_login,
  [wsConnect]: (state, { payload }) => {
    state.wsConnected = true;
    state.heartbeatInterval = payload;
  },
  [wsDisconnect]: state => {
    state.wsConnected = false;
    state.heartbeatInterval = null;
  },
  [logout.fulfilled]: R_logout,
  [deleteAccount.fulfilled]: R_logout,
  [getTrending.fulfilled]: R_setTrending
});
