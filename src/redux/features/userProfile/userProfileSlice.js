import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUser } from "../../../helpers/api";
import { closeModalFinal } from "../modals/modalsSlice";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  avatar: null,
  followingCount: 0,
  friendsCount: 0
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
  const {
    id,
    firstName,
    lastName,
    username,
    avatar,
    followingCount,
    friendsCount
  } = action.payload;

  state.id = id;
  state.firstName = firstName;
  state.lastName = lastName;
  state.username = username;
  state.avatar = avatar;
  state.followingCount = followingCount;
  state.friendsCount = friendsCount;
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  extraReducers: {
    [getUserInfo.fulfilled]: setUserInfo,
    [closeModalFinal]: () => initialState
  }
});

export default userProfileSlice.reducer;
