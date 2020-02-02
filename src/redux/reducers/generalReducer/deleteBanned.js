const deleteBanned = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        users: [...state.channels[payload.channelId].users, payload.userId],
        banned: state.channels[payload.channelId].banned.filter(
          userId => userId !== payload.userId
        )
      }
    }
  };
};

export default deleteBanned;
