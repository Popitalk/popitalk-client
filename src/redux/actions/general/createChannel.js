import { push } from "connected-react-router";
import * as api from "../../../helpers/api";
import { GENERAL_ADD_CHANNEL } from "../../../helpers/constants";
import {
  channelCreateApiLoading,
  channelCreateApiSuccess,
  channelCreateApiError
} from "../api";

const createChannel = channelInfo => {
  return async (dispatch, getState) => {
    try {
      dispatch(channelCreateApiLoading());

      const formData = new FormData();

      formData.append("name", channelInfo.name);
      formData.append("description", channelInfo.description);
      formData.append("public", channelInfo.public);
      // formData.append("categories", channelInfo.categories);
      if (channelInfo.icon) {
        formData.append("icon", channelInfo.icon);
      }

      const response = await api.createChannel(formData);

      console.log("CHHH", response);
      dispatch({
        type: GENERAL_ADD_CHANNEL,
        payload: response.data
      });

      dispatch(channelCreateApiSuccess());
      dispatch(push(`/channels/${response.data.id}/video`));
    } catch (error) {
      if (error.response) {
        dispatch(channelCreateApiError(error.response.data.message));
      } else {
        dispatch(channelCreateApiError());
      }
    }
  };
};

export default createChannel;
