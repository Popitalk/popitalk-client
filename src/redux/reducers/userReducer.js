import uuidv4 from "uuid/v4";
import { SET_USER_INFO, USER_UPDATE, LOGOUT } from "../../helpers/constants";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  username: "",
  dateOfBirth: null,
  avatar: null,
  email: "",
  emailVerified: null,
  defaultAvatar: "https://i.imgur.com/7VbpwDl.png",
  updatedAvatar: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      return {
        ...state,
        id: payload.id,
        firstName: payload.firstName,
        lastName: payload.lastName,
        username: payload.username,
        dateOfBirth: payload.dateOfBirth,
        avatar: payload.avatar,
        email: payload.email,
        emailVerified: payload.emailVerified
      };

    case USER_UPDATE:
      return {
        ...state,
        ...(payload.username && { username: payload.username }),
        ...(payload.discriminator && { discriminator: payload.discriminator }),
        ...(payload.avatar !== undefined && {
          avatar: payload.avatar,
          updatedAvatar: uuidv4()
        }),
        ...(payload.status && { status: payload.status }),
        ...(payload.email && { email: payload.email }),
        ...(payload.emailVerified && { emailVerified: payload.emailVerified })
      };

    case LOGOUT:
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
};
