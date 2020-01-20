import {
  GENERAL_INIT,
  GENERAL_ADD_CHANNEL,
  GENERAL_RESET,
  GENERAL_SET_ROOM_NAME
} from "../../../helpers/constants";
import initGeneral from "./initGeneral";
import addChannel from "./addChannel";
import setRoomName from "./setRoomName";

const initialState = {
  channels: {},
  users: {},
  defaultAvatar: "https://i.imgur.com/7VbpwDl.png",
  defaultIcon: "https://i.imgur.com/7VbpwDl.png"
};

export default (state = initialState, { type, payload }) => {
  if (type === GENERAL_INIT) return initGeneral(state, payload);
  if (type === GENERAL_ADD_CHANNEL) return addChannel(state, payload);
  if (type === GENERAL_SET_ROOM_NAME) return setRoomName(state, payload);
  if (type === GENERAL_RESET)
    return {
      ...state,
      ...initialState
    };

  return state;
};
