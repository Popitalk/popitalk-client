import * as api from "../../../helpers/api";
import { SET_USER_INFO, GENERAL_INIT } from "../../../helpers/constants";
import {
  registrationApiLoading,
  registrationApiSuccess,
  registrationApiError
} from "../api";
import { closeAllModals } from "../modal";

const register = registerInfo => {
  return async dispatch => {
    try {
      dispatch(registrationApiLoading());
      await api.register(registerInfo);

      const response = await api.login({
        usernameOrEmail: registerInfo.email,
        password: registerInfo.password
      });

      dispatch({
        type: SET_USER_INFO,
        payload: response.data
      });

      dispatch({
        type: GENERAL_INIT,
        payload: {
          channels: response.data.channels || {},
          users: response.data.users || {}
        }
      });

      dispatch(closeAllModals());
      dispatch(registrationApiSuccess());
    } catch (error) {
      if (error.response) {
        dispatch(registrationApiError(error.response.data.message));
      } else {
        dispatch(registrationApiError("Couldn't register"));
      }
    }
  };
};

export default register;
