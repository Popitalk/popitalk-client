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

export const updateUserRelationships = updateInfo => {
  return axios.put("/api/users/relationships", updateInfo);
};

export const getUser = userId => {
  return axios.get(`/api/users/${userId}`);
};

export const searchUsers = (username, page) => {
  return axios.get(
    `/api/users?username=${username}${page ? `&page=${page}` : ""}`
  );
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
  return axios.post("/api/messages/", messageInfo);
};

export const deleteMessage = messageId => {
  return axios.delete(`/api/messages/${messageId}`);
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
