import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUser } from "../../../helpers/api";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  avatar: null
};

export const getUserInfo = createAsyncThunk(
  "userProfile/getUserInfo",
  async (userId, { getState }) => {
    const { blockers } = getState().relationships;

    if (blockers.includes(userId)) throw new Error();

    const response = await getUser(userId);

    return response.data;
  }
);

const setUserInfo = (state, action) => {
  const { id, firstName, lastName, username, avatar } = action.payload;

  state.id = id;
  state.firstName = firstName;
  state.lastName = lastName;
  state.username = username;
  state.avatar = avatar;
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    clearProfileInfo: () => initialState
  },
  extraReducers: {
    [getUserInfo.fulfilled]: setUserInfo
  }
});

export const { clearProfileInfo } = userProfileSlice.actions;

export default userProfileSlice.reducer;