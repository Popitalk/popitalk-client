import * as api from "../../../helpers/api";
import {
  SET_USER_INFO,
  SITE_VERSION,
  LOGOUT
} from "../../../helpers/constants";

const validateSession = () => {
  return async dispatch => {
    try {
      const cachedSiteVersion = localStorage.getItem("siteVersion");
      if (cachedSiteVersion) {
        const siteVersionArr = SITE_VERSION.split(".");
        const cachedSiteVersionArr = cachedSiteVersion.split(".");

        if (
          siteVersionArr[0] > cachedSiteVersionArr[0] ||
          siteVersionArr[1] > cachedSiteVersionArr[1] ||
          siteVersionArr[2] > cachedSiteVersionArr[2]
        ) {
          localStorage.clear();
        }
      }
      localStorage.setItem("siteVersion", SITE_VERSION);

      const cachedUserState = JSON.parse(localStorage.getItem("userState"));

      if (cachedUserState) {
        dispatch({
          type: SET_USER_INFO,
          payload: cachedUserState
        });
      }
      const response = await api.validateSession();
      dispatch({
        type: SET_USER_INFO,
        payload: response.data
      });
    } catch (error) {
      localStorage.removeItem("userState");
      dispatch({ type: LOGOUT });
    }
  };
};

export default validateSession;
