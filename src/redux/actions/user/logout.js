import * as api from "../../../helpers/api";
import { LOGOUT, GENERAL_RESET } from "../../../helpers/constants";
import { closeAllModals } from "../modal";

const logout = () => {
  return async dispatch => {
    try {
      await api.logout();
      dispatch({ type: LOGOUT });
      dispatch({ type: GENERAL_RESET });
      dispatch(closeAllModals());
    } catch (error) {}
  };
};

export default logout;
