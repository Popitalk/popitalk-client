import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  openProfileModal,
  openBlockedUsersModal,
  openChangePasswordModal,
  openEditUserSettingsModal,
  logout
} from "../../redux/actions";
import "./UserSettingsModal.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default function UserSettingsModal() {
  const {
    firstName,
    lastName,
    username,
    dateOfBirth,
    email,
    emailVerified,
    avatar,
    defaultAvatar
  } = useSelector(state => state.userState);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const openEditUserSettingsModalDispatcher = useCallback(
    () => dispatch(openEditUserSettingsModal()),
    [dispatch]
  );
  const openBlockedUsersModalDispatcher = useCallback(
    () => dispatch(openBlockedUsersModal()),
    [dispatch]
  );
  const openChangePasswordModalDispatcher = useCallback(
    () => dispatch(openChangePasswordModal()),
    [dispatch]
  );
  const logoutDispatcher = useCallback(() => dispatch(logout()), [dispatch]);

  const d = new Date(dateOfBirth);

  return (
    <div className="UserSettingsModal--container">
      <div className="UserSettingsModal--header">
        <h3>Settings</h3>
      </div>
      <div className="UserSettingsModal--info">
        <img src={avatar || defaultAvatar} alt="user avatar" />
        <h2>{username}</h2>
        <div className="UserSettingsModal--info--details">
          <p>
            {firstName} {lastName}
          </p>
          <p>{`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`}</p>
        </div>
        <div className="UserSettingsModal--info--email">
          <p>abc@gmail</p>
          <i className="fas fa-check-circle" />
        </div>
        <p onClick={openEditUserSettingsModalDispatcher}>Edit</p>
      </div>
      <div className="UserSettingsModal--buttons">
        <button
          type="button"
          className="button"
          onClick={openBlockedUsersModalDispatcher}
        >
          Blocked Users
        </button>
        <button
          type="button"
          className="button"
          onClick={openChangePasswordModalDispatcher}
        >
          Change Password
        </button>
        <button type="button" className="button" onClick={logoutDispatcher}>
          Log Out
        </button>
      </div>
    </div>
  );
}
