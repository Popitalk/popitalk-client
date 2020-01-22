import _ from "lodash";

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
        firstMessageId: payload.firstMessageId,
        lastMessageAt: payload.lastMessageAt,
        createdAt: payload.createdAt,
        users: Array.isArray(payload.users)
          ? payload.users
          : Object.keys(payload.users)
      }
    },
    users: {
      ...state.users,
      ...payload.users
    },
    messages: {
      ...state.messages,
      [payload.id]: state.messages[payload.id]
        ? _.uniqBy([...payload.messages, ...state.messages[payload.id]], "id")
        : payload.messages
    }
  };
};

export default addChannel;
