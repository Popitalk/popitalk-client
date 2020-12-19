import { createSlice } from "@reduxjs/toolkit";

import {
  logout,
  deleteAccount,
  deleteChannel,
  createRoom,
  addRoomMembers,
  deleteMessage
} from "../../actions";

import {
  openInvite,
  openSocialShare,
  openProfile,
  openDeleteMessage,
  openDeleteChannel,
  openDeletePost,
  openList,
  openImage,
  openEditUserSettings,
  openChangePassword,
  openBlockedUsers,
  openRoomExists
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
    openDeleteMessageModal: openDeleteMessage,
    openDeleteChannelModal: openDeleteChannel,
    openDeletePostModal: openDeletePost,
    openListModal: openList,
    openImageModal: openImage,
    openEditUserSettingsModal: openEditUserSettings,
    openChangePasswordModal: openChangePassword,
    openBlockedUsersModal: openBlockedUsers,
    openRoomExistsModal: openRoomExists,
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
    [deleteMessage.fulfilled]: R_closeModal
  }
});

export const {
  openInviteModal,
  openSocialShareModal,
  openProfileModal,
  openDeleteMessageModal,
  openDeleteChannelModal,
  openDeletePostModal,
  openListModal,
  openImageModal,
  openEditUserSettingsModal,
  openChangePasswordModal,
  openBlockedUsersModal,
  openRoomExistsModal,
  closeModal,
  closeAllModals,
  closeModalFinal
} = modalsSlice.actions;

export default modalsSlice.reducer;
