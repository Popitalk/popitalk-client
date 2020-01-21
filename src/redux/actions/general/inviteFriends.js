import * as api from "../../../helpers/api";
import { GENERAL_ADD_MEMBERS } from "../../../helpers/constants";
import { inviteApiLoading, inviteApiSuccess, inviteApiError } from "../api";
import { clear } from "../invite";
import { closeAllModals } from "../modal";

const inviteFriends = () => {
  return async (dispatch, getState) => {
    try {
      const { channelId, selectedFriends } = getState().inviteState;
      dispatch(inviteApiLoading());

      const response = await api.inviteFriends(channelId, selectedFriends);
      console.log("RES", response);
      dispatch({
        type: GENERAL_ADD_MEMBERS,
        payload: response.data
      });
      console.log("LOLOL");
      dispatch(inviteApiSuccess());
      dispatch(closeAllModals());
      dispatch(clear());
    } catch (error) {
      console.log("ER", error);
      dispatch(inviteApiError());
    }
  };
};

export default inviteFriends;
