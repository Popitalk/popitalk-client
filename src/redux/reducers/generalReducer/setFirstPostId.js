const setFirstPostId = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        firstPostId: payload.firstPostId
      }
    }
  };
};

export default setFirstPostId;
