const initGeneral = (state, payload) => {
  return {
    ...state,
    channels: {
      ...state.channels,
      ...payload.channels
    },
    rooms: {
      ...state.dmRooms,
      ...payload.rooms
    },
    users: {
      ...state.users,
      ...payload.users
    }
  };
};

export default initGeneral;
