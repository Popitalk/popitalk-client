import * as api from "../../../helpers/api";
import { GENERAL_ADD_MESSAGES } from "../../../helpers/constants";
import {
  messagesApiLoading,
  messagesApiSuccess,
  messagesApiError
} from "../api";

const getMessages = ({ channelId, afterMessageId, beforeMessageId }) => {
  return async dispatch => {
    try {
      dispatch(messagesApiLoading());
      const response = await api.getMessages({
        channelId,
        afterMessageId,
        beforeMessageId
      });
      dispatch({
        type: GENERAL_ADD_MESSAGES,
        payload: {
          channelId: channelId,
          messages: response.data
        }
      });
      dispatch(messagesApiSuccess());
    } catch (error) {
      dispatch(messagesApiError());
    }
  };
};

export default getMessages;
