import * as api from "../../../helpers/api";
import { LOGOUT } from "../../../helpers/constants";
import { closeAllModals } from "../modal";

const logout = () => {
  return async dispatch => {
    try {
      await api.logout();
      dispatch({ type: LOGOUT });
      dispatch(closeAllModals());
    } catch (error) {}
  };
};

export default logout;
