import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
import CreateNewAccount from "../CreateNewAccount";
import InvitePanel from "../InvitePanel";
import Profile from "../Profile";
import ImageModal from "../ImageModal";
import {
  MODAL_CREATE_NEW_ACCOUNT,
  MODAL_INVITE,
  MODAL_PROFILE,
  MODAL_IMAGE
} from "../../helpers/constants";
import "./ModalManager.css";

Modal.setAppElement("#root");

const ModalComponents = {
  [MODAL_CREATE_NEW_ACCOUNT]: <CreateNewAccount modal={true} />,
  [MODAL_INVITE]: <InvitePanel modal={true} />,
  [MODAL_PROFILE]: <Profile />,
  [MODAL_IMAGE]: <ImageModal />
};

const isOdd = num => num % 2 !== 0;

export default function ModalManager() {
  const component = useSelector(({ modalState }) => modalState.component);
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
    dispatch(closeModal());
    setDimensions(null);
  };

  return (
    <Modal
      isOpen={Boolean(component)}
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
      {ModalComponents[component]}
    </Modal>
  );
}
