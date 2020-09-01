import { createReducer } from "@reduxjs/toolkit";
import arrayMove from "array-move";
import {
  validateSession,
  refreshSession,
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
  searchVideos,
  friendOnlineWs,
  friendOfflineWs,
  addRoomMembers,
  setPlaying,
  setPaused,
  addVideo,
  deleteVideo,
  swapVideos,
  setLastMessageSeen,
  addVideoWs,
  deleteVideoWs,
  swapVideosWs
} from "../actions";

import { extendedCapacity } from "./messages";

const initialState = {};

const defaultVideoSearch = {
  source: "youtube",
  terms: "",
  results: [],
  totalResults: 1,
  page: 1,
  searched: false
};

const R_initChannels = (state, { payload }) => {
  if (payload.channels) {
    let newChannels = {};

    Object.entries(payload.channels).forEach(([channelId, channel]) => {
      newChannels[channelId] = {
        queue: [],
        ...channel,
        chatSettings: {
          capacity: 50,
          initialScroll: null
        },
        videoSearch: {
          source: "youtube",
          terms: "",
          results: [],
          totalResults: 1,
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

const R_refreshChannels = (state, { payload }) => {
  if (payload.channels) {
    Object.entries(payload.channels).forEach(([channelId, channel]) => {
      state[channelId] = {
        ...state[channelId],
        ...channel
      };
    });
  }
};

const R_addChannel = (state, { payload }) => {
  const channelId = payload.id || payload.channelId;
  let { channel, queue } = payload;

  state[channelId] = {
    ...state[channelId],
    ...channel,
    queue: queue ? queue : [],
    loaded: true,
    chatSettings: {
      capacity: 50,
      initialScroll: null
    },
    videoSearch: defaultVideoSearch
  };
};

const R_updateChannel = (state, { payload }) => {
  const channelId = payload.id || payload.channelId;

  state[channelId] = {
    ...state[channelId],
    ...payload.updatedChannel
  };
};

const R_setLastMessageSeen = (state, { payload }) => {
  if (state[payload.channelId].lastMessageIsNew)
    state[payload.channelId].lastMessageIsNew = false;
  if (state[payload.channelId].chatNotifications)
    state[payload.channelId].chatNotifications = null;
};

const R_updateLastMessageInfoPending = (state, { meta }) => {
  state[meta.arg.channelId].lastMessageReceivedByServer = false;
};

const R_updateLastMessageInfo = (state, { payload }) => {
  if (!state[payload.channelId].firstMessageId) {
    state[payload.channelId].firstMessageId = payload.id;
  }
  state[payload.channelId].lastMessageId = payload.id;
  state[payload.channelId].lastMessageAt = payload.createdAt;
  state[payload.channelId].lastMessageUsername = payload.author.username;
  state[payload.channelId].lastMessageContent = payload.content;
  state[payload.channelId].lastMessageReceivedByServer = true;
  state[payload.channelId].lastMessagesUpdateByWebsockets = false;
  state[payload.channelId].initialScroll = null;
};
const R_updateLastMessageInfoWs = (state, { payload }) => {
  if (!state[payload.channelId].firstMessageId) {
    state[payload.channelId].firstMessageId = payload.id;
  }
  state[payload.channelId].lastMessageId = payload.id;
  state[payload.channelId].lastMessageAt = payload.createdAt;
  state[payload.channelId].lastMessageUsername = payload.author.username;
  state[payload.channelId].lastMessageContent = payload.content;
  state[payload.channelId].lastMessageIsNew = true;
  state[payload.channelId].lastMessageReceivedByServer = true;
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
  state[payload.channel.id].members = payload.channel.members;
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
      payload.initialScroll === null ? 50 : extendedCapacity;
    state[payload.channelId].initialScroll = payload.initialScroll;
  }
};

const R_updateSearchedVideos = (state, { payload }) => {
  let results = [];
  if (payload.next) {
    results = [
      ...state[payload.channelId].videoSearch.results,
      ...payload.results
    ];
  } else {
    results = [...payload.results];
  }

  state[payload.channelId].videoSearch = {
    source: payload.source,
    terms: payload.terms,
    results: results,
    totalResults: payload.totalResults,
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

const R_addVideo = (state, { payload }) => {
  state[payload.channelId].queue.push({
    ...payload.video,
    channelId: payload.channelId
  });
};

const R_deleteVideo = (state, { payload }) => {
  state[payload.channelId].queue.splice(payload.queuePosition, 1);

  R_updateChannel(state, { payload });
};

const R_swapVideos = (state, { payload }) => {
  const channelId = payload.channelId;

  state[channelId].queue = arrayMove(
    state[channelId].queue,
    payload.oldIndex,
    payload.newIndex
  );

  R_updateChannel(state, { payload });
};

// See what the server returns when inviting friends
// Only add users? Or update channel?
// Only add users, so that data is in sync?

export default createReducer(initialState, {
  [validateSession.fulfilled]: R_initChannels,
  [refreshSession.fulfilled]: R_refreshChannels,
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
  [addRoomMembers.fulfilled]: R_addMembers,
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
  [addMessage.pending]: R_updateLastMessageInfoPending,
  [addMessage.fulfilled]: R_updateLastMessageInfo,
  [addMessageWs.pending]: R_updateLastMessageInfoPending,
  [addMessageWs]: R_updateLastMessageInfoWs,
  [setLastMessageSeen]: R_setLastMessageSeen,
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
  [deleteAccount.fulfilled]: R_resetState,
  [setPlaying.fulfilled]: R_updateChannel,
  [setPaused.fulfilled]: R_updateChannel,
  [addVideo.fulfilled]: R_addVideo,
  [addVideoWs]: R_addVideo,
  [deleteVideo.fulfilled]: R_deleteVideo,
  [deleteVideoWs]: R_deleteVideo,
  [swapVideos.fulfilled]: R_swapVideos,
  [swapVideosWs]: R_swapVideos
});

// import * as actions from "../actions";
// export default createReducer(initialState, {
//   [actions.validateSession.fulfilled]: R_initChannels,
//   [actions.login.fulfilled]: R_initChannels,
//   [actions.getChannel.fulfilled]: R_addChannel,
//   [actions.addChannel.fulfilled]: R_addChannel,
//   [actions.createRoom.fulfilled]: R_addChannel,
//   [actions.acceptFriendRequest.fulfilled]: R_addChannel,
//   [actions.addFriendWs]: R_addChannel,
//   [actions.addChannelWs]: R_addChannel,
//   [actions.updateChannel.fulfilled]: R_updateChannel,
//   [actions.updateRoom.fulfilled]: R_updateChannel,
//   [actions.updateChannelWs]: R_updateChannel,
//   [actions.deleteChannel.fulfilled]: R_deleteChannel,
//   [actions.deleteChannelWs]: R_deleteChannel,
//   [actions.leaveRoom.fulfilled]: R_deleteChannel,
//   [actions.deleteChannelWs]: R_deleteChannel,
//   [actions.deleteFriend.fulfilled]: R_deleteChannel,
//   [actions.deleteFriendWs]: R_deleteChannel,
//   [actions.blockUser.fulfilled]: R_deleteChannel,
//   [actions.addBlockerWs]: R_deleteChannel,
//   [actions.inviteFriends.fulfilled]: R_addMembers,
//   [actions.addMembersWs]: R_addMembers,
//   [actions.followChannel.fulfilled]: R_addMember,
//   [actions.addMemberWs]: R_addMember,
//   [actions.unfollowChannel.fulfilled]: R_deleteMember,
//   [actions.deleteMemberWs]: R_deleteMember,
//   [actions.addAdmin.fulfilled]: R_addAdmin,
//   [actions.addAdminWs]: R_addAdminWs,
//   [actions.deleteAdmin.fulfilled]: R_deleteAdmin,
//   [actions.deleteAdminWs]: R_deleteAdmin,
//   [actions.addBan.fulfilled]: R_addBan,
//   [actions.addBanWs]: R_addBan,
//   [actions.deleteBan.fulfilled]: R_deleteBan,
//   [actions.deleteBanWs]: R_deleteBan,
//   [actions.addMessage.fulfilled]: R_updateLastMessageInfo,
//   [actions.addMessageWs]: R_updateLastMessageInfoWs,
//   [actions.getMessages.fulfilled]: R_updateLastMessageUpdate,
//   [actions.getLatestMessages.fulfilled]: R_updateLastMessageUpdateLatest,
//   [actions.deleteMessage.fulfilled]: R_deletedMessageUpdate,
//   [actions.deleteMessageWs]: R_deletedMessageUpdate,
//   [actions.addPost.fulfilled]: R_updatePostInfo,
//   [actions.addPostWs]: R_updatePostInfo,
//   [actions.deletePost.fulfilled]: R_deletedPostUpdate,
//   [actions.deletePostWs]: R_deletedPostUpdate,
//   [actions.setInitialScroll]: R_updateChannelInitialScroll,
//   [actions.searchVideos.fulfilled]: R_updateSearchedVideos,
//   [actions.friendOnlineWs]: R_updateFriendRoomToOnline,
//   [actions.friendOfflineWs]: R_updateFriendRoomToOffline,
//   [actions.logout.fulfilled]: R_resetState,
//   [actions.deleteAccount.fulfilled]: R_resetState
// });
