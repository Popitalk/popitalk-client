import {
  SET_MODAL,
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_INVITE
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

export const closeModal = () => ({
  type: SET_MODAL,
  payload: {
    component: null
  }
});
