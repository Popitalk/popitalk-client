// SITE VERSION
export const SITE_VERSION = "0.0.4";
// APISTATE
export const SET_API = "apiState/SET_API";
// WSSTATE
export const SET_WS = "wsState/SET_WS";
// MODALSTATE
export const PUSH_MODAL = "modalState/PUSH_MODAL";
export const POP_MODAL = "modalState/POP_MODAL";
export const POP_ALL_MODAL = "modalState/POP_ALL_MODAL";
export const CLOSE_MODAL = "modal/CLOSE_MODAL";
export const CLOSE_ALL_MODAL = "modal/CLOSE_ALL_MODAL";
export const PUSH_MODAL_PROFILE_MODAL = "modal/PUSH_MODAL_PROFILE_MODAL";
export const PUSH_MODAL_DELETE_MESSAGE = "modal/PUSH_MODAL_DELETE_MESSAGE";
export const PUSH_MODAL_DELETE_CHANNEL = "modal/PUSH_MODAL_DELETE_CHANNEL";
export const PUSH_MODAL_DELETE_POST = "modal/PUSH_MODAL_DELETE_POST";
// USERSTATE
export const SET_USER_INFO = "userState/SET_USER_INFO";
export const USER_UPDATE = "userState/USER_UPDATE";
export const USER_ADD_SENT_FRIEND_REQUEST =
  "userState/USER_ADD_SENT_FRIEND_REQUEST";
export const USER_DELETE_SENT_FRIEND_REQUEST =
  "userState/USER_DELETE_SENT_FRIEND_REQUEST";
export const USER_ADD_RECEIVED_FRIEND_REQUEST =
  "userState/USER_ADD_RECEIVED_FRIEND_REQUEST";
export const USER_DELETE_RECEIVED_FRIEND_REQUEST =
  "userState/USER_DELETE_RECEIVED_FRIEND_REQUEST";
export const LOGOUT = "userState/LOGOUT";
// MODAL_COMPONENTS
export const MODAL_CREATE_NEW_ACCOUNT = "modal/MODAL_CREATE_NEW_ACCOUNT";
export const MODAL_INVITE = "modal/MODAL_INVITE";
export const MODAL_CREATE_ROOM = "modal/MODAL_CREATE_ROOM";
export const MODAL_PROFILE = "modal/MODAL_PROFILE";
export const MODAL_IMAGE = "modal/MODAL_IMAGE";
export const MODAL_WATCHING = "modal/MODAL_WATCHING";
export const MODAL_MEMBERS = "modal/MODAL_MEMBERS";
export const MODAL_FOLLOWERS = "modal/MODAL_FOLLOWERS";
export const MODAL_LIST = "modal/MODAL_LIST";
export const MODAL_USER_SETTINGS = "modal/MODAL_USER_SETTINGS";
export const MODAL_EDIT_USER_SETTINGS = "modal/MODAL_EDIT_USER_SETTINGS";
export const MODAL_CHANGE_PASSWORD = "modal/MODAL_CHANGE_PASSWORD";
export const MODAL_BLOCKED_USERS = "modal/MODAL_BLOCKED_USERS";
export const MODAL_DELETE_MESSAGE = "modal/MODAL_DELETE_MESSAGE";
export const MODAL_ACCOUNT_SETTINGS = "modal/MODAL_ACCOUNT_SETTINGS";
export const MODAL_DELETE_ACCOUNT = "modal/MODAL_DELETE_ACCOUNT";
export const MODAL_DELETE_CHANNEL = "modal/MODAL_DELETE_CHANNEL";
export const MODAL_DELETE_POST = "modal/MODAL_DELETE_POST";
export const MODAL_ROOM_EXISTS = "modal/MODAL_ROOM_EXISTS";
export const MODAL_SOCIAL_SHARE = "modal/MODAL_SOCIAL_SHARE";
// USERPAGE_STATE
export const USERPAGE_SET_USER_INFO = "USERPAGE/USERPAGE_SET_USER_INFO";
// USERSEARCH_STATE
export const USERSEARCH_SET_USERS_INFO = "USERSEARCH/USERSEARCH_SET_USERS_INFO";
export const USERSEARCH_SET_API = "USERSEARCH/SET_API";
// GENERAL_STATE
export const GENERAL_INIT = "GENERAL/GENERAL_INIT";
export const GENERAL_ADD_CHANNEL = "GENERAL/ADD_CHANNEL";
export const GENERAL_REMOVE_CHANNEL = "GENERAL/REMOVE_CHANNEL";
export const GENERAL_ADD_USER = "GENERAL/ADD_USER";
export const GENERAL_ADD_MEMBERS = "GENERAL/ADD_MEMBERS";
export const GENERAL_ADD_MESSAGE = "GENERAL/ADD_MESSAGE";
export const GENERAL_ADD_MESSAGES = "GENERAL/ADD_MESSAGES";
export const GENERAL_ADD_NEWEST_MESSAGES = "GENERAL/ADD_NEWEST_MESSAGES";
export const GENERAL_ADD_POSTS = "GENERAL/ADD_POSTS";
export const GENERAL_ADD_COMMENTS = "GENERAL/ADD_COMMENTS";
export const GENERAL_ADD_SELF_COMMENT = "GENERAL/ADD_SELF_COMMENT";
export const GENERAL_ADD_NEW_POST = "GENERAL/ADD_NEW_POST";
export const GENERAL_ADD_OLD_POSTS = "GENERAL/ADD_OLD_POSTS";
export const GENERAL_UPDATE_CHANNEL = "GENERAL/UPDATE_CHANNEL";

