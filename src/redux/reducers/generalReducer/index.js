import {
  GENERAL_INIT,
  GENERAL_ADD_CHANNEL,
  GENERAL_REMOVE_CHANNEL,
  GENERAL_ADD_MEMBERS,
  GENERAL_RESET,
  GENERAL_SET_ROOM_NAME
} from "../../../helpers/constants";
import initGeneral from "./initGeneral";
import addChannel from "./addChannel";
import removeChannel from "./removeChannel";
import addMembers from "./addMembers";
import setRoomName from "./setRoomName";

const initialState = {
  channels: {},
  users: {},
  defaultAvatar: "https://i.imgur.com/h1SSoyk.png",
  defaultIcon: "https://i.imgur.com/XoUrZls.png",
  groupRoomMemberLimit: 8
};

export default (state = initialState, { type, payload }) => {
  if (type === GENERAL_INIT) return initGeneral(state, payload);
  if (type === GENERAL_ADD_CHANNEL) return addChannel(state, payload);
  if (type === GENERAL_REMOVE_CHANNEL) return removeChannel(state, payload);
  if (type === GENERAL_ADD_MEMBERS) return addMembers(state, payload);
  if (type === GENERAL_SET_ROOM_NAME) return setRoomName(state, payload);
  if (type === GENERAL_RESET)
    return {
      ...state,
      ...initialState
    };

  return state;
};
