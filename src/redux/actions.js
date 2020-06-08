import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import * as api from "../helpers/api";
import {
  PUSH_MODAL,
  PUSH_MODAL_PROFILE_MODAL,
  PUSH_MODAL_DELETE_MESSAGE,
  PUSH_MODAL_DELETE_CHANNEL,
  POP_MODAL,
  POP_ALL_MODAL,
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_CREATE_ROOM,
  MODAL_INVITE,
  MODAL_PROFILE,
  MODAL_WATCHING,
  MODAL_MEMBERS,
  MODAL_FOLLOWERS,
  MODAL_USER_SETTINGS,
  MODAL_EDIT_USER_SETTINGS,
  MODAL_CHANGE_PASSWORD,
  MODAL_BLOCKED_USERS,
  MODAL_IMAGE,
  CLOSE_ALL_MODAL,
  MODAL_DELETE_MESSAGE,
  MODAL_ACCOUNT_SETTINGS,
  MODAL_DELETE_ACCOUNT,
  MODAL_DELETE_CHANNEL,
  MODAL_ROOM_EXISTS
} from "../helpers/constants";

/* -------------------------------------------------------------------------- */
/*                                   GENERAL                                  */
/* -------------------------------------------------------------------------- */
export const wsConnect = createAction("general/wsConnect");
export const wsDisconnect = createAction("general/wsDisconnect");

export const validateSession = createAsyncThunk(
  "general/validateSession",
  async () => {
    const response = await api.validateSession();
    return response.data;
  }
);
export const login = createAsyncThunk("general/login", async loginInfo => {
  try {
    const response = await api.login(loginInfo);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error("Incorrect login info");
    } else {
      throw new Error("Couldn't log in");
    }
  }
});
export const logout = createAsyncThunk("general/logout", async () => {
  await api.logout();
  return {};
});
export const register = createAsyncThunk(
  "general/register",
  async registerInfo => {
    try {
      await api.register(registerInfo);
      return {
        usernameOrEmail: registerInfo.username,
        password: registerInfo.password
      };
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Couldn't register");
      }
    }
  }
);
export const deleteAccount = createAsyncThunk(
  "general/deleteAccount",
  async () => {
    await api.deleteAccount();
  }
);
/* -------------------------------------------------------------------------- */
/*                                    SELF                                    */
/* -------------------------------------------------------------------------- */

export const updateUser = createAsyncThunk(
  "self/updateUser",
  async (updateInfo, { getState }) => {
    try {
      const {
        firstName,
        lastName,
        dateOfBirth,
        email,
        avatar
      } = getState().self;

      const formData = new FormData();

      if (updateInfo.firstName && updateInfo.firstName !== firstName) {
        formData.append("firstName", updateInfo.firstName);
      }
      if (updateInfo.lastName && updateInfo.lastName !== lastName) {
        formData.append("lastName", updateInfo.lastName);
      }
      if (updateInfo.dateOfBirth && updateInfo.dateOfBirth !== dateOfBirth) {
        formData.append("dateOfBirth", updateInfo.dateOfBirth);
      }
      if (updateInfo.email && updateInfo.email !== email) {
        formData.append("email", updateInfo.email);
      }
      if (updateInfo.password && updateInfo.password) {
        formData.append("password", updateInfo.password);
      }
      if (updateInfo.newPassword) {
        formData.append("newPassword", updateInfo.newPassword);
      }
      if (updateInfo.avatar === null) {
        formData.append("removeAvatar", true);
      } else if (updateInfo.avatar && updateInfo.avatar !== avatar) {
        formData.append("avatar", updateInfo.avatar);
      }

      const response = await api.updateUser(formData);

      return { ...response.data };
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error();
      }
    }
  }
);

