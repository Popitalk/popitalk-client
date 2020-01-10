import { GENERAL_INIT, GENERAL_RESET } from "../../../helpers/constants";
import initGeneral from "./initGeneral";

const initialState = {
  channels: {},
  rooms: {},
  users: {},
  defaultAvatar: "https://i.imgur.com/7VbpwDl.png",
  defaultIcon: "https://i.imgur.com/7VbpwDl.png"
};

export default (state = initialState, { type, payload }) => {
  if (type === GENERAL_INIT) return initGeneral(state, payload);
  if (type === GENERAL_RESET)
    return {
      ...state,
      ...initialState
    };

  return state;
};
