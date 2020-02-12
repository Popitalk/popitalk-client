const addUser = (state, payload) => {
  return {
    ...state,
    users: {
      ...state.users,
      [payload.id]: {
        username: payload.username,
        firstName: payload.firstName,
        lastName: payload.lastName,
        avatar: payload.avatar
      }
    }
  };
};

export default addUser;
