import { SET_MODAL } from "../../helpers/constants";

const initialState = {
  component: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MODAL:
      return { ...state, ...payload };

    default:
      return state;
  }
};
