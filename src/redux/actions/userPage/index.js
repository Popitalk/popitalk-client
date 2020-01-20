import { USERPAGE_SET_USER_INFO } from "../../../helpers/constants";
import * as api from "../../../helpers/api";
import {
  userPageApiLoading,
  userPageApiSuccess,
  userPageApiError
} from "../api";

export const getUserInfo = userId => {
  return async (dispatch, getState) => {
    try {
      dispatch(userPageApiLoading());
      const {
        modalId,
        modalFirstName,
        modalLastName,
        modalUsername,
        modalAvatar
      } = getState().userPageState;

      if (userId === modalId) {
        dispatch({
          type: USERPAGE_SET_USER_INFO,
          payload: {
            id: modalId,
            firstName: modalFirstName,
            lastName: modalLastName,
            username: modalUsername,
            avatar: modalAvatar
          }
        });
      } else {
        const response = await api.getUser(userId);
        dispatch({
          type: USERPAGE_SET_USER_INFO,
          payload: response.data
        });
      }

      dispatch(userPageApiSuccess());
    } catch (error) {
      dispatch(userPageApiError());
    }
  };
};
export const getUserInfoModal = userId => {
  return async (dispatch, getState) => {
    try {
      dispatch(userPageApiLoading());
      const {
        id,
        firstName,
        lastName,
        username,
        avatar
      } = getState().userPageState;

      if (userId === id) {
        dispatch({
          type: USERPAGE_SET_USER_INFO,
          payload: {
            id: id,
            firstName: firstName,
            lastName: lastName,
            username: username,
            avatar: avatar,
            modal: true
          }
        });
      } else {
        const response = await api.getUser(userId);
        dispatch({
          type: USERPAGE_SET_USER_INFO,
          payload: {
            ...response.data,
            modal: true
          }
        });
      }

      dispatch(userPageApiSuccess());
    } catch (error) {
      dispatch(userPageApiError());
    }
  };
};
