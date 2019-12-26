import { SET_USER_INFO } from "../../helpers/constants";

const localStorageMiddleware = () => store => next => action => {
  next(action);

  try {
    if (action.type === SET_USER_INFO) {
      const { userState } = store.getState();
      localStorage.setItem("userState", JSON.stringify(userState));
    }
  } catch (err) {}
};

export default localStorageMiddleware;
