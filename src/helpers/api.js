import axios from "axios";

const axiosConfig =
  process.env.NODE_ENV !== "production"
    ? {}
    : {
        baseURL: "https://api.popitalk.com",
        withCredentials: true
      };

const ax = axios.create(axiosConfig);
// SESSION

export const register = registerInfo => {
  return ax.post("api/users", registerInfo);
};

export const login = loginInfo => {
  return ax.post("/api/sessions/login", loginInfo);
};

export const validateSession = () => {
  return ax.get("/api/sessions/validate");
};

export const refreshSession = () => {
  const refreshData = ax.get("/api/sessions/refresh");
  console.log({ refreshData });
  return refreshData;
};

export const logout = () => {
  return ax.post("/api/sessions/logout");
};

// SELF AND RELATIONSHIPS

export const updateUser = updateInfo => {
  return ax.put("/api/users", updateInfo);
};

export const deleteAccount = () => {
  return ax.delete("/api/users/");
};

export const blockUser = blockedId => {
  return ax.post("/api/users/blocks", { blockedId });
};

export const unblockUser = blockedId => {
  return ax.delete(`/api/users/blocks/${blockedId}`);
};

export const sendFriendRequest = requesteeId => {
  return ax.post("/api/users/friendRequests", { requesteeId });
};

export const cancelFriendRequest = requesteeId => {
  return ax.delete(`/api/users/friendRequests/${requesteeId}/cancel`);
};

export const rejectFriendRequest = requesterId => {
  return ax.delete(`/api/users/friendRequests/${requesterId}/reject`);
};

export const acceptFriendRequest = requesterId => {
  return ax.post("/api/users/friends", { requesterId });
};

export const unfriendUser = friendId => {
  return ax.delete(`/api/users/friends/${friendId}`);
};

// USERS

export const getUser = userId => {
  return ax.get(`/api/users/${userId}`);
};

export const searchUsers = (username, page) => {
  return ax.get(
    `/api/users?username=${username}${page ? `&page=${page}` : ""}`
  );
};

// CHANNELS

export const updateChannel = (channelId, updateInfo) => {
  return ax.put(`/api/channels/${channelId}`, updateInfo);
};

export const getChannel = channelId => {
  return ax.get(`/api/channels/${channelId}`);
};

export const createChannel = channelInfo => {
  return ax.post("/api/channels", channelInfo);
};

export const deleteChannel = channelId => {
  return ax.delete(`/api/channels/${channelId}`);
};

export const createRoom = userIds => {
  return ax.post("/api/channels/rooms", { userIds });
};

export const updateRoom = (roomId, updateInfo) => {
  return ax.put(`/api/channels/rooms/${roomId}`, updateInfo);
};

export const leaveRoom = roomId => {
  return ax.delete(`/api/channels/rooms/${roomId}`);
};

export const setPlaying = (channelId, videoObj) => {
  return ax.put(`/api/channels/${channelId}/play`, videoObj);
};

export const setPaused = (channelId, videoObj) => {
  return ax.put(`/api/channels/${channelId}/pause`, videoObj);
};

export const skipPlayer = (channelId, videoObj) => {
  return ax.put(`/api/channels/${channelId}/skip`, videoObj);
};

// MEMBERS

export const updateMember = updateInfo => {
  return ax.put("/api/members/", updateInfo);
};

export const addRoomMembers = (channelId, userIds) => {
  return ax.post(`/api/members/${channelId}/room`, { userIds });
};

export const makeAdmin = (channelId, userId) => {
  return ax.post(`/api/members/${channelId}/admins`, { adminId: userId });
};

export const deleteAdmin = (channelId, userId) => {
  return ax.delete(`/api/members/${channelId}/admins/${userId}`);
};

export const addBan = (channelId, bannedId) => {
  return ax.post(`/api/members/${channelId}/bans`, { bannedId });
};

export const deleteBan = (channelId, bannedId) => {
  return ax.delete(`/api/members/${channelId}/bans/${bannedId}`);
};

export const followChannel = channelId => {
  return ax.post(`/api/members/${channelId}`);
};

export const unfollowChannel = channelId => {
  return ax.delete(`/api/members/${channelId}`);
};

// VIDEOS

export const searchVideos = (source, terms, page) => {
  return ax.get(
    `/api/videos/search?source=${source}${
      terms ? `&terms=${encodeURI(terms)}` : ""
    }${page ? `&page=${page}` : ""}`
  );
};

export const addVideo = (channelId, videoInfo) => {
  return ax.post(`/api/videos/${channelId}`, { ...videoInfo });
};

export const deleteVideo = (channelVideoId, channelId) => {
  return ax.delete(`/api/videos/${channelVideoId}`, { data: { channelId } });
};

export const swapVideos = (channelId, swapInfo) => {
  return ax.put(`/api/videos/${channelId}`, swapInfo);
};

export const getQueue = channelId => {
  return ax.get(`/api/videos/queue/${channelId}`);
};

// MESSAGES

export const addMessage = messageInfo => {
  return ax.post("/api/messages", messageInfo);
};

export const getMessages = ({ channelId, afterMessageId, beforeMessageId }) => {
  if (!afterMessageId && !beforeMessageId) {
    return ax.get(`/api/messages/${channelId}`);
  }
  if (afterMessageId && !beforeMessageId) {
    return ax.get(
      `/api/messages/${channelId}?afterMessageId=${afterMessageId}`
    );
  }
  if (!afterMessageId && beforeMessageId) {
    return ax.get(
      `/api/messages/${channelId}?beforeMessageId=${beforeMessageId}`
    );
  }
  return ax.get(
    `/api/messages/${channelId}?afterMessageId=${afterMessageId}&beforeMessageId=${beforeMessageId}`
  );
};

export const deleteMessage = messageId => {
  return ax.delete(`/api/messages/${messageId}`);
};

// Notifications

export const deleteNotification = channelId => {
  return ax.delete(`/api/messages/notifications?channelId=${channelId}`);
};

// POSTS

export const addPost = postInfo => {
  return ax.post("/api/posts", postInfo);
};

export const getPosts = ({ channelId, beforePostId }) => {
  if (!beforePostId) {
    return ax.get(`/api/posts/${channelId}`);
  }

  return ax.get(`/api/posts/${channelId}?beforePostId=${beforePostId}`);
};

export const deletePost = postId => {
  return ax.delete(`/api/posts/${postId}`);
};

// COMMENTS

export const addComment = commentInfo => {
  return ax.post("/api/comments", commentInfo);
};

export const deleteComment = commentId => {
  return ax.delete(`/api/comments/${commentId}`);
};

export const getComments = ({ postId, limit }) => {
  if (!limit) {
    return ax.get(`/api/comments/${postId}`);
  }

  return ax.get(`/api/comments/${postId}?limit=${limit}`);
};

// LIKES

export const addLike = ({ postId, commentId }) => {
  if (postId) {
    return ax.post(`/api/posts/${postId}/likes`, { postId });
  } else if (commentId) {
    return ax.post(`/api/comments/${commentId}/likes`, { commentId });
  }
};

export const deleteLike = ({ postId, commentId }) => {
  if (postId) {
    return ax.delete(`/api/posts/${postId}/likes`);
  } else if (commentId) {
    return ax.delete(`/api/comments/${commentId}/likes`);
  }
};

// GIFS

export const getTrendingGifs = offset => {
  return ax.get(`/api/gifs/trending/${offset}`);
};

export const getSearchGifs = info => {
  return ax.get(`/api/gifs/search/${info.offset}?searchTerm=${info.term}`);
};
