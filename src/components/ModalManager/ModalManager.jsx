/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeAllModals, popAllModals } from "../../redux/actions";
import WatchersModal from "../WatchersModal";
import FollowersModal from "../FollowersModal";
import ProfileModal from "../ProfileModal";
import InviteModal from "../InviteModal";
import ImageModal from "../ImageModal";
import UserSettingsModal from "../UserSettingsModal";
import EditUserSettingsModal from "../EditUserSettingsModal";
import ChangePasswordModal from "../ChangePasswordModal";
import BlockedUsersModal from "../BlockedUsersModal";
import CreateNewAccountModal from "../CreateNewAccountModal";
import DeleteMessageModal from "../DeleteMessageModal";
import AccountSettingsModal from "../AccountSettingsModal";
import DeleteAccountModal from "../DeleteAccountModal";
import {
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_INVITE,
  MODAL_PROFILE,
  MODAL_WATCHING,
  MODAL_FOLLOWERS,
  MODAL_USER_SETTINGS,
  MODAL_EDIT_USER_SETTINGS,
  MODAL_CHANGE_PASSWORD,
  MODAL_BLOCKED_USERS,
  MODAL_DELETE_MESSAGE,
  MODAL_IMAGE,
  MODAL_ACCOUNT_SETTINGS,
  MODAL_DELETE_ACCOUNT
} from "../../helpers/constants";
import "./ModalManager.css";

Modal.setAppElement("#root");

const ModalComponents = {
  [MODAL_CREATE_NEW_ACCOUNT]: <CreateNewAccountModal />,
  [MODAL_INVITE]: <InviteModal />,
  [MODAL_PROFILE]: <ProfileModal />,
  [MODAL_WATCHING]: <WatchersModal />,
  [MODAL_FOLLOWERS]: <FollowersModal />,
  [MODAL_USER_SETTINGS]: <UserSettingsModal />,
  [MODAL_EDIT_USER_SETTINGS]: <EditUserSettingsModal />,
  [MODAL_CHANGE_PASSWORD]: <ChangePasswordModal />,
  [MODAL_BLOCKED_USERS]: <BlockedUsersModal />,
  [MODAL_DELETE_MESSAGE]: <DeleteMessageModal />,
  [MODAL_IMAGE]: <ImageModal />,
  [MODAL_ACCOUNT_SETTINGS]: <AccountSettingsModal />,
  [MODAL_DELETE_ACCOUNT]: <DeleteAccountModal />
};

export default function ModalManager() {
  const open = useSelector(({ modalState }) => modalState.open);
  const components = useSelector(({ modalState }) => modalState.components);
  const apiLoading = useSelector(
    ({ apiState }) => apiState.generalApiLoading || apiState.userApiLoading
  );
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  return (
    <Modal
      isOpen={open}
      closeTimeoutMS={170}
      contentLabel="modal"
      onRequestClose={apiLoading ? undefined : () => dispatch(closeAllModals())}
      onAfterClose={() => dispatch(popAllModals())}
      className="ModalManager--modal"
      overlayClassName="ModalManager--modalOverlay"
      ref={modalRef}
    >
      <div
        className="ModalManager--wrapper"
        onMouseDown={e => {
          if (e.target !== e.currentTarget) return;
          if (apiLoading) return;
          dispatch(closeAllModals());
        }}
      >
        {ModalComponents[components[components.length - 1]]}
      </div>
    </Modal>
  );
}