/* -------------------------------------------------------------------------- */
/*                                RELATIONSHIPS                               */
/* -------------------------------------------------------------------------- */
export const sendFriendRequest = createAsyncThunk(
  "relationships/sendFriendRequest",
  async userId => {
    const response = await api.updateUserRelationships({
      userId,
      type: "friend"
    });
    return response.data;
  }
);
export const cancelFriendRequest = createAsyncThunk(
  "relationships/cancelFriendRequest",
  async userId => {
    const response = await api.updateUserRelationships({
      userId,
      type: "unfriend"
    });
    return response.data;
  }
);
export const acceptFriendRequest = createAsyncThunk(
  "relationships/acceptFriendRequest",
  async userId => {
    const response = await api.updateUserRelationships({
      userId,
      type: "friend"
    });
    return response.data;
  }
);
export const rejectFriendRequest = createAsyncThunk(
  "relationships/rejectFriendRequest",
  async userId => {
    const response = await api.updateUserRelationships({
      userId,
      type: "unfriend"
    });
    return response.data;
  }
);
export const deleteFriend = createAsyncThunk(
  "relationships/deleteFriend",
  async userId => {
    const response = await api.updateUserRelationships({
      userId,
      type: "unfriend"
    });
    return response.data;
  }
);

export const blockUser = createAsyncThunk(
  "relationships/blockUser",
  async userId => {
    const response = await api.updateUserRelationships({
      userId,
      type: "block"
    });
    return response.data;
  }
);
export const unblockUser = createAsyncThunk(
  "relationships/unblockUser",
  async userId => {
    const response = await api.updateUserRelationships({
      userId,
      type: "unblock"
    });
    return response.data;
  }
);

export const deleteSentFriendRequestWs = createAction(
  "relationships/deleteSentFriendRequest/ws"
);
export const addReceivedFriendRequestWs = createAction(
  "relationships/addReceivedFriendRequest/ws"
);
export const deleteReceivedFriendRequestWs = createAction(
  "relationships/deleteReceivedFriendRequestWs/ws"
);

export const addFriendWs = createAction("relationships/addFriend/ws");
export const deleteFriendWs = createAction("relationships/deleteFriend/ws");
export const addBlockerWs = createAction("relationships/addBlocker/ws");
export const deleteBlockerWs = createAction("relationships/deleteBlocker/ws");

// ACCEPT FR OR ADDFRIENDWS -> ADD CHANNEL (channel, self, chat settings, users, ...etc)
// DELETE FRIEND OR BLOCKUSER OR ADD BLOCKER -> DELETE CHANNEL
/* -------------------------------------------------------------------------- */
/*                                  CHANNELS                                  */
/* -------------------------------------------------------------------------- */

export const getChannel = createAsyncThunk(
  "channels/getChannel",
  async channelId => {
    const response = await api.getChannel(channelId);
    return response.data;
  }
);

export const addChannel = createAsyncThunk(
  "channels/addChannel",
  async channelInfo => {
    try {
      const formData = new FormData();
      formData.append("name", channelInfo.name);
      formData.append("description", channelInfo.description);
      formData.append("public", channelInfo.public);
      // formData.append("categories", channelInfo.categories);
      if (channelInfo.icon) {
        formData.append("icon", channelInfo.icon);
      }

      const response = await api.createChannel(formData);

      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error();
      }
    }
  }
);
export const addChannelWs = createAction("channels/addChannel/ws");

export const updateChannel = createAsyncThunk(
  "channels/updateChannel",
  async (updateInfo, { getState }) => {
    try {
      const channelId = updateInfo.channelId;
      const channel = getState().channels[channelId];

      const formData = new FormData();
      if (updateInfo.name !== channel.name) {
        formData.append("name", updateInfo.name);
      }
      if (updateInfo.description !== channel.description) {
        formData.append("description", updateInfo.description);
      }
      if (updateInfo.public !== channel.public) {
        formData.append("public", updateInfo.public);
      }
      if (updateInfo.icon === null) {
        formData.append("removeIcon", true);
      } else if (updateInfo.icon && updateInfo.icon !== channel.icon) {
        formData.append("icon", updateInfo.icon);
      }
      const response = await api.updateChannel(channelId, formData);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error();
      }
    }
  }
);
export const updateChannelWs = createAction("channels/updateChannel/ws");

export const deleteChannel = createAsyncThunk(
  "channels/deleteChannel",
  async channelId => {
    const response = await api.deleteChannel(channelId);
    return response.data;
  }
);
export const deleteChannelWs = createAction("channels/deleteChannel/ws");

