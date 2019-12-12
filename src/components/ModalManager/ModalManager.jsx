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
import Watching from "../Watching";
import Followers from "../Followers";
import Profile from "../Profile";
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
  [MODAL_PROFILE]: <Profile />,
  [MODAL_WATCHING]: <Watching />,
  [MODAL_FOLLOWERS]: <Followers />,
  [MODAL_USER_SETTINGS]: <UserSettingsModal />,
  [MODAL_EDIT_USER_SETTINGS]: <EditUserSettingsModal />,
  [MODAL_CHANGE_PASSWORD]: <ChangePasswordModal />,
  [MODAL_BLOCKED_USERS]: <BlockedUsersModal />,
  [MODAL_IMAGE]: <ImageModal />
};

// const isOdd = num => num % 2 !== 0;

export default function ModalManager() {
  const openModals = useSelector(({ modalState }) => modalState.open);
  const apiLoading = useSelector(
    ({ apiState }) => apiState.generalApiLoading || apiState.userApiLoading
  );
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  // const [dimensions, setDimensions] = useState(null);

  // const afterOpenModal = () => {
  //   setDimensions({
  //     height: modalRef.current.node.childNodes[0].childNodes[0].clientHeight,
  //     width: modalRef.current.node.childNodes[0].childNodes[0].clientWidth
  //   });
  // };

  const handleClose = () => {
    dispatch(closeAllModals());
    // setDimensions(null);
  };

  return (
    <Modal
      isOpen={true}
      // isOpen={openModals.length !== 0}
      // onAfterOpen={afterOpenModal}
      closeTimeoutMS={250}
      contentLabel="modal"
      onRequestClose={apiLoading ? undefined : () => handleClose()}
      className="ModalManager--modal"
      overlayClassName="ModalManager--modalOverlay"
      ref={modalRef}
      // style={
      //   !dimensions
      //     ? undefined
      //     : {
      //         content: {
      //           transform: `translate(-${
      //             isOdd(dimensions.width) ? 50.1 : 50
      //           }%, -${isOdd(dimensions.height) ? 50.1 : 50}%)`
      //         }
      //       }
      // }
    >
      <div
        className="ModalManager--wrapper"
        onMouseDown={e => {
          if (e.target !== e.currentTarget) return;
          dispatch(closeAllModals());
        }}
      >
        {/* {ModalComponents[openModals[openModals.length - 1]]} */}
        <EditUserSettingsModal />
        {/* <CreateNewAccountModal /> */}
      </div>
    </Modal>
  );
}
