import {
  GENERAL_INIT,
  GENERAL_SET_CHANNEL_SETTINGS_PAGE,
  GENERAL_ADD_CHANNEL,
  GENERAL_REMOVE_CHANNEL,
  GENERAL_ADD_MEMBERS,
  GENERAL_ADD_MESSAGES,
  GENERAL_RESET,
  GENERAL_SET_ROOM_NAME,
  GENERAL_SET_DRAFT,
  GENERAL_SET_SCROLLED,
  GENERAL_ADD_OLD_POSTS,
  GENERAL_ADD_NEW_POST,
  GENERAL_ADD_COMMENTS,
  GENERAL_ADD_SELF_COMMENT,
  GENERAL_REFRESH_POSTS,
  GENERAL_SET_FIRST_COMMENT_ID,
  GENERAL_SET_FIRST_POST_ID,
  GENERAL_ADD_POST_LIKE,
  GENERAL_ADD_COMMENT_LIKE,
  GENERAL_DELETE_POST_LIKE,
  GENERAL_DELETE_COMMENT_LIKE,
  GENERAL_UPDATE_CHANNEL,
  GENERAL_ADD_ADMIN,
  GENERAL_DELETE_ADMIN,
  GENERAL_ADD_BANNED,
  GENERAL_DELETE_BANNED
} from "../../../helpers/constants";
import initGeneral from "./initGeneral";
import addChannel from "./addChannel";
import removeChannel from "./removeChannel";
import addMembers from "./addMembers";
import addMessages from "./addMessages";
import addOldPosts from "./addOldPosts";
import setRoomName from "./setRoomName";
import setDraft from "./setDraft";
import setScrolled from "./setScrolled";
import addNewPost from "./addNewPost";
import addComments from "./addComments";
import addSelfComment from "./addSelfComment";
import refreshPosts from "./refreshPosts";
import setFirstCommentId from "./setFirstCommentId";
import setFirstPostId from "./setFirstPostId";

import addPostLike from "./addPostLike";
import addCommentLike from "./addCommentLike";
import deletePostLike from "./deletePostLike";
import deleteCommentLike from "./deleteCommentLike";
import setChannelSettingsPage from "./setChannelSettingsPage";
import updateChannel from "./updateChannel";

import addAdmin from "./addAdmin";
import deleteAdmin from "./deleteAdmin";
import addBanned from "./addBanned";
import deleteBanned from "./deleteBanned";

const initialState = {
  channels: {},
  scrolled: {},
  users: {},
  drafts: {},
  messages: {},
  posts: {},
  comments: {},
  defaultAvatar: "https://i.imgur.com/h1SSoyk.png",
  defaultIcon: "https://i.imgur.com/XoUrZls.png",
  groupRoomMemberLimit: 8,
  channelSettingsPage: false
};

export default (state = initialState, { type, payload }) => {
  if (type === GENERAL_INIT) return initGeneral(state, payload);
  if (type === GENERAL_ADD_CHANNEL) return addChannel(state, payload);
  if (type === GENERAL_REMOVE_CHANNEL) return removeChannel(state, payload);
  if (type === GENERAL_UPDATE_CHANNEL) return updateChannel(state, payload);
  if (type === GENERAL_ADD_MEMBERS) return addMembers(state, payload);
  if (type === GENERAL_ADD_MESSAGES) return addMessages(state, payload);
  if (type === GENERAL_SET_ROOM_NAME) return setRoomName(state, payload);
  if (type === GENERAL_SET_DRAFT) return setDraft(state, payload);
  if (type === GENERAL_SET_SCROLLED) return setScrolled(state, payload);
  if (type === GENERAL_ADD_OLD_POSTS) return addOldPosts(state, payload);
  if (type === GENERAL_ADD_NEW_POST) return addNewPost(state, payload);
  if (type === GENERAL_ADD_COMMENTS) return addComments(state, payload);
  if (type === GENERAL_ADD_SELF_COMMENT) return addSelfComment(state, payload);
  if (type === GENERAL_REFRESH_POSTS) return refreshPosts(state, payload);
  if (type === GENERAL_SET_FIRST_POST_ID) return setFirstPostId(state, payload);
  if (type === GENERAL_SET_FIRST_COMMENT_ID)
    return setFirstCommentId(state, payload);

  if (type === GENERAL_ADD_POST_LIKE) return addPostLike(state, payload);
  if (type === GENERAL_ADD_COMMENT_LIKE) return addCommentLike(state, payload);
  if (type === GENERAL_DELETE_POST_LIKE) return deletePostLike(state, payload);
  if (type === GENERAL_DELETE_COMMENT_LIKE)
    return deleteCommentLike(state, payload);

  if (type === GENERAL_ADD_ADMIN) return addAdmin(state, payload);
  if (type === GENERAL_DELETE_ADMIN) return deleteAdmin(state, payload);
  if (type === GENERAL_ADD_BANNED) return addBanned(state, payload);
  if (type === GENERAL_DELETE_BANNED) return deleteBanned(state, payload);

  if (type === GENERAL_SET_CHANNEL_SETTINGS_PAGE)
    return setChannelSettingsPage(state, payload);

  if (type === GENERAL_RESET)
    return {
      ...state,
      ...initialState
    };

  return state;
};
