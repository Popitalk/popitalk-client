import { push } from "connected-react-router";
import * as api from "../../../helpers/api";
// import { GENERAL_ADD_CHANNEL } from "../../../helpers/constants";
import { roomApiLoading, roomApiSuccess, roomApiError } from "../api";
import { setDraft } from "../general";
// import { clear } from "../invite";
// import { closeAllModals } from "../modal";

const sendMessage = ({ channelId, content, upload }) => {
  return async (dispatch, getState) => {
    try {
      // const { selectedFriends } = getState().inviteState;
      // dispatch(roomApiLoading());
      const response = await api.addMessage({ channelId, content, upload });
      // console.log("LKKK", response);
      // dispatch({
      //   type: GENERAL_ADD_CHANNEL,
      //   payload: response.data
      // });
      dispatch(setDraft(channelId, ""));
      // dispatch(roomApiSuccess());
    } catch (error) {
      // dispatch(roomApiError());
    }
  };
};

export default sendMessage;
