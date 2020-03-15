import { createReducer } from "@reduxjs/toolkit";
import {
  validateSession,
  login,
  logout,
  deleteAccount,
  getChannel,
  addChannel,
  addChannelWs,
  updateChannel,
  updateChannelWs,
  deleteChannel,
  deleteChannelWs,
  addAdmin,
  addAdminWs,
  deleteAdmin,
  deleteAdminWs,
  addBan,
  addBanWs,
  deleteBan,
  deleteBanWs,
  addMemberWs,
  addMembersWs,
  deleteMemberWs,
  deleteFriend,
  deleteFriendWs,
  blockUser,
  addBlockerWs,
  createRoom,
  leaveRoom,
  updateRoom,
  addMessage,
  addMessageWs,
  getMessages,
  getLatestMessages,
  deleteMessage,
  deleteMessageWs,
  addPost,
  addPostWs,
  deletePost,
  deletePostWs,
  followChannel,
  unfollowChannel,
  acceptFriendRequest,
  setInitialScroll,
  addFriendWs,
  inviteFriends,
  searchVideos,
  friendOnlineWs,
  friendOfflineWs
} from "../actions";
// import { inviteFriends } from "../../helpers/api";

const initialState = {};

const R_initChannels = (state, { payload }) => {
  if (payload.channels) {
    let newChannels = {};

    Object.entries(payload.channels).forEach(([channelId, channel]) => {
      newChannels[channelId] = {
        ...channel,
        chatSettings: {
          capacity: 50,
          initialScroll: null
        },
        videoSearch: {
          source: "youtube",
          terms: "",
          results: [],
          page: 1,
          searched: false
        }
      };
    });

    return newChannels;
  } else {
    return {};
  }
};

const R_addChannel = (state, { payload }) => {
  const channelId = payload.id || payload.channelId;
  let { channel } = payload;

  state[channelId] = {
    ...state[channelId],
    ...channel,
    loaded: true,
    chatSettings: {
      capacity: 50,
      initialScroll: null
    },
    videoSearch: {
      source: "youtube",
      terms: "",
      results: [],
      page: 1,
      searched: false
    }
  };
};

const R_updateChannel = (state, { payload }) => {
  const channelId = payload.id || payload.channelId;

  state[channelId] = {
    ...state[channelId],
    ...payload.updatedChannel
  };
};
const R_updateLastMessageInfo = (state, { payload }) => {
  if (!state[payload.channelId].firstMessageId) {
    state[payload.channelId].firstMessageId = payload.id;
  }
  state[payload.channelId].lastMessageId = payload.id;
  state[payload.channelId].lastMessageAt = payload.createdAt;
  state[payload.channelId].lastMessagesUpdateByWebsockets = true;
  state[payload.channelId].initialScroll = null;
};
const R_updateLastMessageInfoWs = (state, { payload }) => {
  if (!state[payload.channelId].firstMessageId) {
    state[payload.channelId].firstMessageId = payload.id;
  }
  state[payload.channelId].lastMessageId = payload.id;
  state[payload.channelId].lastMessageAt = payload.createdAt;
  state[payload.channelId].lastMessagesUpdateByWebsockets = true;
  state[payload.channelId].initialScroll = null;
};

const R_updateLastMessageUpdate = (state, { payload }) => {
  state[payload.channelId].lastMessagesUpdateByWebsockets = false;
};
const R_updateLastMessageUpdateLatest = (state, { payload }) => {
  state[payload.channelId].lastMessagesUpdateByWebsockets = false;
  state[payload.channelId] = {
    capacity: 50,
    initialScroll: null
  };
};

const R_deletedMessageUpdate = (state, { payload }) => {
  state[payload.channelId].firstMessageId = payload.firstMessageId;
  state[payload.channelId].lastMessageId = payload.lastMessageId;
  state[payload.channelId].lastMessageAt = payload.lastMessageAt;
};

const R_deletedPostUpdate = (state, { payload }) => {
  state[payload.channelId].firstPostId = payload.firstPostId;
  state[payload.channelId].lastPostId = payload.lastPostId;
  state[payload.channelId].lastPostAt = payload.lastPostAt;
};

const R_updatePostInfo = (state, { payload }) => {
  if (!state[payload.channelId].firstPostId) {
    state[payload.channelId].firstPostId = payload.id;
  }
  state[payload.channelId].lastPostId = payload.id;
  state[payload.channelId].lastPostAt = payload.createdAt;
};

const R_addMember = (state, { payload }) => {
  state[payload.channelId].members.push(payload.userId);
};

const R_addMembers = (state, { payload }) => {
  state[payload.channelId].members.push(...payload.userIds);
};

const R_deleteMember = (state, { payload }) => {
  state[payload.channelId].members = state[payload.channelId].members.filter(
    userId => userId !== payload.userId
  );
};

const R_addAdmin = (state, { payload }) => {
  state[payload.channelId].admins.push(payload.userId);
};

