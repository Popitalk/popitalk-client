import {
  PUSH_MODAL,
  POP_MODAL,
  POP_ALL_MODAL,
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_INVITE,
  MODAL_PROFILE,
  MODAL_WATCHING,
  MODAL_FOLLOWERS,
  MODAL_USER_SETTINGS,
  MODAL_EDIT_USER_SETTINGS,
  MODAL_CHANGE_PASSWORD,
  MODAL_BLOCKED_USERS,
  MODAL_IMAGE
} from "../../../helpers/constants";

export const openCreateNewAccountModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_CREATE_NEW_ACCOUNT
  }
});

export const openInviteModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_INVITE
  }
});

export const openProfileModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_PROFILE
  }
});

export const openWatchingModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_WATCHING
  }
});

export const openFollowersModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_FOLLOWERS
  }
});

export const openImageModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_IMAGE
  }
});
export const openUserSettingsModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_USER_SETTINGS
  }
});
export const openEditUserSettingsModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_EDIT_USER_SETTINGS
  }
});
export const openChangePasswordModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_CHANGE_PASSWORD
  }
});
export const openBlockedUsersModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_BLOCKED_USERS
  }
});

export const closeModal = () => ({
  type: POP_MODAL
});

export const closeAllModals = () => ({
  type: POP_ALL_MODAL
});
