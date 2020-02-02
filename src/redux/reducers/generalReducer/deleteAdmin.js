const deleteAdmin = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        users: [...state.channels[payload.channelId].users, payload.userId],
        admins: state.channels[payload.channelId].admins.filter(
          userId => userId !== payload.userId
        )
      }
    }
  };
};

export default deleteAdmin;
