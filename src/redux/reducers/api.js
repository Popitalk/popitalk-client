import {
  login,
  register,
  createRoom,
  inviteFriends,
  deleteAccount,
  updateUser,
  searchUsers,
  addChannel,
  updateChannel,
  deleteChannel,
  updateRoom,
  addAdmin,
  deleteAdmin,
  addBan,
  deleteBan,
  leaveRoom,
  addMessage,
  getMessages,
  getLatestMessages,
  deleteMessage,
  addPost,
  getPosts,
  deletePost,
  likePost,
  unlikePost,
  addComment,
  getComments,
  deleteComment,
  likeComment,
  unlikeComment,
  followChannel,
  unfollowChannel,
  getUserInfo,
  getUserInfoModal
} from "../actions";

const formatType = type =>
  type
    .split("/")
    .slice(0, 2)
    .join("/");

const idsOfActions = {
  [formatType(register.fulfilled.type)]: "registerApi",
  [formatType(login.fulfilled.type)]: "loginApi",
  [formatType(deleteAccount.fulfilled.type)]: "deleteAccountApi",
  [formatType(updateUser.fulfilled.type)]: "userUpdateApi",
  [formatType(searchUsers.fulfilled.type)]: "userSearchApi",
  [formatType(addChannel.fulfilled.type)]: "channel",
  [formatType(updateChannel.fulfilled.type)]: "channel",
  [formatType(deleteChannel.fulfilled.type)]: "channel",
  [formatType(leaveRoom.fulfilled.type)]: "channel",
  [formatType(addAdmin.fulfilled.type)]: "manageUsers",
  [formatType(deleteAdmin.fulfilled.type)]: "manageUsers",
  [formatType(addBan.fulfilled.type)]: "manageUsers",
  [formatType(deleteBan.fulfilled.type)]: "manageUsers",
  [formatType(createRoom.fulfilled.type)]: "invite",
  [formatType(inviteFriends.fulfilled.type)]: "invite",
  [formatType(updateRoom.fulfilled.type)]: "room",
  [formatType(followChannel.fulfilled.type)]: "followChannel",
  [formatType(unfollowChannel.fulfilled.type)]: "followChannel",
  // MESSAGES
  [formatType(addMessage.fulfilled.type)]: "addMessage",
  [formatType(getMessages.fulfilled.type)]: "messages",
  [formatType(getLatestMessages.fulfilled.type)]: "messages",
  [formatType(deleteMessage.fulfilled.type)]: "deleteMessage",
  // POSTS
  [formatType(addPost.fulfilled.type)]: "addPost",
  [formatType(getPosts.fulfilled.type)]: "posts",
  [formatType(deletePost.fulfilled.type)]: "deletePost",
  [formatType(likePost.fulfilled.type)]: "post",
  [formatType(unlikePost.fulfilled.type)]: "post",
  // COMMENTS
  [formatType(addComment.fulfilled.type)]: "addComment",
  [formatType(getComments.fulfilled.type)]: "comments",
  [formatType(deleteComment.fulfilled.type)]: "deleteComment",
  [formatType(likeComment.fulfilled.type)]: "comment",
  [formatType(unlikeComment.fulfilled.type)]: "comment",
  [formatType(getUserInfo.fulfilled.type)]: "userPage",
  [formatType(getUserInfoModal.fulfilled.type)]: "userPageModal"
};

const initialState = Object.values(idsOfActions)
  .map(id => ({ [id]: { status: "initial" } }))
  .reduce((obj, item) => ({ ...obj, ...item }));

export default (state = initialState, { type, meta, error }) => {
  if (!meta) return state;

  const actionId = idsOfActions[formatType(type)];

  if (!actionId) return state;

  const currentStatus = state[actionId].status;
  const args = meta.arg;

  if (type.endsWith("pending") && currentStatus !== "loading") {
    return {
      ...state,
      [actionId]: { status: "loading", loading: true, args }
    };
  } else if (type.endsWith("fulfilled") && currentStatus === "loading") {
    return {
      ...state,
      [actionId]: { status: "success", args }
    };
  } else if (type.endsWith("rejected") && currentStatus === "loading") {
    return {
      ...state,
      [actionId]: {
        status: "error",
        error: error.message || true,
        args
      }
    };
  }

  return state;
};

// loginApiLoading: false,
// loginApiError: null,
// registerApiLoading: false,
// registerApiError: null,
// userRelationshipsApiLoading: false,
// userRelationshipsApiError: null,
// userRelationshipsApiUserId: null,
// userApiLoading: false,
// userApiError: null,
// userApiUserId: null,
// userPageApiLoading: false,
// userPageApiError: null,
// userPageApiUserId: null,
// channelApiLoading: false,
// channelApiError: null,
// channelApiChannelId: null,
// roomApiLoading: false,
// roomApiError: null,
// roomApiChannelId: null,
// chatMessagesApiLoading: false,
// chatMessagesApiError: null,
// chatUploadApiLoading: false,
// chatUploadApiError: null,
// deleteMessageApiLoading: false,
// deleteMessageApiError: null,
// postsApiLoading: false,
// postsApiError: null,
// postApiLoading: false,
// postApiError: null,
// commentApiLoading: false,
// commentApiError: null,
// videoQueueApiLoading: false,
// videoQueueApiError: null,
// userUpdateApiLoading: false,
// userUpdateApiError: null,
// channelUpdateApiLoading: false,
// channelUpdateApiError: null,
// manageUsersApiLoading: false,
// manageUsersApiError: null,
// categoriesApiLoading: false,
// categoriesApiError: null,
// inviteApiLoading: false,
// inviteApiError: null,
// userSearchApiLoading: false,
// userSearchApiError: null,
// channelSearchApiLoading: false,
// channelSearchApiError: null,
// videoSearchApiLoading: false,
// videoSearchApiError: null,
// notificationsApiLoading: false,
// notificationsApiError: null,
// followingChannelsApiLoading: false,
// followingChannelsApirror: null,
// channelCardApiLoading: false,
// channelCardApiError: null,
// channelsPanelDiscoverApiLoading: false,
// channelsPanelDiscoverApiError: null,
// shareApiLoading: false,
// shareApiError: null,
// forgotPasswordApiLoading: false,
// forgotPasswordApiError: null,
// deleteAccountApiLoading: false,
// deleteAccountApiError: null
