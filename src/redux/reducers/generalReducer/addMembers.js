const addMembers = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        users: [
          ...state.channels[payload.channelId].users,
          ...Object.keys(payload.users)
        ]
      }
    },
    users: {
      ...state.users,
      ...payload.users
    }
  };
};

export default addMembers;
