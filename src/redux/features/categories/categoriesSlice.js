import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../../helpers/api";

import {
  R_setCategories,
  R_addNewCategory,
  R_setSelected,
  R_removeSelected,
  R_initCategories
} from "./categoriesReducers";

const initialState = {
  categories: [],
  selected: []
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async ({ alreadySelected }) => {
    const response = await API.getCategories();
    return { ...response.data, alreadySelected };
  }
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async ({ category }) => {
    const response = await API.createCategory({ category });
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelected: R_setSelected,
    removeSelected: R_removeSelected,
    initCategories: R_initCategories
  },
  extraReducers: {
    [getCategories.fulfilled]: R_setCategories,
    [createCategory.fulfilled]: R_addNewCategory
  }
});

export const {
  setSelected,
  removeSelected,
  initCategories
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
