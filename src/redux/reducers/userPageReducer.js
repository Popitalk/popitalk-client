import { USERPAGE_SET_USER_INFO } from "../../helpers/constants";

const initialState = {
  username: "",
  avatar: null,
  firstName: "",
  lastName: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERPAGE_SET_USER_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};
