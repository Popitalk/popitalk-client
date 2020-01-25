const initGeneral = (state, payload) => {
  let scrolled = {};
  Object.keys(payload.channels).forEach(channelId => {
    scrolled[channelId] = false;
  });
  return {
    ...state,
    channels: {
      ...state.channels,
      ...payload.channels
    },
    messages: {
      ...state.messages,
      ...payload.messages
    },
    drafts: {
      ...state.drafts,
      ...payload.drafts
    },
    users: {
      ...state.users,
      ...payload.users
    },
    scrolled: {
      ...state.scrolled,
      ...scrolled
    }
  };
};

export default initGeneral;
