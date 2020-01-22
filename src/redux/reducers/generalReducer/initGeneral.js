const initGeneral = (state, payload) => {
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
    }
  };
};

export default initGeneral;
