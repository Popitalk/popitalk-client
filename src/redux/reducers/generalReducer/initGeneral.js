const initGeneral = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      ...payload.channels
    },
    users: {
      ...state.users,
      ...payload.users
    }
  };
};

export default initGeneral;
