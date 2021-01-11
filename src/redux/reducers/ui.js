import { createReducer } from "@reduxjs/toolkit";
import {
  toggleLeftPanel,
  removeLeftPanel,
  setLeftPanelActiveTabChannels,
  setLeftPanelActiveTabFriends,
  setAlert,
  setSelectedTab,
  setIsSearchForChannels,
  login,
  logout
} from "../actions";

import strings from "../../helpers/localization";

const initialState = {
  isCollapsed: false,
  isRemoved: false,
  leftPanelActiveTab: "channels",
  alert: "",
  tabSelected: null,
  isSearchForChannels: false
};

export default createReducer(initialState, {
  [toggleLeftPanel]: state => {
    state.isCollapsed = !state.isCollapsed;
  },
  [removeLeftPanel]: state => {
    state.isRemoved = !state.isRemoved;
  },
  [setLeftPanelActiveTabChannels]: state => {
    state.leftPanelActiveTab = "channels";
  },
  [setLeftPanelActiveTabFriends]: state => {
    state.leftPanelActiveTab = "friends";
  },
  [setAlert]: (state, { payload }) => {
    state.alert = payload;
  },
  [login.fulfilled]: state => {
    state.tabSelected = strings.following;
  },
  [logout.fulfilled]: state => {
    state.tabSelected = strings.trending;
  },
  [setSelectedTab]: (state, { payload }) => {
    state.tabSelected = payload;
  },
  [setIsSearchForChannels]: (state, { payload }) => {
    state.isSearchForChannels = payload;
  }
});