export const addAdmin = createAsyncThunk(
  "channels/addAdmin",
  async updateInfo => {
    const response = await api.updateMember({ ...updateInfo, type: "admin" });
    return response.data;
  }
);
export const addAdminWs = createAction("channels/addAdmin/ws");

export const deleteAdmin = createAsyncThunk(
  "channels/deleteAdmin",
  async updateInfo => {
    const response = await api.updateMember({ ...updateInfo, type: "unadmin" });
    return response.data;
  }
);
export const deleteAdminWs = createAction("channels/deleteAdmin/ws");

export const addBan = createAsyncThunk("channels/addBan", async updateInfo => {
  const response = await api.updateMember({ ...updateInfo, type: "ban" });
  return response.data;
});
export const addBanWs = createAction("channels/addBan/ws");

export const deleteBan = createAsyncThunk(
  "channels/deleteBan",
  async updateInfo => {
    const response = await api.updateMember({ ...updateInfo, type: "unban" });
    return response.data;
  }
);
export const deleteBanWs = createAction("channels/deleteBan/ws");

export const addMemberWs = createAction("channels/addMember/ws");
export const addMembersWs = createAction("channels/addMembers/ws");
export const deleteMemberWs = createAction("channels/deleteMember/ws");

export const leaveRoom = createAsyncThunk(
  "channels/leaveRoom",
  async roomId => {
    const response = await api.leaveRoom(roomId);
    console.log("RES", response.data);
    return response.data;
  }
);
export const updateRoom = createAsyncThunk(
  "channels/updateRoom",
  async updateInfo => {
    const response = await api.updateRoom(updateInfo);
    return response.data;
  }
);

export const followChannel = createAsyncThunk(
  "channels/followChannel",
  async channelInfo => {
    const response = await api.followChannel(channelInfo);
    return response.data;
  }
);
export const unfollowChannel = createAsyncThunk(
  "channels/unfollowChannel",
  async channelId => {
    const response = await api.unfollowChannel(channelId);
    return response.data;
  }
);

export const setInitialScroll = createAction("chatSettings/setInitialScroll");

export const friendOnlineWs = createAction("channels/friendOnline/ws");
export const friendOfflineWs = createAction("channels/friendOffline/ws");
/* -------------------------------------------------------------------------- */
/*                                    USERS                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  MESSAGES                                  */
/* -------------------------------------------------------------------------- */
export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async messagesInfo => {
    const response = await api.getMessages(messagesInfo);

    return {
      channelId: messagesInfo.channelId,
      messages: response.data,
      direction: messagesInfo.afterMessageId ? "bottom" : "top"
    };
  }
);
export const getLatestMessages = createAsyncThunk(
  "messages/getLatestMessages",
  async messagesInfo => {
    const response = await api.getMessages(messagesInfo);

    return {
      channelId: messagesInfo.channelId,
      messages: response.data,
      direction: messagesInfo.afterMessageId ? "bottom" : "top"
    };
  }
);

export const addMessage = createAsyncThunk(
  "messages/addMessage",
  async (message, { getState }) => {
    const response = await api.addMessage(message);
    const payload = response.data;
    const { capacity } = getState().channels[payload.channelId].chatSettings;
    return { ...payload, capacity };
  }
);
export const addMessageWs = createAction("messages/addMessage/ws");

export const deleteMessage = createAsyncThunk(
  "messages/deleteMessage",
  async message => {
    const { messageId } = message;
    const response = await api.deleteMessage(messageId);
    return response.data;
  }
);
export const deleteMessageWs = createAction("messages/deleteMessage/ws");

/* -------------------------------------------------------------------------- */
/*                                    POSTS                                   */
/* -------------------------------------------------------------------------- */
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (channelId, { getState }) => {
    const posts = getState().posts[channelId];
    const beforePostId = posts[posts.length - 1].id;

    const response = await api.getPosts({
      channelId,
      beforePostId
    });

    return response.data;
  }
);

export const addPost = createAsyncThunk("posts/addPost", async postInfo => {
  const response = await api.addPost(postInfo);
  return response.data;
});
export const addPostWs = createAction("posts/addPost/ws");

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async postInfo => {
    const { postId } = postInfo;
    const response = await api.deletePost(postId);
    return response.data;
  }
);
export const deletePostWs = createAction("posts/deletePost/ws");

