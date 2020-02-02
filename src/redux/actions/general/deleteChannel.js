import { push } from "connected-react-router";
import * as api from "../../../helpers/api";
import { GENERAL_REMOVE_CHANNEL } from "../../../helpers/constants";
import { roomApiLoading, roomApiSuccess, roomApiError } from "../api";
import { closeAllModals } from "../modal";

const deleteChannel = channelId => {
  return async dispatch => {
    try {
      // dispatch(roomApiLoading());
      await api.deleteChannel(channelId);
      dispatch({
        type: GENERAL_REMOVE_CHANNEL,
        payload: { channelId }
      });
      // dispatch(roomApiSuccess());

      dispatch(closeAllModals());
      dispatch(push(`/channels/following`));
    } catch (error) {
      // dispatch(roomApiError());
    }
  };
};

export default deleteChannel;
