import { push } from "connected-react-router";
import * as api from "../../../helpers/api";
import { GENERAL_ADD_CHANNEL } from "../../../helpers/constants";
import { inviteApiLoading, inviteApiSuccess, inviteApiError } from "../api";
import { clear } from "../invite";
import { closeAllModals } from "../modal";

const createRoom = () => {
  return async (dispatch, getState) => {
    try {
      const { selectedFriends } = getState().inviteState;
      dispatch(inviteApiLoading());
      const response = await api.createRoom(selectedFriends);
      dispatch({
        type: GENERAL_ADD_CHANNEL,
        payload: response.data
      });
      dispatch(inviteApiSuccess());
      dispatch(closeAllModals());
      dispatch(push(`/rooms/${response.data.id}`));
      dispatch(clear());
    } catch (error) {
      dispatch(inviteApiError());
    }
  };
};

export default createRoom;
