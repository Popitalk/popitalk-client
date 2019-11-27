import {
  SET_MODAL,
  MODAL_CREATE_NEW_ACCOUNT
} from "../../../helpers/constants";

export const openCreateNewAccountModal = () => ({
  type: SET_MODAL,
  payload: {
    component: MODAL_CREATE_NEW_ACCOUNT
  }
});

export const closeModal = () => ({
  type: SET_MODAL,
  payload: {
    component: null
  }
});
