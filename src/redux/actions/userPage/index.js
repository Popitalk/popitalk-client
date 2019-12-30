import { USERPAGE_SET_USER_INFO } from "../../../helpers/constants";
import * as api from "../../../helpers/api";
import {
  userPageApiLoading,
  userPageApiSuccess,
  userPageApiError
} from "../api";

export const getUserInfo = userId => {
  return async dispatch => {
    try {
      dispatch(userPageApiLoading());
      const response = await api.getUser(userId);
      dispatch({
        type: USERPAGE_SET_USER_INFO,
        payload: response.data
      });
      dispatch(userPageApiSuccess());
    } catch (error) {
      // console.log("LOL", error.response);
      dispatch(userPageApiError());
      // if (error.response) {
      //   dispatch(userPageApiError(error.response.data.message));
      // } else {
      //   dispatch(userPageApiError(`No user with the id of ${userId} found`));
      // }
    }
  };
};
