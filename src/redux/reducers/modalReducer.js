import { PUSH_MODAL, POP_MODAL, POP_ALL_MODAL } from "../../helpers/constants";

const initialState = {
  open: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PUSH_MODAL:
      return { ...state, open: [...state.open, payload.component] };

    case POP_MODAL:
      return {
        ...state,
        open: [...state.open].slice(0, state.open.length - 1)
      };

    case POP_ALL_MODAL:
      return { ...state, open: [] };

    default:
      return state;
  }
};
