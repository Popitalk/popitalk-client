import { push } from "connected-react-router";
import * as api from "../../../helpers/api";
import { GENERAL_SET_ROOM_NAME } from "../../../helpers/constants";
import { roomApiLoading, roomApiSuccess, roomApiError } from "../api";
import { clear } from "../invite";
import { closeAllModals } from "../modal";

const updateRoom = (roomId, updateInfo) => {
  return async dispatch => {
    try {
      // const { selectedFriends } = getState().inviteState;
      dispatch(roomApiLoading());
      const response = await api.updateRoom(roomId, updateInfo);
      console.log("REXXXXXX", response);
      dispatch({
        type: GENERAL_SET_ROOM_NAME,
        payload: response.data
      });
      dispatch(roomApiSuccess());
    } catch (error) {
      dispatch(roomApiError());
    }
  };
};

export default updateRoom;
