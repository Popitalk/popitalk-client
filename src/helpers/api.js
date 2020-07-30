import axios from "axios";

// SESSION

export const register = registerInfo => {
  return axios.post("api/users", registerInfo);
};

export const login = loginInfo => {
  return axios.post("/api/sessions/login", loginInfo);
};

export const validateSession = () => {
  return axios.get("/api/sessions/validate");
};

export const refreshSession = () => {
  return axios.get("/api/sessions/refresh");
};

export const logout = () => {
  return axios.post("/api/sessions/logout");
};

// SELF AND RELATIONSHIPS

export const updateUser = updateInfo => {
  return axios.put("/api/users", updateInfo);
};

export const deleteAccount = () => {
  return axios.delete("/api/users/");
};

export const blockUser = blockedId => {
  return axios.post("/api/users/blocks", { blockedId });
};

export const unblockUser = blockedId => {
  return axios.delete(`/api/users/blocks/${blockedId}`);
};

export const sendFriendRequest = requesteeId => {
  return axios.post("/api/users/friendRequests", { requesteeId });
};

export const cancelFriendRequest = requesteeId => {
  return axios.delete(`/api/users/friendRequests/${requesteeId}/cancel`);
};

export const rejectFriendRequest = requesterId => {
  return axios.delete(`/api/users/friendRequests/${requesterId}/reject`);
};

export const acceptFriendRequest = requesterId => {
  return axios.post("/api/users/friends", { requesterId });
};

export const unfriendUser = friendId => {
  return axios.delete(`/api/users/friends/${friendId}`);
};

// USERS

export const getUser = userId => {
  return axios.get(`/api/users/${userId}`);
};

export const searchUsers = (username, page) => {
  return axios.get(
    `/api/users?username=${username}${page ? `&page=${page}` : ""}`
  );
};

// CHANNELS

export const updateChannel = (channelId, updateInfo) => {
  console.log("updateInfo updateChannel", updateInfo);
  return axios.put(`/api/channels/${channelId}`, updateInfo);
};

export const getChannel = channelId => {
  return axios.get(`/api/channels/${channelId}`);
};

export const createChannel = channelInfo => {
  return axios.post("/api/channels", channelInfo);
};

export const deleteChannel = channelId => {
  return axios.delete(`/api/channels/${channelId}`);
};

export const createRoom = userIds => {
  return axios.post("/api/channels/rooms", { userIds });
};

export const updateRoom = (roomId, updateInfo) => {
  return axios.put(`/api/channels/rooms/${roomId}`, updateInfo);
};

export const leaveRoom = roomId => {
  return axios.delete(`/api/channels/rooms/${roomId}`);
};

export const setPlaying = (channelId, videoObj) => {
  return axios.put(`/api/channels/${channelId}/play`, videoObj);
};

export const setPaused = (channelId, videoObj) => {
  return axios.put(`/api/channels/${channelId}/pause`, videoObj);
};

export const skipPlayer = (channelId, videoObj) => {
  return axios.put(`/api/channels/${channelId}/skip`, videoObj);
};

export const getPlayerStatus = channelId => {
  return axios.get(`/api/channels/${channelId}/status`);
};

// MEMBERS

export const updateMember = updateInfo => {
  return axios.put("/api/members/", updateInfo);
};

export const addRoomMembers = (channelId, userIds) => {
  return axios.post(`/api/members/${channelId}/room`, { userIds });
};

export const makeAdmin = (channelId, userId) => {
  return axios.post(`/api/members/${channelId}/admins`, { userId });
};

export const deleteAdmin = (channelId, userId) => {
  return axios.delete(`/api/members/${channelId}/admins/${userId}`);
};

export const addBan = (channelId, bannedId) => {
  return axios.post(`/api/members/${channelId}/bans`, { bannedId });
};

export const deleteBan = (channelId, bannedId) => {
  return axios.delete(`/api/members/${channelId}/bans/${bannedId}`);
};

export const followChannel = channelId => {
  return axios.post(`/api/members/${channelId}`);
};

export const unfollowChannel = channelId => {
  return axios.delete(`/api/members/${channelId}`);
};

// VIDEOS

export const searchVideos = (source, terms, page) => {
  return axios.get(
    `/api/videos/search?source=${source}&terms=${encodeURI(terms)}${
      page ? `&page=${page}` : ""
    }`
  );
};

export const addVideo = (channelId, videoInfo) => {
  return axios.post(`/api/videos/${channelId}`, { ...videoInfo });
};

export const deleteVideo = (channelVideoId, channelId) => {
  return axios.post(`/api/videos/${channelVideoId}`, { channelId });
};

// MESSAGES

export const addMessage = messageInfo => {
  return axios.post("/api/messages", messageInfo);
};

export const getMessages = ({ channelId, afterMessageId, beforeMessageId }) => {
  if (!afterMessageId && !beforeMessageId) {
    return axios.get(`/api/messages/${channelId}`);
  }
  if (afterMessageId && !beforeMessageId) {
    return axios.get(
      `/api/messages/${channelId}?afterMessageId=${afterMessageId}`
    );
  }
  if (!afterMessageId && beforeMessageId) {
    return axios.get(
      `/api/messages/${channelId}?beforeMessageId=${beforeMessageId}`
    );
  }
  return axios.get(
    `/api/messages/${channelId}?afterMessageId=${afterMessageId}&beforeMessageId=${beforeMessageId}`
  );
};

export const deleteMessage = messageId => {
  return axios.delete(`/api/messages/${messageId}`);
};

// POSTS

export const addPost = postInfo => {
  return axios.post("/api/posts", postInfo);
};

export const getPosts = ({ channelId, beforePostId }) => {
  if (!beforePostId) {
    return axios.get(`/api/posts/${channelId}`);
  }

  return axios.get(`/api/posts/${channelId}?beforePostId=${beforePostId}`);
};

export const deletePost = postId => {
  return axios.delete(`/api/posts/${postId}`);
};

// COMMENTS

export const addComment = commentInfo => {
  return axios.post("/api/comments", commentInfo);
};

export const deleteComment = commentId => {
  return axios.delete(`/api/comments/${commentId}`);
};

export const getComments = ({ postId, limit }) => {
  if (!limit) {
    return axios.get(`/api/comments/${postId}`);
  }

  return axios.get(`/api/comments/${postId}?limit=${limit}`);
};

// LIKES

export const addLike = ({ postId, commentId }) => {
  if (postId) {
    return axios.post(`/api/posts/${postId}/likes`, { postId });
  } else if (commentId) {
    return axios.post(`/api/comments/${commentId}/likes`, { commentId });
  }
};

export const deleteLike = ({ postId, commentId }) => {
  if (postId) {
    return axios.delete(`/api/posts/${postId}/likes`);
  } else if (commentId) {
    return axios.delete(`/api/comments/${commentId}/likes`);
  }
};
