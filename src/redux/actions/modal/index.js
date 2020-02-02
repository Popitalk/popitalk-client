import {
  PUSH_MODAL,
  PUSH_MODAL_PROFILE_MODAL,
  PUSH_MODAL_DELETE_MESSAGE,
  PUSH_MODAL_DELETE_CHANNEL,
  POP_MODAL,
  POP_ALL_MODAL,
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_CREATE_ROOM,
  MODAL_INVITE,
  MODAL_PROFILE,
  MODAL_WATCHING,
  MODAL_MEMBERS,
  MODAL_FOLLOWERS,
  MODAL_USER_SETTINGS,
  MODAL_EDIT_USER_SETTINGS,
  MODAL_CHANGE_PASSWORD,
  MODAL_BLOCKED_USERS,
  MODAL_IMAGE,
  CLOSE_ALL_MODAL,
  MODAL_DELETE_MESSAGE,
  MODAL_ACCOUNT_SETTINGS,
  MODAL_DELETE_ACCOUNT,
  MODAL_DELETE_CHANNEL,
  MODAL_ROOM_EXISTS
} from "../../../helpers/constants";

import { userApiReset } from "../api";
import { clear } from "../invite";

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
export const openCreateRoomModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_CREATE_ROOM
  }
});
export const openProfileModal = userId => ({
  type: PUSH_MODAL_PROFILE_MODAL,
  payload: {
    component: MODAL_PROFILE,
    userId
  }
});
export const openDeleteMessageModal = messageId => ({
  type: PUSH_MODAL_DELETE_MESSAGE,
  payload: {
    component: MODAL_DELETE_MESSAGE,
    messageId
  }
});

export const openDeleteChannelModal = channelId => ({
  type: PUSH_MODAL_DELETE_CHANNEL,
  payload: {
    component: MODAL_DELETE_CHANNEL,
    channelId
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
export const openAccountSettingsModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_ACCOUNT_SETTINGS
  }
});
export const openDeleteAccountModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_DELETE_ACCOUNT
  }
});
export const openRoomExistsModal = () => ({
  type: PUSH_MODAL,
  payload: {
    component: MODAL_ROOM_EXISTS
  }
});

export const closeAllModals = () => ({
  type: CLOSE_ALL_MODAL
});

export const popAllModals = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: POP_ALL_MODAL
    });
    if (getState().inviteState.selectedFriends.length !== 0) {
      dispatch(clear());
    }
  };
};

// export const popAllModals = () => ({
//   type: POP_ALL_MODAL
// });

export const closeModal = () => {
  return dispatch => {
    dispatch({ type: POP_MODAL });
    dispatch(userApiReset());
  };
};
