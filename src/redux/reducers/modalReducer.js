import {
  PUSH_MODAL,
  POP_MODAL,
  POP_ALL_MODAL,
  CLOSE_ALL_MODAL,
  PUSH_MODAL_PROFILE_MODAL
} from "../../helpers/constants";

const initialState = {
  open: false,
  components: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PUSH_MODAL:
      return {
        ...state,
        open: true,
        components: [...state.components, payload.component]
      };

    case PUSH_MODAL_PROFILE_MODAL:
      return {
        ...state,
        open: true,
        components: [...state.components, payload.component],
        userId: payload.userId
      };

    case POP_MODAL:
      return {
        ...state,
        ...(state.components.length === 1
          ? { open: false }
          : {
              components: [...state.components].slice(
                0,
                state.components.length - 1
              )
            })
      };

    case POP_ALL_MODAL:
      return { ...state, components: [] };

    case CLOSE_ALL_MODAL:
      return {
        ...state,
        open: false
      };

    default:
      return state;
  }
};
