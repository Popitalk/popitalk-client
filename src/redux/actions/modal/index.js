import {
  PUSH_MODAL,
  POP_MODAL,
  POP_ALL_MODAL,
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_INVITE,
  MODAL_PROFILE,
  MODAL_WATCHING,
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

export const openImageModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_IMAGE
  }
});

export const closeModal = () => ({
  type: POP_MODAL
});

export const closeAllModals = () => ({
  type: POP_ALL_MODAL
});
