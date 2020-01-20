import { USERPAGE_SET_USER_INFO } from "../../helpers/constants";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  avatar: null,
  modalId: "",
  modalFirstName: "",
  modalLastName: "",
  modalUsername: "",
  modalAvatar: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERPAGE_SET_USER_INFO:
      return {
        ...state,
        ...(payload.modal
          ? {
              modalId: payload.id,
              modalFirstName: payload.firstName,
              modalLastName: payload.lastName,
              modalUsername: payload.username,
              modalAvatar: payload.avatar
            }
          : {
              id: payload.id,
              firstName: payload.firstName,
              lastName: payload.lastName,
              username: payload.username,
              avatar: payload.avatar
            })
      };

    default:
      return state;
  }
};
