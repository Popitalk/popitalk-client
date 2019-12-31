import {
  USERSEARCH_SET_USERS_INFO,
  USERSEARCH_SET_API
} from "../../../helpers/constants";
import * as api from "../../../helpers/api";

const apiLoading = () => ({
  type: USERSEARCH_SET_API,
  payload: {
    apiLoading: true,
    apiError: false
  }
});

const apiSuccess = () => ({
  type: USERSEARCH_SET_API,
  payload: {
    apiLoading: false,
    apiError: false
  }
});

const apiError = error => ({
  type: USERSEARCH_SET_API,
  payload: {
    users: [],
    apiLoading: false,
    apiError: error || true
  }
});

export const searchUsers = username => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      const response = await api.searchUsers(username);
      dispatch({
        type: USERSEARCH_SET_USERS_INFO,
        payload: {
          users: response.data
        }
      });
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const clearUserSearch = () => ({
  type: USERSEARCH_SET_USERS_INFO,
  payload: {
    users: []
  }
});
