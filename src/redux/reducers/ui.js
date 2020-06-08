import { createReducer } from "@reduxjs/toolkit";
import {
  toggleLeftPanel,
  setLeftPanelActiveTabChannels,
  setLeftPanelActiveTabFriends
} from "../actions";

const initialState = { isCollapsed: false, leftPanelActiveTab: "channels" };

export default createReducer(initialState, {
  [toggleLeftPanel]: state => {
    state.isCollapsed = !state.isCollapsed;
  },
  [setLeftPanelActiveTabChannels]: state => {
    state.leftPanelActiveTab = "channels";
  },
  [setLeftPanelActiveTabFriends]: state => {
    state.leftPanelActiveTab = "friends";
  }
});
