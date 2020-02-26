import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, deleteAccount } from "../../redux/actions";
import "./DeleteAccountModal.css";

export default function DeleteAccountModal() {
  const firstModal = useSelector(state => state.modal.components.length === 1);
  const apiLoading = useSelector(state => state.api.deleteAccountApi.loading);
  const apiError = useSelector(state => state.api.deleteAccountApi.error);
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);
  const deleteAccountDispatcher = useCallback(() => dispatch(deleteAccount()), [
    dispatch
  ]);

  return (
    <div className="DeleteAccountModal--container">
      <div className="DeleteAccountModal--header">
        {!firstModal && (
          <i
            role="button"
            className="fas fa-chevron-left fa-2x"
            onClick={closeModalDispatcher}
          />
        )}
        <h3>Delete Account</h3>
      </div>
      <div className="DeleteAccountModal--content">
        <h4>Are you sure you want to delete your account?</h4>
        <h5>You cannot recover or undo this action</h5>
        <button
          type="button"
          className="button"
          onClick={deleteAccountDispatcher}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
