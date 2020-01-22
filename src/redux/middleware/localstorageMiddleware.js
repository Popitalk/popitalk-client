import {
  SET_USER_INFO,
  LOGOUT,
  GENERAL_SET_DRAFT
} from "../../helpers/constants";

const localStorageMiddleware = () => store => next => action => {
  next(action);

  try {
    if (action.type === SET_USER_INFO) {
      const { userState } = store.getState();
      localStorage.setItem("userState", JSON.stringify(userState));
    } else if (action.type === LOGOUT) {
      localStorage.removeItem("userState");
    } else if (action.type === GENERAL_SET_DRAFT) {
      const { drafts } = store.getState().generalState;
      localStorage.setItem("drafts", JSON.stringify(drafts));
    }
  } catch (err) {}
};

export default localStorageMiddleware;
