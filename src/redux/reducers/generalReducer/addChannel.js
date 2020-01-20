const addChannel = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.id]: {
        loaded: true,
        type: payload.type,
        name: payload.name,
        description: payload.description,
        icon: payload.icon,
        public: payload.public,
        ownerId: payload.ownerId,
        createdAt: payload.createdAt,
        users: Array.isArray(payload.users)
          ? payload.users
          : Object.keys(payload.users)
      }
    },
    users: {
      ...state.users,
      ...payload.users
    }
  };
};

export default addChannel;
