import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  openChangePasswordModal,
  openDeleteAccountModal
} from "../../redux/actions";
import "./AccountSettingsModal.css";

export default function AccountSettingsModal() {
  const firstModal = useSelector(
    ({ modalState }) => modalState.components.length === 1
  );
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);
  const openChangePasswordModalDispatcher = useCallback(
    () => dispatch(openChangePasswordModal()),
    [dispatch]
  );
  const openDeleteAccountModalDispatcher = useCallback(
    () => dispatch(openDeleteAccountModal()),
    [dispatch]
  );

  return (
    <div className="AccountSettingsModal--container">
      <div className="AccountSettingsModal--header">
        {!firstModal && (
          <i
            role="button"
            className="fas fa-chevron-left fa-2x"
            onClick={closeModalDispatcher}
          />
        )}
        <h3>Account Settings</h3>
      </div>
      <div className="AccountSettingsModal--buttons">
        <button
          type="button"
          className="button"
          onClick={openChangePasswordModalDispatcher}
        >
          Change Password
        </button>
        <button
          type="button"
          className="button"
          onClick={openDeleteAccountModalDispatcher}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
