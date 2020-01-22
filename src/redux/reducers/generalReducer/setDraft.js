const setDraft = (state, payload) => {
  return {
    ...state,
    drafts: {
      ...state.drafts,
      [payload.channelId]: payload.draft
    }
  };
};

export default setDraft;
