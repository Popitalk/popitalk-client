import * as api from "../../../helpers/api";
import { SET_USER_INFO } from "../../../helpers/constants";
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
      const response = await api.register(registerInfo);

      await api.login({
        usernameOrEmail: registerInfo.email,
        password: registerInfo.password
      });

      dispatch({
        type: SET_USER_INFO,
        payload: response.data
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
