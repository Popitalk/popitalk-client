import { SET_USER_INFO, LOGOUT } from "../../helpers/constants";

const localStorageMiddleware = () => store => next => action => {
  next(action);

  try {
    if (action.type === SET_USER_INFO) {
      const { userState } = store.getState();
      localStorage.setItem("userState", JSON.stringify(userState));
    } else if (action.type === LOGOUT) {
      localStorage.removeItem("userState");
    }
  } catch (err) {}
};

export default localStorageMiddleware;
