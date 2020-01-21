import { push } from "connected-react-router";
import * as api from "../../../helpers/api";
import { GENERAL_REMOVE_CHANNEL } from "../../../helpers/constants";
import { roomApiLoading, roomApiSuccess, roomApiError } from "../api";

const leaveRoom = roomId => {
  return async (dispatch, getState) => {
    try {
      // const { channels } = getState().generalState;
      // const selfRoomId = Object.entries(channels).find(
      //   ([roomId2, room]) => room.type === "self"
      // )[0];
      dispatch(roomApiLoading());
      const response = await api.leaveRoom(roomId);
      dispatch({
        type: GENERAL_REMOVE_CHANNEL,
        payload: {
          channelId: roomId
        }
      });
      dispatch(roomApiSuccess());
      // dispatch(push(`/rooms/${selfRoomId}`));
      dispatch(push(`/channels/following`));
    } catch (error) {
      dispatch(roomApiError());
    }
  };
};

export default leaveRoom;