export const flushPosts = createAction("posts/flushPosts");

export const likePost = createAsyncThunk(
  "posts/likePost",
  async (likeInfo, { getState }) => {
    const { id: ownId } = getState().self;
    const { postId } = likeInfo;
    const response = await api.addLike({ postId });
    return { ...response.data, ownId };
  }
);
export const likePostWs = createAction("posts/likePost/ws");

export const unlikePost = createAsyncThunk(
  "posts/unlikePost",
  async (likeInfo, { getState }) => {
    const { id: ownId } = getState().self;
    const { postId } = likeInfo;
    const response = await api.deleteLike({ postId });
    return { ...response.data, ownId };
  }
);
export const unlikePostWs = createAction("posts/unlikePost/ws");

export const incrementCommentCountWs = createAction(
  "posts/incrementCommentCount/ws"
);
export const decrementCommentCountWs = createAction(
  "posts/decrementCommentCount/ws"
);
/* -------------------------------------------------------------------------- */
/*                                  COMMENTS                                  */
/* -------------------------------------------------------------------------- */
export const getComments = createAsyncThunk(
  "comments/getComments",
  async (postId, { getState }) => {
    const comments = getState().comments[postId];
    const limit = Math.floor(comments.length / 3) * 3 + 3;

    const response = await api.getComments({
      postId,
      limit
    });

    return { postId, comments: response.data };
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async commentInfo => {
    const response = await api.addComment(commentInfo);
    return response.data;
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async commentInfo => {
    const { commentId } = commentInfo;
    const response = await api.deleteComment(commentId);
    return response.data;
  }
);

export const likeComment = createAsyncThunk(
  "comments/likeComment",
  async (likeInfo, { getState }) => {
    const { id: ownId } = getState().self;
    const { commentId } = likeInfo;
    const response = await api.addLike({ commentId });
    return { ...response.data, ownId };
  }
);

export const unlikeComment = createAsyncThunk(
  "comments/unlikeComment",
  async (likeInfo, { getState }) => {
    const { id: ownId } = getState().self;
    const { commentId } = likeInfo;
    const response = await api.deleteLike({ commentId });
    return { ...response.data, ownId };
  }
);
/* -------------------------------------------------------------------------- */
/*                                   DRAFTS                                   */
/* -------------------------------------------------------------------------- */
export const setChatDraft = createAction("chatDrafts/setChatDraft");
export const setPostDraft = createAction("postDrafts/setPostDraft");
/* -------------------------------------------------------------------------- */
/*                                   INVITE                                   */
/* -------------------------------------------------------------------------- */
export const addInviteChannel = createAction("invite/addInviteChannel");
export const addInviteFriend = createAction("invite/addInviteFriend");
export const removeInviteFriend = createAction("invite/removeInviteFriend");

export const createRoom = createAsyncThunk(
  "invite/createRoom",
  async selectedFriends => {
    const response = await api.createRoom(selectedFriends);
    return response.data;
  }
);

export const inviteFriends = createAsyncThunk(
  "invite/inviteFriends",
  async inviteInfo => {
    const { channelId, selectedFriends } = inviteInfo;
    const response = await api.inviteFriends(channelId, selectedFriends);
    return response.data;
  }
);
/* -------------------------------------------------------------------------- */
/*                                 USERSEARCH                                 */
/* -------------------------------------------------------------------------- */
export const searchUsers = createAsyncThunk(
  "userSearch/searchUsers",
  async (username, { getState }) => {
    const { blocked, blockers } = getState().relationships;
    const blocks = [...blocked, ...blockers];

    const response = await api.searchUsers(username);

    return { users: response.data.filter(user => !blocks.includes(user.id)) };
  }
);

export const clearUserSearch = createAction("userSearch/clear");

export const searchUsersWs = createAction(searchUsers.fulfilled.type);

/* -------------------------------------------------------------------------- */
/*                                 VIDEOSEARCH                                */
/* -------------------------------------------------------------------------- */

export const searchVideos = createAsyncThunk(
  "videoSearch/searchVideos",
  async searchInfo => {
    const { source, terms, page, channelId } = searchInfo;
    const formattedTerms = terms.replace(/ /g, "+");

    const response = await api.searchVideos(source, formattedTerms, page);

    console.log("RESSSS", response);

    return { channelId, source, terms, page, results: response.data };
  }
);

export const addVideo = createAsyncThunk(
  "videoSearch/addVideo",
  async videoInfo => {
    const { channelId, videoId } = videoInfo;
    const response = await api.addVideo(channelId, videoId);

    console.log("REVVV", response);

    return response.data;
  }
);

/* -------------------------------------------------------------------------- */
/*                                CHANNELSEARCH                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 USERPROFILE                                */
/* -------------------------------------------------------------------------- */

export const getUserInfo = createAsyncThunk(
  "userProfile/getUserInfo",
  async (userId, { getState }) => {
    const { blockers } = getState().relationships;
    if (blockers.includes(userId)) throw new Error();

    const response = await api.getUser(userId);
    return response.data;
  }
);
export const getUserInfoModal = createAsyncThunk(
  "userProfile/getUserInfoModal",
  async (userId, { getState }) => {
    const { blockers } = getState().relationships;
    if (blockers.includes(userId)) throw new Error();

    const response = await api.getUser(userId);
    return response.data;
  }
);
/* -------------------------------------------------------------------------- */
/*                                    MODAL                                   */
/* -------------------------------------------------------------------------- */

export const closeModal = createAction("modal/close");
export const closeAllModals = createAction("modal/closeAll");
export const closeModalFinal = createAction("modal/closeModalFinal");

export const openCreateNewAccountModal = createAction("modal/open", () => ({
  payload: { component: MODAL_CREATE_NEW_ACCOUNT }
}));
export const openInviteModal = createAction("modal/open", channelId => ({
  payload: { component: MODAL_INVITE, channelId }
}));
export const openCreateRoomModal = createAction("modal/open", () => ({
  payload: { component: MODAL_CREATE_ROOM }
}));
export const openProfileModal = createAction("modal/open", userId => ({
  payload: { component: MODAL_PROFILE, userId }
}));
export const openDeleteMessageModal = createAction(
  "modal/open",
  ({ channelId, messageId }) => ({
    payload: { component: MODAL_DELETE_MESSAGE, channelId, messageId }
  })
);
export const openDeleteChannelModal = createAction("modal/open", channelId => ({
  payload: { component: MODAL_DELETE_CHANNEL, channelId }
}));
export const openWatchingModal = createAction("modal/open", () => ({
  payload: { component: MODAL_WATCHING }
}));
export const openFollowersModal = createAction("modal/open", channelId => ({
  payload: { component: MODAL_FOLLOWERS, channelId }
}));
export const openImageModal = createAction("modal/open", () => ({
  payload: { component: MODAL_IMAGE }
}));
export const openUserSettingsModal = createAction("modal/open", () => ({
  payload: { component: MODAL_USER_SETTINGS }
}));
export const openEditUserSettingsModal = createAction("modal/open", () => ({
  payload: { component: MODAL_EDIT_USER_SETTINGS }
}));
export const openChangePasswordModal = createAction("modal/open", () => ({
  payload: { component: MODAL_CHANGE_PASSWORD }
}));
export const openBlockedUsersModal = createAction("modal/open", () => ({
  payload: { component: MODAL_BLOCKED_USERS }
}));
export const openAccountSettingsModal = createAction("modal/open", () => ({
  payload: { component: MODAL_ACCOUNT_SETTINGS }
}));
export const openDeleteAccountModal = createAction("modal/open", () => ({
  payload: { component: MODAL_DELETE_ACCOUNT }
}));
export const openRoomExistsModal = createAction("modal/open", () => ({
  payload: { component: MODAL_ROOM_EXISTS }
}));

/* -------------------------------------------------------------------------- */
/*                                    UI                                      */
/* -------------------------------------------------------------------------- */

export const toggleLeftPanel = createAction("ui/toggleLeftPanel");
export const setLeftPanelActiveTabChannels = createAction(
  "ui/setLeftPanelActiveTabChannels"
);
export const setLeftPanelActiveTabFriends = createAction(
  "ui/setLeftPanelActiveTabFriends"
);
