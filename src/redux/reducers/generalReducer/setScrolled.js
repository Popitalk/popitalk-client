const setScrolled = (state, payload) => {
  return {
    ...state,
    scrolled: {
      ...state.scrolled,
      [payload.channelId]: payload.scrolled
    }
  };
};

export default setScrolled;
