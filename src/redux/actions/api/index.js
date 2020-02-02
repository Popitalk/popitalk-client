import { SET_API } from "../../../helpers/constants";

export const generalApiLoading = () => ({
  type: SET_API,
  payload: {
    generalApiLoading: true,
    generalApiError: false
  }
});

export const generalApiSuccess = () => ({
  type: SET_API,
  payload: {
    generalApiLoading: false,
    generalApiError: false
  }
});

export const generalApiError = () => ({
  type: SET_API,
  payload: {
    generalApiLoading: false,
    generalApiError: true
  }
});

export const userApiLoading = () => ({
  type: SET_API,
  payload: {
    userApiLoading: true,
    userApiSuccess: false
    // userApiError: false
  }
});

export const userApiSuccess = () => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: false
  }
});

export const userApiSuccess2 = () => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: false,
    userApiSuccess: true
  }
});

export const userApiReset = () => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: false,
    userApiSuccess: false
  }
});

export const userApiError = error => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: error || true,
    userApiSuccess: false
  }
});

export const registrationApiLoading = () => ({
  type: SET_API,
  payload: {
    registrationApiLoading: true
    // registrationApiError: false
  }
});

export const registrationApiSuccess = () => ({
  type: SET_API,
  payload: {
    registrationApiLoading: false,
    registrationApiError: false
  }
});

export const registrationApiError = error => ({
  type: SET_API,
  payload: {
    registrationApiLoading: false,
    registrationApiError: error || true
  }
});

export const userPageApiLoading = () => ({
  type: SET_API,
  payload: {
    userPageApiLoading: true,
    userPageApiError: false
  }
});

export const userPageApiSuccess = () => ({
  type: SET_API,
  payload: {
    userPageApiLoading: false,
    userPageApiError: false
  }
});

export const userPageApiError = error => ({
  type: SET_API,
  payload: {
    userPageApiLoading: false,
    userPageApiError: error || true
  }
});

export const inviteApiLoading = () => ({
  type: SET_API,
  payload: {
    inviteApiLoading: true,
    inviteApiError: false
  }
});

export const inviteApiSuccess = () => ({
  type: SET_API,
  payload: {
    inviteApiLoading: false,
    inviteApiError: false
  }
});

export const inviteApiError = error => ({
  type: SET_API,
  payload: {
    inviteApiLoading: false,
    inviteApiError: error || true
  }
});

export const roomApiLoading = () => ({
  type: SET_API,
  payload: {
    roomApiLoading: true,
    roomApiError: false
  }
});

export const roomApiSuccess = () => ({
  type: SET_API,
  payload: {
    roomApiLoading: false,
    roomApiError: false
  }
});

export const roomApiError = error => ({
  type: SET_API,
  payload: {
    roomApiLoading: false,
    roomApiError: error || true
  }
});

export const messagesApiLoading = () => ({
  type: SET_API,
  payload: {
    messagesApiLoading: true,
    messagesApiError: false
  }
});

export const messagesApiSuccess = () => ({
  type: SET_API,
  payload: {
    messagesApiLoading: false,
    messagesApiError: false
  }
});

export const messagesApiError = error => ({
  type: SET_API,
  payload: {
    messagesApiLoading: false,
    messagesApiError: error || true
  }
});

export const postsApiLoading = () => ({
  type: SET_API,
  payload: {
    postsApiLoading: true,
    postsApiError: false
  }
});

export const postsApiSuccess = () => ({
  type: SET_API,
  payload: {
    postsApiLoading: false,
    postsApiError: false
  }
});

export const postsApiError = error => ({
  type: SET_API,
  payload: {
    postsApiLoading: false,
    postsApiError: error || true
  }
});

export const commentsApiLoading = () => ({
  type: SET_API,
  payload: {
    commentsApiLoading: true,
    commentsApiError: false
  }
});

export const commentsApiSuccess = () => ({
  type: SET_API,
  payload: {
    commentsApiLoading: false,
    commentsApiError: false
  }
});

export const commentsApiError = error => ({
  type: SET_API,
  payload: {
    commentsApiLoading: false,
    commentsApiError: error || true
  }
});

export const channelCreateApiLoading = () => ({
  type: SET_API,
  payload: {
    channelCreateApiLoading: true,
    channelCreateApiSuccess: false
    // channelCreateApiError: false
  }
});

export const channelCreateApiSuccess = () => ({
  type: SET_API,
  payload: {
    channelCreateApiLoading: false,
    channelCreateApiError: false
  }
});

export const channelCreateApiSuccess2 = () => ({
  type: SET_API,
  payload: {
    channelCreateApiLoading: false,
    channelCreateApiError: false,
    channelCreateApiSuccess: true
  }
});

export const channelCreateApiReset = () => ({
  type: SET_API,
  payload: {
    channelCreateApiLoading: false,
    channelCreateApiError: false,
    channelCreateApiSuccess: false
  }
});

export const channelCreateApiError = error => ({
  type: SET_API,
  payload: {
    channelCreateApiLoading: false,
    channelCreateApiError: error || true,
    channelCreateApiSuccess: false
  }
});

export const likesApiLoading = () => ({
  type: SET_API,
  payload: {
    likesApiLoading: true,
    likesApiError: false
  }
});

export const likesApiSuccess = () => ({
  type: SET_API,
  payload: {
    likesApiLoading: false,
    likesApiError: false
  }
});

export const likesApiError = error => ({
  type: SET_API,
  payload: {
    likesApiLoading: false,
    likesApiError: error || true
  }
});

export const userListApiLoading = userId => ({
  type: SET_API,
  payload: {
    userListApiLoading: true,
    userListApiError: false,
    userListApiUserId: userId
  }
});

export const userListApiSuccess = () => ({
  type: SET_API,
  payload: {
    userListApiLoading: false,
    userListApiError: false,
    userListApiUserId: null
  }
});

export const userListApiError = error => ({
  type: SET_API,
  payload: {
    userListApiLoading: false,
    userListApiError: error || true,
    userListApiUserId: null
  }
});
