import axios from "axios";

export const register = registerInfo => {
  return axios.post("api/users/", registerInfo);
};

export const login = loginInfo => {
  return axios.post("/api/sessions/login", loginInfo);
};

export const validateSession = () => {
  return axios.get("/api/sessions/validate");
};

export const logout = () => {
  return axios.post("/api/sessions/logout");
};

export const updateUser = updateInfo => {
  return axios.put("/api/users/", updateInfo);
};
export const updateChannel = (channelId, updateInfo) => {
  return axios.put(`/api/channels/${channelId}`, updateInfo);
};

export const updateUserRelationships = updateInfo => {
  return axios.put("/api/users/relationships", updateInfo);
};

export const updateMember = updateInfo => {
  return axios.put("/api/members/", updateInfo);
};

export const followChannel = channelId => {
  return axios.post("/api/members/", { channelId });
};
export const unfollowChannel = channelId => {
  return axios.delete(`/api/members/${channelId}`);
};

export const getUser = userId => {
  return axios.get(`/api/users/${userId}`);
};

export const searchUsers = (username, page) => {
  return axios.get(
    `/api/users?username=${username}${page ? `&page=${page}` : ""}`
  );
};

export const searchVideos = (source, terms, page) => {
  return axios.get(
    `/api/videos/search?source=${source}&terms=${terms}${
      page ? `&page=${page}` : ""
    }`
  );
};

export const addVideo = (channelId, videoId) => {
  return axios.post("/api/videos/", { channelId, videoId });
};

export const deleteAccount = () => {
  return axios.delete("/api/users/");
};

export const getChannel = channelId => {
  return axios.get(`/api/channels/${channelId}`);
};

export const createChannel = channelInfo => {
  return axios.post("/api/channels", channelInfo);
};

export const createRoom = userIds => {
  return axios.post("/api/channels/room", { userIds });
};

export const inviteFriends = (channelId, userIds) => {
  return axios.post("/api/channels/roomInvite", { channelId, userIds });
};

export const updateRoom = (roomId, updateInfo) => {
  return axios.put(`/api/channels/rooms/${roomId}`, updateInfo);
};

export const leaveRoom = roomId => {
  return axios.delete(`/api/channels/rooms/${roomId}`);
};

export const addMessage = messageInfo => {
  return axios.post("/api/messages", messageInfo);
};
export const addPost = postInfo => {
  return axios.post("/api/posts/", postInfo);
};
export const deletePost = postId => {
  return axios.delete(`/api/posts/${postId}`);
};
export const addComment = commentInfo => {
  return axios.post("/api/comments/", commentInfo);
};
export const deleteComment = commentId => {
  return axios.delete(`/api/comments/${commentId}`);
};

export const deleteMessage = messageId => {
  return axios.delete(`/api/messages/${messageId}`);
};

export const deleteChannel = channelId => {
  return axios.delete(`/api/channels/${channelId}`);
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
export const getPosts = ({ channelId, beforePostId }) => {
  if (!beforePostId) {
    return axios.get(`/api/posts/${channelId}`);
  }

  return axios.get(`/api/posts/${channelId}?beforePostId=${beforePostId}`);
};

export const getComments = ({ postId, limit }) => {
  if (!limit) {
    return axios.get(`/api/comments/${postId}`);
  }

  return axios.get(`/api/comments/${postId}?limit=${limit}`);
};

export const addLike = ({ postId, commentId }) => {
  if (postId) {
    return axios.post("/api/likes", { postId });
  } else if (commentId) {
    return axios.post("/api/likes", { commentId });
  }
};

export const deleteLike = ({ postId, commentId }) => {
  if (postId) {
    return axios.delete(`/api/likes/?postId=${postId}`);
  } else if (commentId) {
    return axios.delete(`/api/likes/?commentId=${commentId}`);
  }
};
