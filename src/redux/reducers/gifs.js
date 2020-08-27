import { createReducer } from "@reduxjs/toolkit";
import { getTrendingGifs } from "../actions";

const initialState = {};

const R_getTrendingGifs = (state, { payload }) => {
  if (!state.trending) {
    state.trending = payload;
  } else state.trending = [...state.trending, ...payload];
};

export default createReducer(initialState, {
  [getTrendingGifs.fulfilled]: R_getTrendingGifs
});
