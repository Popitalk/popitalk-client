import * as api from "../../../helpers/api";
import { SET_USER_INFO, GENERAL_INIT } from "../../../helpers/constants";
import { userApiLoading, userApiSuccess, userApiError } from "../api";

const login = loginInfo => {
  return async dispatch => {
    try {
      dispatch(userApiLoading());
      const response = await api.login(loginInfo);
      dispatch({
        type: SET_USER_INFO,
        payload: {
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          username: response.data.username,
          dateOfBirth: response.data.dateOfBirth,
          avatar: response.data.avatar,
          email: response.data.email,
          emailVerified: response.data.emailVerified,
          friends:
            response.data.relationships && response.data.relationships.friends,
          sentFriendRequests:
            response.data.relationships &&
            response.data.relationships.sentFriendRequests,
          receivedFriendRequests:
            response.data.relationships &&
            response.data.relationships.receivedFriendRequests,
          blocked:
            response.data.relationships && response.data.relationships.blocked,
          blockers:
            response.data.relationships && response.data.relationships.blockers
        }
      });
      dispatch({
        type: GENERAL_INIT,
        payload: {
          channels: response.data.channels || {},
          rooms: response.data.rooms || {},
          users: response.data.users || {}
        }
      });
      dispatch(userApiSuccess());
    } catch (error) {
      console.log("ERR", error);
      if (error.response.status === 401) {
        dispatch(userApiError("Incorrect login info"));
      } else {
        dispatch(userApiError("Couldn't log in"));
      }
    }
  };
};

export default login;
