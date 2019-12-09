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
import CreateNewAccount from "../CreateNewAccount";
import Watching from "../Watching";
import Followers from "../Followers";
import InvitePanel from "../InvitePanel";
import Profile from "../Profile";
import InviteModal from "../InviteModal";
import ImageModal from "../ImageModal";
import {
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_INVITE,
  MODAL_PROFILE,
  MODAL_WATCHING,
  MODAL_FOLLOWERS,
  MODAL_IMAGE
} from "../../helpers/constants";
import "./ModalManager.css";

Modal.setAppElement("#root");

const ModalComponents = {
  [MODAL_CREATE_NEW_ACCOUNT]: <CreateNewAccount modal={true} />,
  [MODAL_INVITE]: <InviteModal />,
  [MODAL_PROFILE]: <Profile />,
  [MODAL_WATCHING]: <Watching />,
  [MODAL_FOLLOWERS]: <Followers />,
  [MODAL_IMAGE]: <ImageModal />
};

const isOdd = num => num % 2 !== 0;

export default function ModalManager() {
  const openModals = useSelector(({ modalState }) => modalState.open);
  const apiLoading = useSelector(
    ({ apiState }) => apiState.generalApiLoading || apiState.userApiLoading
  );
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const [dimensions, setDimensions] = useState(null);

  const afterOpenModal = () => {
    setDimensions({
      height: modalRef.current.node.childNodes[0].childNodes[0].clientHeight,
      width: modalRef.current.node.childNodes[0].childNodes[0].clientWidth
    });
  };

  const handleClose = () => {
    dispatch(closeAllModals());
    setDimensions(null);
  };

  return (
    <Modal
      isOpen={openModals.length !== 0}
      onAfterOpen={afterOpenModal}
      closeTimeoutMS={250}
      contentLabel="modal"
      onRequestClose={apiLoading ? undefined : () => handleClose()}
      className="ModalManager--modal"
      overlayClassName="ModalManager--modalOverlay"
      ref={modalRef}
      style={
        !dimensions
          ? undefined
          : {
              content: {
                transform: `translate(-${
                  isOdd(dimensions.width) ? 50.1 : 50
                }%, -${isOdd(dimensions.height) ? 50.1 : 50}%)`
              }
            }
      }
    >
      {ModalComponents[openModals[openModals.length - 1]]}
    </Modal>
  );
}
