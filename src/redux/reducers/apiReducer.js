import { SET_API } from "../../helpers/constants";

const initialState = {
  generalApiLoading: false,
  generalApiError: false,
  userApiLoading: false,
  userApiError: false,
  userApiSuccess: false,
  registrationApiLoading: false,
  registrationApiError: false,
  userPageApiLoading: true,
  userPageApiError: false,
  userSearchApiLoading: false,
  userSearchApiError: false,
  roomApiLoading: false,
  roomApiError: false,
  inviteApiLoading: false,
  inviteApiError: false,
  messagesApiLoading: false,
  messagesApiError: false,
  postsApiLoading: false,
  postsApiError: false,
  commentsApiLoading: false,
  commentsApiError: false,
  likesApiLoading: false,
  likesApiError: false,
  channelCreateApiLoading: false,
  channelCreateApiError: false,
  channelCreateApiSuccess: false,
  userListApiLoading: false,
  userListApiError: false,
  userListApiUserId: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_API:
      return { ...state, ...payload };

    default:
      return state;
  }
};