export const GENERAL_ADD_POST_LIKE = "GENERAL/ADD_POST_LIKE";
export const GENERAL_ADD_COMMENT_LIKE = "GENERAL/ADD_COMMENT_LIKE";
export const GENERAL_DELETE_POST_LIKE = "GENERAL/DELETE_POST_LIKE";
export const GENERAL_DELETE_COMMENT_LIKE = "GENERAL/DELETE_COMMENT_LIKE";

export const GENERAL_SET_FIRST_POST_ID = "GENERAL/SET_FIRST_POST_ID";
export const GENERAL_SET_FIRST_COMMENT_ID = "GENERAL/SET_FIRST_COMMENT_ID";
export const GENERAL_REFRESH_POSTS = "GENERAL/REFRESH_POSTS";
export const GENERAL_RESET = "GENERAL/GENERAL_RESET";
export const GENERAL_CREATE_ROOM = "GENERAL/GENERAL_CREATE_ROOM";
export const GENERAL_SET_ROOM_NAME = "GENERAL/GENERAL_SET_ROOM_NAME";
export const GENERAL_SET_DRAFT = "GENERAL/SET_DRAFT";
export const GENERAL_SET_INITIAL_SCROLL = "GENERAL/SET_INITIAL_SCROLL";
export const GENERAL_SET_LAST_MESSAGE_ID = "GENERAL/SET_LAST_MESSAGE_ID";
export const GENERAL_SET_CHANNEL_SETTINGS_PAGE =
  "GENERAL/SET_CHANNEL_SETTINGS_PAGE";

export const GENERAL_ADD_ADMIN = "GENERAL/ADD_ADMIN";
export const GENERAL_DELETE_ADMIN = "GENERAL/DELETE_ADMIN";
export const GENERAL_ADD_BANNED = "GENERAL/ADD_BANNED";
export const GENERAL_DELETE_BANNED = "GENERAL/DELETE_BANNED";
// INVITE_STATE
export const INVITE_CLEAR = "INVITE/INVITE_CLEAR";
export const INVITE_ADD_CHANNEL = "INVITE/INVITE_ADD_CHANNEL";
export const INVITE_ADD_SELECTED_FRIENDS = "INVITE/INVITE_ADD_SELECTED_FRIENDS";
export const INVITE_REMOVE_SELECTED_FRIENDS =
  "INVITE/INVITE_REMOVE_SELECTED_FRIENDS";
// WS_EVENTS
export const WS_HELLO = "WS_HELLO";
export const WS_PING = "WS_PING";
export const WS_PONG = "WS_PONG";

export const WS_UPDATE_USER = "WS_UPDATE_USER";

export const WS_SEND_FRIEND_REQUEST = "WS_SEND_FRIEND_REQUEST";
export const WS_RECEIVE_FRIEND_REQUEST = "WS_RECEIVE_FRIEND_REQUEST";
export const WS_ACCEPT_FRIEND_REQUEST = "WS_ACCEPT_FRIEND_REQUEST";
export const WS_REJECT_FRIEND_REQUEST = "WS_REJECT_FRIEND_REQUEST";
export const WS_BLOCK_USER = "WS_BLOCK_USER";
export const WS_UNBLOCK_USER = "WS_UNBLOCK_USER";
export const WS_DELETE_FRIEND = "WS_DELETE_FRIEND";

export const WS_ADD_CHANNEL = "WS_ADD_CHANNEL";
export const WS_UPDATE_CHANNEL = "WS_UPDATE_CHANNEL";
export const WS_DELETE_CHANNEL = "WS_DELETE_CHANNEL";

export const WS_ADD_MEMBER = "WS_ADD_MEMBER";
export const WS_DELETE_MEMBER = "WS_DELETE_MEMBER";
export const WS_ADMIN_MEMBER = "WS_ADMIN_MEMBER";
export const WS_UNADMIN_MEMBER = "WS_UNADMIN_MEMBER";
export const WS_BAN_MEMBER = "WS_BAN_MEMBER";
export const WS_UNBAN_MEMBER = "WS_UNBAN_MEMBER";

