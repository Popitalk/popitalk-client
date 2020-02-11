const setLastMessageId = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        lastMessageId: payload.messageId
      }
    }
  };
};

export default setLastMessageId;
