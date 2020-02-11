const setInitialScroll = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        chatSettings: {
          capacity: payload.initialScroll === null ? 50 : 250,
          initialScroll: payload.initialScroll
        }
      }
    }
  };
};

export default setInitialScroll;