const R_addAdminWs = (state, { payload }) => {
  state[payload.channelId].admins.push(payload.userId);

  if (payload.banned) {
    state[payload.channelId].banned = payload.banned;
  }
};

const R_deleteAdmin = (state, { payload }) => {
  state[payload.channelId].admins = state[payload.channelId].admins.filter(
    userId => userId !== payload.userId
  );
};

const R_addBan = (state, { payload }) => {
  state[payload.channelId].members = state[payload.channelId].members.filter(
    userId => userId !== payload.userId
  );
  state[payload.channelId].admins = state[payload.channelId].admins.filter(
    userId => userId !== payload.userId
  );
  state[payload.channelId].banned.push(payload.userId);
};

const R_deleteBan = (state, { payload }) => {
  state[payload.channelId].banned = state[payload.channelId].banned.filter(
    userId => userId !== payload.userId
  );
};

const R_deleteChannel = (state, { payload }) => {
  const channelId = payload.id || payload.channelId;

  if (channelId) {
    delete state[channelId];
  }
};

const R_updateChannelInitialScroll = (state, { payload }) => {
  if (state[payload.channelId]) {
    state[payload.channelId].capacity =
      payload.initialScroll === null ? 50 : 250;
    state[payload.channelId].initialScroll = payload.initialScroll;
  }
};

const R_updateSearchedVideos = (state, { payload }) => {
  state[payload.channelId].videoSearch = {
    source: payload.source,
    terms: payload.terms,
    results: [
      ...state[payload.channelId].videoSearch.results,
      ...payload.results
    ],
    page: payload.page ? payload.page : 1,
    searched: true
  };
};

const R_updateFriendRoomToOnline = (state, { payload }) => {
  state[payload.channelId].online = true;
};

const R_updateFriendRoomToOffline = (state, { payload }) => {
  state[payload.channelId].online = false;
};

const R_resetState = () => initialState;

// See what the server returns when inviting friends
// Only add users? Or update channel?
// Only add users, so that data is in sync?

export default createReducer(initialState, {
  [validateSession.fulfilled]: R_initChannels,
  [login.fulfilled]: R_initChannels,
  [getChannel.fulfilled]: R_addChannel,
  [addChannel.fulfilled]: R_addChannel,
  [createRoom.fulfilled]: R_addChannel,
  [acceptFriendRequest.fulfilled]: R_addChannel,
  [addFriendWs]: R_addChannel,
  [addChannelWs]: R_addChannel,
  [updateChannel.fulfilled]: R_updateChannel,
  [updateRoom.fulfilled]: R_updateChannel,
  [updateChannelWs]: R_updateChannel,
  [deleteChannel.fulfilled]: R_deleteChannel,
  [deleteChannelWs]: R_deleteChannel,
  [leaveRoom.fulfilled]: R_deleteChannel,
  [deleteChannelWs]: R_deleteChannel,
  [deleteFriend.fulfilled]: R_deleteChannel,
  [deleteFriendWs]: R_deleteChannel,
  [blockUser.fulfilled]: R_deleteChannel,
  [addBlockerWs]: R_deleteChannel,
  [inviteFriends.fulfilled]: R_addMembers,
  [addMembersWs]: R_addMembers,
  [followChannel.fulfilled]: R_addMember,
  [addMemberWs]: R_addMember,
  [unfollowChannel.fulfilled]: R_deleteMember,
  [deleteMemberWs]: R_deleteMember,
  [addAdmin.fulfilled]: R_addAdmin,
  [addAdminWs]: R_addAdminWs,
  [deleteAdmin.fulfilled]: R_deleteAdmin,
  [deleteAdminWs]: R_deleteAdmin,
  [addBan.fulfilled]: R_addBan,
  [addBanWs]: R_addBan,
  [deleteBan.fulfilled]: R_deleteBan,
  [deleteBanWs]: R_deleteBan,
  [addMessage.fulfilled]: R_updateLastMessageInfo,
  [addMessageWs]: R_updateLastMessageInfoWs,
  [getMessages.fulfilled]: R_updateLastMessageUpdate,
  [getLatestMessages.fulfilled]: R_updateLastMessageUpdateLatest,
  [deleteMessage.fulfilled]: R_deletedMessageUpdate,
  [deleteMessageWs]: R_deletedMessageUpdate,
  [addPost.fulfilled]: R_updatePostInfo,
  [addPostWs]: R_updatePostInfo,
  [deletePost.fulfilled]: R_deletedPostUpdate,
  [deletePostWs]: R_deletedPostUpdate,
  [setInitialScroll]: R_updateChannelInitialScroll,
  [searchVideos.fulfilled]: R_updateSearchedVideos,
  [friendOnlineWs]: R_updateFriendRoomToOnline,
  [friendOfflineWs]: R_updateFriendRoomToOffline,
  [logout.fulfilled]: R_resetState,
  [deleteAccount.fulfilled]: R_resetState
});
