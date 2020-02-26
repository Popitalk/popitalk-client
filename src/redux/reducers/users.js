import { createReducer } from "@reduxjs/toolkit";
import {
  validateSession,
  login,
  logout,
  deleteAccount,
  getChannel,
  followChannel,
  addMemberWs,
  addMembersWs,
  acceptFriendRequest,
  addFriendWs,
  addReceivedFriendRequestWs,
  blockUser,
  addAdminWs,
  addChannelWs
} from "../actions";

const initialState = {};

const R_usersInit = (state, { payload }) => {
  return payload.users || {};
};

const R_addUsers = (state, { payload }) => {
  return {
    ...state,
    ...payload.users
  };
};

const R_addUser = (state, { payload }) => {
  state[payload.userId] = payload.user;
};

const R_resetState = () => initialState;

export default createReducer(initialState, {
  [validateSession.fulfilled]: R_usersInit,
  [login.fulfilled]: R_usersInit,
  [getChannel.fulfilled]: R_addUsers,
  [followChannel.fulfilled]: R_addUser,
  [addMemberWs]: R_addUser,
  [addMembersWs]: R_addUsers,
  [acceptFriendRequest.fulfilled]: R_addUsers,
  [addFriendWs]: R_addUsers,
  [addChannelWs]: R_addUsers,
  [addReceivedFriendRequestWs]: R_addUser,
  [addAdminWs]: R_addUsers,
  [blockUser.fulfilled]: R_addUser,
  [logout.fulfilled]: R_resetState,
  [deleteAccount.fulfilled]: R_resetState
});
