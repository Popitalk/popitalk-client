const setChannelSettingsPage = (state, payload) => {
  return {
    ...state,
    channelSettingsPage: payload.status
  };
};

export default setChannelSettingsPage;
