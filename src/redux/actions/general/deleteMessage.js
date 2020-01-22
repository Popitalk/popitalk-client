import * as api from "../../../helpers/api";
// import { GENERAL_REMOVE_CHANNEL } from "../../../helpers/constants";
import { roomApiLoading, roomApiSuccess, roomApiError } from "../api";

const deleteMessage = messageId => {
  return async (dispatch, getState) => {
    try {
      // const { channels } = getState().generalState;
      // const selfRoomId = Object.entries(channels).find(
      //   ([roomId2, room]) => room.type === "self"
      // )[0];
      // dispatch(roomApiLoading());
      const response = await api.deleteMessage(messageId);
      // dispatch({
      //   type: GENERAL_REMOVE_CHANNEL,
      //   payload: {
      //     channelId: roomId
      //   }
      // });
      // dispatch(roomApiSuccess());
    } catch (error) {
      // dispatch(roomApiError());
    }
  };
};

export default deleteMessage;
