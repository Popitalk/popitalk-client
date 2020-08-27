import { createReducer } from "@reduxjs/toolkit";
import {
  getTrendingGifs,
  getSearchGifs,
  initTrendingGifs,
  saveOffset,
  setDisplay
} from "../actions";
import { gifsDisplay } from "../../helpers/constants";

const initialState = {
  trending: [],
  searchResults: [],
  offset: 0,
  display: gifsDisplay.trending
};

const R_initTrendingGifs = (state, { payload }) => {
  if (state.trending.length === 0) {
    state.trending = payload;
  }
};

const R_getTrendingGifs = (state, { payload }) => {
  if (state.trending.length === 0) {
    state.trending = payload;
  } else state.trending = [...state.trending, ...payload];
};

const R_getSearchGifs = (state, { payload }) => {
  state.searchResults = payload;
};

const R_saveOffset = (state, { payload }) => {
  state.offset = payload.offset;
};

const R_setDisplay = (state, { payload }) => {
  state.display = payload.display;
};

export default createReducer(initialState, {
  [initTrendingGifs.fulfilled]: R_initTrendingGifs,
  [getTrendingGifs.fulfilled]: R_getTrendingGifs,
  [getSearchGifs.fulfilled]: R_getSearchGifs,
  [saveOffset]: R_saveOffset,
  [setDisplay]: R_setDisplay
});
