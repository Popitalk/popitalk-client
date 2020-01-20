const setRoomName = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      [payload.id]: {
        ...state.channels[payload.id],
        name: payload.name
      }
    }
  };
};

export default setRoomName;
