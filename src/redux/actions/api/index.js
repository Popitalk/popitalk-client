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
    userApiLoading: true
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

export const userApiError = error => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: error || true
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
