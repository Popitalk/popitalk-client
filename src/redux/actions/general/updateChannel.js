import _ from "lodash";
import * as api from "../../../helpers/api";
import { GENERAL_UPDATE_CHANNEL } from "../../../helpers/constants";
import {
  channelCreateApiLoading,
  channelCreateApiSuccess,
  channelCreateApiError,
  channelCreateApiSuccess2
} from "../api";

const updateChannel = (channelId, updateInfo) => {
  return async (dispatch, getState) => {
    try {
      console.log("HELLO THERE");
      dispatch(channelCreateApiLoading());

      const { channels, defaultIcon } = getState().generalState;

      const formData = new FormData();

      console.log(updateInfo);
      if (updateInfo.name !== channels[channelId].name) {
        formData.append("name", updateInfo.name);
      }
      if (updateInfo.description !== channels[channelId].description) {
        formData.append("description", updateInfo.description);
      }
      if (updateInfo.public !== channels[channelId].public) {
        formData.append("public", updateInfo.public);
      }
      if (updateInfo.icon === null) {
        formData.append("removeIcon", true);
      } else if (
        updateInfo.icon &&
        updateInfo.icon !== channels[channelId].icon
      ) {
        formData.append("icon", updateInfo.icon);
      }

      const formObject = Object.fromEntries(formData);
      console.log("FORM", formObject);

      if (
        _.isEmpty(formObject) ||
        (!formObject.name &&
          !formObject.description &&
          !formObject.public &&
          !formObject.icon &&
          !formObject.removeIcon)
      ) {
        dispatch(channelCreateApiSuccess2());
        return;
      }

      const response = await api.updateChannel(channelId, formData);

      dispatch({
        type: GENERAL_UPDATE_CHANNEL,
        payload: response.data
      });

      dispatch(channelCreateApiSuccess2());
    } catch (error) {
      if (error.response) {
        dispatch(channelCreateApiError(error.response.data.message));
      } else {
        dispatch(channelCreateApiError());
      }
    }
  };
};

export default updateChannel;
