import { createSlice } from "@reduxjs/toolkit";

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
    closeModal: state => state.components.pop(),
    closeAllModals: state => (state.closing = true),
    closeModalFinal: state => {
      state.components = [];
      state.closing = false;
    }
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