export const WS_ADD_MESSAGE = "WS_ADD_MESSAGE";
export const WS_DELETE_MESSAGE = "WS_DELETE_MESSAGE";
export const WS_ADD_SEEN_MESSAGE = "WS_ADD_SEEN_MESSAGE";

export const WS_ADD_POST = "WS_ADD_POST";
export const WS_DELETE_POST = "WS_DELETE_POST";
export const WS_ADD_POST_LIKE = "WS_ADD_POST_LIKE";
export const WS_ADD_POST_COMMENT = "WS_ADD_POST_COMMENT";

export const WS_ADD_WATCHER = "WS_ADD_WATCHER";
export const WS_DELETE_WATCHER = "WS_DELETE_WATCHER";

export const WS_ADD_VIDEO = "WS_ADD_VIDEO";
export const WS_DELETE_VIDEO = "WS_DELETE_VIDEO";
export const WS_REORDER_QUEUE = "WS_REORDER_QUEUE";

export const WS_REQUEST_CHANNEL_FOLLOW = "WS_REQUEST_CHANNEL_FOLLOW";
export const WS_ACCEPT_CHANNEL_FOLLOW_REQUEST =
  "WS_ACCEPT_CHANNEL_FOLLOW_REQUEST";
export const WS_REJECT_CHANNEL_FOLLOW_REQUEST =
  "WS_REJECT_CHANNEL_FOLLOW_REQUEST";

export const WS_ADD_NOTIFICATION = "WS_ADD_NOTIFICATION";
export const WS_DELETE_NOTIFICATION = "WS_DELETE_NOTIFICATION";

export const VIDEO_RESULTS_PER_PAGE = 24;

export const WS_EVENTS = {
  HELLO: "HELLO",
  PING: "PING",
  PONG: "PONG",
  USER: {
    DELETE_SENT_FRIEND_REQUEST: "DELETE_SENT_FRIEND_REQUEST",
    ADD_RECEIVED_FRIEND_REQUEST: "ADD_RECEIVED_FRIEND_REQUEST",
    DELETE_RECEIVED_FRIEND_REQUEST: "DELETE_RECEIVED_FRIEND_REQUEST",
    ADD_FRIEND: "ADD_FRIEND",
    DELETE_FRIEND: "DELETE_FRIEND",
    ADD_BLOCKER: "ADD_BLOCKER",
    DELETE_BLOCKER: "DELETE_BLOCKER",
    SUBSCRIBE_CHANNEL: "SUBSCRIBE_CHANNEL",
    UNSUBSCRIBE_CHANNEL: "UNSUBSCRIBE_CHANNEL",
    ADD_CHANNEL: "ADD_CHANNEL"
  },
  CHANNEL: {
    SET_FRIEND_ONLINE: "SET_FRIEND_ONLINE",
    SET_FRIEND_OFFLINE: "SET_FRIEND_OFFLINE",
    DELETE_FRIEND: "DELETE_FRIEND",
    UPDATE_CHANNEL: "UPDATE_CHANNEL",
    DELETE_CHANNEL: "DELETE_CHANNEL",
    ADD_MEMBER: "ADD_MEMBER",
    ADD_MEMBERS: "ADD_MEMBERS",
    DELETE_MEMBER: "DELETE_MEMBER",
    ADD_ADMIN: "ADD_ADMIN",
    DELETE_ADMIN: "DELETE_ADMIN",
    ADD_BAN: "ADD_BAN",
    DELETE_BAN: "DELETE_BAN",
    ADD_MESSAGE: "ADD_MESSAGE",
    DELETE_MESSAGE: "DELETE_MESSAGE",
    ADD_POST: "ADD_POST",
    DELETE_POST: "DELETE_POST",
    ADD_POST_LIKE: "ADD_POST_LIKE",
    DELETE_POST_LIKE: "DELETE_POST_LIKE",
    ADD_COMMENT: "ADD_COMMENT",
    DELETE_COMMENT: "DELETE_COMMENT",
    ADD_COMMENT_LIKE: "ADD_COMMENT_LIKE",
    DELETE_COMMENT_LIKE: "DELETE_COMMENT_LIKE",
    ADD_VIEWER: "ADD_VIEWER",
    DELETE_VIEWER: "DELETE_VIEWER"
  },
  USER_CHANNEL: {
    JOIN_CHANNEL: "JOIN_CHANNEL",
    LEAVE_CHANNEL: "LEAVE_CHANNEL",
    BEFRIEND: "BEFRIEND",
    UNFRIEND: "UNFRIEND",
    BLOCK_FRIEND: "BLOCK_FRIEND"
  },
  USERS_CHANNELS: {
    UPDATE_USER: "UPDATE_USER"
  },
  VIDEO_CONTROL: {
    ADD_VIDEO: "ADD_VIDEO",
    DELETE_VIDEO: "DELETE_VIDEO",
    REORDER_QUEUE: "REORDER_QUEUE"
  }
};
