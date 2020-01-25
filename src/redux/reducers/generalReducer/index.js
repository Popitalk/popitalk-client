import {
  GENERAL_INIT,
  GENERAL_ADD_CHANNEL,
  GENERAL_REMOVE_CHANNEL,
  GENERAL_ADD_MEMBERS,
  GENERAL_ADD_MESSAGES,
  GENERAL_RESET,
  GENERAL_SET_ROOM_NAME,
  GENERAL_SET_DRAFT,
  GENERAL_SET_SCROLLED
} from "../../../helpers/constants";
import initGeneral from "./initGeneral";
import addChannel from "./addChannel";
import removeChannel from "./removeChannel";
import addMembers from "./addMembers";
import addMessages from "./addMessages";
import setRoomName from "./setRoomName";
import setDraft from "./setDraft";
import setScrolled from "./setScrolled";

const initialState = {
  channels: {},
  scrolled: {},
  users: {},
  drafts: {},
  messages: {},
  defaultAvatar: "https://i.imgur.com/h1SSoyk.png",
  defaultIcon: "https://i.imgur.com/XoUrZls.png",
  groupRoomMemberLimit: 8
};

export default (state = initialState, { type, payload }) => {
  if (type === GENERAL_INIT) return initGeneral(state, payload);
  if (type === GENERAL_ADD_CHANNEL) return addChannel(state, payload);
  if (type === GENERAL_REMOVE_CHANNEL) return removeChannel(state, payload);
  if (type === GENERAL_ADD_MEMBERS) return addMembers(state, payload);
  if (type === GENERAL_ADD_MESSAGES) return addMessages(state, payload);
  if (type === GENERAL_SET_ROOM_NAME) return setRoomName(state, payload);
  if (type === GENERAL_SET_DRAFT) return setDraft(state, payload);
  if (type === GENERAL_SET_SCROLLED) return setScrolled(state, payload);
  if (type === GENERAL_RESET)
    return {
      ...state,
      ...initialState
    };

  return state;
};
