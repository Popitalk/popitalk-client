import { createSlice } from "@reduxjs/toolkit";

import {
  logout,
  deleteAccount,
  deleteChannel,
  createRoom,
  addRoomMembers,
  deleteMessage,
  addStranger
} from "../../actions";

import {
  openInvite,
  openSocialShare,
  openProfile,
  openCreateNewAccount,
  openDeleteMessage,
  openDeleteChannel,
  openDeletePost,
  openList,
  openImage,
  openEditUserSettings,
  openChangePassword,
  openBlockedUsers,
  openRoomExists,
  openSignUpRequired
} from "./openModalReducers";

const initialState = {
  components: [],
  closing: false,
  channelId: null,
  userId: null,
  messageId: null,
  postId: null,
  isCreatingNewRoom: null,
  room: null,
  selectedIds: null,
  content: null
};

const R_closeModal = state => {
  state.components.pop();
};
const R_closeAllModals = state => {
  state.closing = true;
};
const R_closeModalFinal = state => {
  state.components = [];
  state.closing = false;
};

const modalsSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openInviteModal: openInvite,
    openSocialShareModal: openSocialShare,
    openProfileModal: openProfile,
    openCreateNewAccountModal: openCreateNewAccount,
    openDeleteMessageModal: openDeleteMessage,
    openDeleteChannelModal: openDeleteChannel,
    openDeletePostModal: openDeletePost,
    openListModal: openList,
    openImageModal: openImage,
    openEditUserSettingsModal: openEditUserSettings,
    openChangePasswordModal: openChangePassword,
    openBlockedUsersModal: openBlockedUsers,
    openRoomExistsModal: openRoomExists,
    openSignUpRequiredModal: openSignUpRequired,
    closeModal: R_closeModal,
    closeAllModals: R_closeAllModals,
    closeModalFinal: R_closeModalFinal
  },
  extraReducers: {
    [logout.fulfilled]: R_closeAllModals,
    [deleteAccount.fulfilled]: R_closeAllModals,
    [deleteChannel.fulfilled]: R_closeAllModals,
    [createRoom.fulfilled]: R_closeModal,
    [addRoomMembers.fulfilled]: R_closeModal,
    [deleteMessage.fulfilled]: R_closeModal,
    [addStranger.fulfilled]: R_closeModal,
    [addStranger.rejected]: R_closeAllModals
  }
});

export const {
  openInviteModal,
  openSocialShareModal,
  openProfileModal,
  openCreateNewAccountModal,
  openDeleteMessageModal,
  openDeleteChannelModal,
  openDeletePostModal,
  openListModal,
  openImageModal,
  openEditUserSettingsModal,
  openChangePasswordModal,
  openBlockedUsersModal,
  openRoomExistsModal,
  openSignUpRequiredModal,
  closeModal,
  closeAllModals,
  closeModalFinal
} = modalsSlice.actions;

export default modalsSlice.reducer;
