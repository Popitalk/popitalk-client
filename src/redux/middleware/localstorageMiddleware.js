import { SET_SOMETHING } from "../../helpers/constants";

const localStorageMiddleware = () => store => next => action => {
  next(action);

  try {
  } catch (err) {}
};

export default localStorageMiddleware;
