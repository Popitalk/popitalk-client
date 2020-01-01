import { SET_USER_INFO, USER_UPDATE, LOGOUT } from "../../helpers/constants";

const initialState = {
  loggedIn: false,
  validatedSession: false,
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
        loggedIn: true,
        validatedSession: true,
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
        ...(payload.firstName && { firstName: payload.firstName }),
        ...(payload.lastName && { lastName: payload.lastName }),
        ...(payload.dateOfBirth && { dateOfBirth: payload.dateOfBirth }),
        ...(payload.avatar !== undefined && {
          avatar: payload.avatar
        }),
        ...(payload.email && { email: payload.email }),
        ...(payload.emailVerified && { emailVerified: payload.emailVerified })
      };

    case LOGOUT:
      return {
        ...state,
        ...initialState,
        validatedSession: true
      };

    default:
      return state;
  }
};
