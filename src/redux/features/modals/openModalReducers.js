import {
  MODAL_BLOCKED_USERS,
  MODAL_CHANGE_PASSWORD,
  MODAL_DELETE_CHANNEL,
  MODAL_DELETE_MESSAGE,
  MODAL_DELETE_POST,
  MODAL_EDIT_USER_SETTINGS,
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_IMAGE,
  MODAL_INVITE,
  MODAL_LIST,
  MODAL_PROFILE,
  MODAL_ROOM_EXISTS,
  MODAL_SOCIAL_SHARE
} from "../../../helpers/constants";

const openModal = (state, action) => {
  const {
    component,
    channelId,
    userId,
    messageId,
    postId,
    isCreatingNewRoom,
    room,
    selectedIds,
    content
  } = action.payload;

  state.components.push(component);
  state.channelId = channelId || null;
  state.userId = userId || null;
  state.messageId = messageId || null;
  state.postId = postId || null;
  state.isCreatingNewRoom = isCreatingNewRoom || null;
  state.room = room || null;
  state.selectedIds = selectedIds || null;
  state.content = content || null;
  state.postId = postId || null;
  state.closing = false;
};

export const openBlockedUsers = {
  reducer: openModal,
  prepare: () => ({
    payload: {
      component: MODAL_BLOCKED_USERS
    }
  })
};

export const openChangePassword = {
  reducer: openModal,
  prepare: () => ({
    payload: {
      component: MODAL_CHANGE_PASSWORD
    }
  })
};

export const openDeleteChannel = {
  reducer: openModal,
  prepare: channelId => ({
    payload: {
      component: MODAL_DELETE_CHANNEL,
      channelId
    }
  })
};

export const openDeleteMessage = {
  reducer: openModal,
  prepare: (channelId, messageId) => ({
    payload: {
      component: MODAL_DELETE_MESSAGE,
      channelId,
      messageId
    }
  })
};

export const openDeletePost = {
  reducer: openModal,
  prepare: postId => ({
    payload: {
      component: MODAL_DELETE_POST,
      postId
    }
  })
};

export const openEditUserSettings = {
  reducer: openModal,
  prepare: () => ({
    payload: {
      component: MODAL_EDIT_USER_SETTINGS
    }
  })
};

export const openImage = {
  reducer: openModal,
  prepare: (channelId, messageId) => ({
    payload: {
      component: MODAL_IMAGE
    }
  })
};

export const openInvite = {
  reducer: openModal,
  prepare: (channelId, isCreatingNewRoom) => ({
    payload: {
      component: MODAL_INVITE,
      channelId,
      isCreatingNewRoom
    }
  })
};

export const openList = {
  reducer: openModal,
  prepare: (channelId, content) => ({
    payload: {
      component: MODAL_LIST,
      channelId,
      content
    }
  })
};

export const openProfile = {
  reducer: openModal,
  prepare: userId => ({
    payload: { component: MODAL_PROFILE, userId }
  })
};

export const openCreateNewAccount = {
  reducer: openModal,
  prepare: userId => ({
    payload: { component: MODAL_CREATE_NEW_ACCOUNT }
  })
};

export const openRoomExists = {
  reducer: openModal,
  prepare: (room, selectedIds) => ({
    payload: {
      component: MODAL_ROOM_EXISTS,
      room,
      selectedIds
    }
  })
};

export const openSocialShare = {
  reducer: openModal,
  prepare: () => ({ payload: { component: MODAL_SOCIAL_SHARE } })
};
