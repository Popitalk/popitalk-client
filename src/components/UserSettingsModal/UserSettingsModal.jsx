import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  openProfileModal,
  openBlockedUsersModal,
  openChangePasswordModal,
  openEditUserSettingsModal
} from "../../redux/actions";
import "./UserSettingsModal.css";

export default function UserSettingsModal() {
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

  return (
    <div className="UserSettingsModal--container">
      <div className="UserSettingsModal--header">
        <h3>Settings</h3>
      </div>
      <div className="UserSettingsModal--info">
        <img src="https://i.imgur.com/tLljw1z.jpg" alt="user avatar" />
        <h2>Djang16</h2>
        <div className="UserSettingsModal--info--details">
          <p>Andrew Jang</p>
          <p>March 17, 2017</p>
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
        <button type="button" className="button">
          Log Out
        </button>
      </div>
    </div>
  );
}
