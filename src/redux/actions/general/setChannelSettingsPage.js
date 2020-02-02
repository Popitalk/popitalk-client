import { GENERAL_SET_CHANNEL_SETTINGS_PAGE } from "../../../helpers/constants";

const setChannelSettingsPage = status => ({
  type: GENERAL_SET_CHANNEL_SETTINGS_PAGE,
  payload: {
    status
  }
});

export default setChannelSettingsPage;
