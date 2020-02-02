const updateChannel = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.id]: {
        ...state.channels[payload.id],
        ...payload
      }
    }
  };
};

export default updateChannel;
