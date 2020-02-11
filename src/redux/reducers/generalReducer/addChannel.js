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
        lastMessageId: payload.lastMessageId,
        lastMessageAt: payload.lastMessageAt,
        firstPostId: payload.firstPostId,
        createdAt: payload.createdAt,
        chatSettings: {
          capacity: 50,
          initialScroll: null
        },
        users: Array.isArray(payload.users)
          ? payload.users
              .filter(uid => !payload.admins.includes(uid))
              .filter(uid => !payload.banned.includes(uid))
          : payload.type === "channel"
          ? Object.keys(payload.users)
              .filter(uid => !payload.admins.includes(uid))
              .filter(uid => !payload.banned.includes(uid))
          : Object.keys(payload.users),
        admins: payload.admins || [],
        banned: payload.banned || []
      }
    },
    users: {
      ...state.users,
      ...payload.users
    },
    posts:
      payload.type !== "channel"
        ? state.posts
        : {
            ...state.posts,
            [payload.id]: state.posts[payload.id]
              ? _.uniqBy([...payload.posts, ...state.posts[payload.id]], "id")
              : payload.posts || []
          },
    comments:
      payload.type !== "channel"
        ? state.comments
        : {
            ...state.comments,
            ...payload.comments
          },
    messages: {
      ...state.messages,
      [payload.id]: state.messages[payload.id]
        ? state.messages[payload.id].length >= 50
          ? state.messages[payload.id]
          : _.uniqBy([...payload.messages, ...state.messages[payload.id]], "id")
        : payload.messages
    }
  };
};

export default addChannel;
