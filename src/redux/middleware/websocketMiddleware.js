import { SET_SOMETHING } from "../../helpers/constants";

const websocketMiddleware = () => store => next => action => {
  next(action);

  try {
  } catch (err) {}
};

export default websocketMiddleware;
