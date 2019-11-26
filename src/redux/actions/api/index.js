import { SET_SOMETHING } from "../../../helpers/constants";

export const generalApiLoading = () => ({
  type: SET_SOMETHING,
  payload: {
    generalApiLoading: true,
    generalApiError: false
  }
});

export const generalApiSuccess = () => ({
  type: SET_SOMETHING,
  payload: {
    generalApiLoading: false,
    generalApiError: false
  }
});

export const generalApiError = () => ({
  type: SET_SOMETHING,
  payload: {
    generalApiLoading: false,
    generalApiError: true
  }
});

export const userApiLoading = () => ({
  type: SET_SOMETHING,
  payload: {
    userApiLoading: true,
    userApiError: false
  }
});

export const userApiSuccess = () => ({
  type: SET_SOMETHING,
  payload: {
    userApiLoading: false,
    userApiError: false
  }
});

export const userApiError = error => ({
  type: SET_SOMETHING,
  payload: {
    userApiLoading: false,
    userApiError: error || true
  }
});
