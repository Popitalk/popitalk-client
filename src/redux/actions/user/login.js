import * as api from "../../../helpers/api";
import { SET_USER_INFO } from "../../../helpers/constants";
import { userApiLoading, userApiSuccess, userApiError } from "../api";

const login = loginInfo => {
  return async dispatch => {
    try {
      dispatch(userApiLoading());
      const response = await api.login(loginInfo);
      dispatch({
        type: SET_USER_INFO,
        payload: response.data
      });
      dispatch(userApiSuccess());
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(userApiError("Incorrect login info"));
      } else {
        dispatch(userApiError("Couldn't log in"));
      }
    }
  };
};

export default login;
