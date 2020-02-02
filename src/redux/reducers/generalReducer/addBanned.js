const addBanned = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        users: state.channels[payload.channelId].users.filter(
          userId => userId !== payload.userId
        ),
        banned: [...state.channels[payload.channelId].banned, payload.userId]
      }
    }
  };
};

export default addBanned;
