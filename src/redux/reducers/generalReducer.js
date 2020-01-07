import { GENERAL_ADD_USERS } from "../../helpers/constants";

const initialState = {
  channels: {},
  users: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GENERAL_ADD_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          ...payload.users
        }
      };

    default:
      return state;
  }
};
