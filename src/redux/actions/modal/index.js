import {
  SET_MODAL,
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_INVITE,
  MODAL_PROFILE,
  MODAL_IMAGE
} from "../../../helpers/constants";

export const openCreateNewAccountModal = () => ({
  type: SET_MODAL,
  payload: {
    component: MODAL_CREATE_NEW_ACCOUNT
  }
});

export const openInviteModal = () => ({
  type: SET_MODAL,
  payload: {
    component: MODAL_INVITE
  }
});
export const openProfileModal = () => ({
  type: SET_MODAL,
  payload: {
    component: MODAL_PROFILE
  }
});

export const openImageModal = () => ({
  type: SET_MODAL,
  payload: {
    component: MODAL_IMAGE
  }
});

export const closeModal = () => ({
  type: SET_MODAL,
  payload: {
    component: null
  }
});
