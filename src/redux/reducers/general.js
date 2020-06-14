import { createReducer } from "@reduxjs/toolkit";
import {
  validateSession,
  login,
  logout,
  deleteAccount,
  wsConnect,
  wsDisconnect
} from "../actions";
import channelDefault from "../../assets/default/channel-default.png";

const initialState = {
  loggedIn: false,
  validatedSession: false,
  siteVersion: "1.1.4",
  defaultAvatar: "https://i.imgur.com/h1SSoyk.png",
  defaultIcon: channelDefault,
  groupRoomMemberLimit: 8,
  wsConnected: false,
  heartbeatInterval: null
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
  [deleteAccount.fulfilled]: R_logout
});
