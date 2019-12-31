import {
  USERSEARCH_SET_USERS_INFO,
  USERSEARCH_SET_API
} from "../../helpers/constants";

const initialState = {
  input: "",
  users: [],
  currentPage: null,
  totalPages: null,
  apiLoading: false,
  apiError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERSEARCH_SET_API:
      return { ...state, ...payload };

    case USERSEARCH_SET_USERS_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};
