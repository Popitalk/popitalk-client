import * as api from "../../../helpers/api";
// import { GENERAL_ADD_CHANNEL } from "../../../helpers/constants";
import { inviteApiLoading, inviteApiSuccess, inviteApiError } from "../api";
import { clear } from "../invite";
import { closeAllModals } from "../modal";

const inviteFriends = () => {
  return async (dispatch, getState) => {
    try {
      const { channelId, selectedFriends } = getState().inviteState;
      dispatch(inviteApiLoading());

      const response = await api.inviteFriends(channelId, selectedFriends);
      // dispatch({
      //   type: GENERAL_ADD_CHANNEL,
      //   payload: response.data
      // });
      dispatch(inviteApiSuccess());
      dispatch(closeAllModals());
      dispatch(clear());
    } catch (error) {
      dispatch(inviteApiError());
    }
  };
};

export default inviteFriends;
