import { createReducer } from "@reduxjs/toolkit";
import { toggleLeftPanel } from "../actions";

const initialState = { isCollapsed: false };

export default createReducer(initialState, {
  [toggleLeftPanel]: state => {
    state.isCollapsed = !state.isCollapsed;
  }
});
