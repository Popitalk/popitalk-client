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

export const getUser = userId => {
  return axios.get(`/api/users/${userId}`);
};

export const searchUsers = (username, page) => {
  return axios.get(
    `/api/users?username=${username}${page ? `&page=${page}` : ""}`
  );
};
