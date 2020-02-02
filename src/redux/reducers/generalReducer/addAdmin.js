const addAdmin = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        users: state.channels[payload.channelId].users.filter(
          userId => userId !== payload.userId
        ),
        admins: [...state.channels[payload.channelId].admins, payload.userId]
      }
    }
  };
};

export default addAdmin;
