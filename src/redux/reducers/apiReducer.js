import { SET_API } from "../../helpers/constants";

const initialState = {
  generalApiLoading: false,
  generalApiError: false,
  userApiLoading: false,
  userApiError: false,
  registrationApiLoading: false,
  registrationApiError: false,
  userPageApiLoading: true,
  userPageApiError: false,
  userSearchApiLoading: false,
  userSearchApiError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_API:
      return { ...state, ...payload };

    default:
      return state;
  }
};
