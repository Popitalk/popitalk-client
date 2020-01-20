import * as api from "../../../helpers/api";
import { GENERAL_ADD_CHANNEL } from "../../../helpers/constants";
import { userApiLoading, userApiSuccess, userApiError } from "../api";

const getChannel = channelId => {
  return async (dispatch, getState) => {
    try {
      dispatch(userApiLoading());
      const response = await api.getChannel(channelId);
      dispatch({
        type: GENERAL_ADD_CHANNEL,
        payload: response.data
      });
      dispatch(userApiSuccess());
    } catch (error) {
      dispatch(userApiError());
    }
  };
};

export default getChannel;
