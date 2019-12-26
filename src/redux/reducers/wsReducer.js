import { SET_API } from "../../helpers/constants";

const initialState = {
  connected: null,
  heartbeatInterval: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_API:
      return { ...state, ...payload };

    default:
      return state;
  }
};
