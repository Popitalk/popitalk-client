import { SET_SOMETHING } from "../../helpers/constants";

const initialState = {
  generalApiLoading: false,
  generalApiError: false,
  userApiLoading: false,
  userApiError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SOMETHING:
      return { ...state, ...payload };

    default:
      return state;
  }
};
