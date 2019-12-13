/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef } from "react";
import Modal from "react-modal";
import {
  Redirect,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeAllModals } from "../../redux/actions";
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
  MODAL_IMAGE
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
  [MODAL_IMAGE]: <ImageModal />
};

export default function ModalManager() {
  const openModals = useSelector(({ modalState }) => modalState.open);
  const apiLoading = useSelector(
    ({ apiState }) => apiState.generalApiLoading || apiState.userApiLoading
  );
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  return (
    <Modal
      isOpen={openModals.length !== 0}
      closeTimeoutMS={250}
      contentLabel="modal"
      onRequestClose={apiLoading ? undefined : () => dispatch(closeAllModals())}
      className="ModalManager--modal"
      overlayClassName="ModalManager--modalOverlay"
      ref={modalRef}
    >
      <div
        className="ModalManager--wrapper"
        onMouseDown={e => {
          if (e.target !== e.currentTarget) return;
          dispatch(closeAllModals());
        }}
      >
        {ModalComponents[openModals[openModals.length - 1]]}
      </div>
    </Modal>
  );
}
