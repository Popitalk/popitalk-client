import * as api from "../../../helpers/api";
import { LOGOUT } from "../../../helpers/constants";
import { userApiLoading, userApiSuccess, userApiError } from "../api";
import { closeAllModals } from "../modal";

const deleteAccount = () => {
  return async dispatch => {
    try {
      dispatch(userApiLoading());
      await api.deleteAccount();
      dispatch(userApiSuccess());
      dispatch({ type: LOGOUT });
      dispatch(closeAllModals());
    } catch (error) {
      dispatch(userApiError());
    }
  };
};

export default deleteAccount;
