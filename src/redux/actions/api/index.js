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
