import { SET_SOMETHING } from "../../helpers/constants";

const initialState = {
  connected: null,
  heartbeatInterval: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SOMETHING:
      return { ...state, ...payload };

    default:
      return state;
  }
};
