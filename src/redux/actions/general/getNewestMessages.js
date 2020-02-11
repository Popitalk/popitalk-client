import * as api from "../../../helpers/api";
import { GENERAL_ADD_NEWEST_MESSAGES } from "../../../helpers/constants";
import {
  messagesApiLoading,
  messagesApiSuccess,
  messagesApiError
} from "../api";

const getNewestMessages = ({ channelId }) => {
  return async dispatch => {
    try {
      dispatch(messagesApiLoading());

      const response = await api.getMessages({
        channelId
      });

      dispatch({
        type: GENERAL_ADD_NEWEST_MESSAGES,
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

export default getNewestMessages;
