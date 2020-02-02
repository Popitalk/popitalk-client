import * as api from "../../../helpers/api";
import {
  GENERAL_ADD_ADMIN,
  GENERAL_DELETE_ADMIN,
  GENERAL_ADD_BANNED,
  GENERAL_DELETE_BANNED
} from "../../../helpers/constants";
import {
  userListApiLoading,
  userListApiSuccess,
  userListApiError
} from "../api";

const updateMember = (channelId, userId, type) => {
  return async (dispatch, getState) => {
    try {
      dispatch(userListApiLoading(userId));

      const response = await api.updateMember({ channelId, userId, type });

      let actionType;

      if (type === "admin") {
        actionType = GENERAL_ADD_ADMIN;
      } else if (type === "unadmin") {
        actionType = GENERAL_DELETE_ADMIN;
      } else if (type === "ban") {
        actionType = GENERAL_ADD_BANNED;
      } else if (type === "unban") {
        actionType = GENERAL_DELETE_BANNED;
      }

      dispatch({
        type: actionType,
        payload: response.data
      });

      dispatch(userListApiSuccess());
    } catch (error) {
      dispatch(userListApiError());
    }
  };
};

export default updateMember;
