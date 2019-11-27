import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
import CreateNewAccount from "../CreateNewAccount";
import { MODAL_CREATE_NEW_ACCOUNT } from "../../helpers/constants";
import "./ModalManager.css";

Modal.setAppElement("#root");

const ModalComponents = {
  [MODAL_CREATE_NEW_ACCOUNT]: <CreateNewAccount />
};

export default function ModalManager() {
  const component = useSelector(({ modalState }) => modalState.component);
  const apiLoading = useSelector(
    ({ apiState }) => apiState.generalApiLoading || apiState.userApiLoading
  );
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={Boolean(component)}
      closeTimeoutMS={250}
      contentLabel="modal"
      onRequestClose={apiLoading ? undefined : () => dispatch(closeModal())}
      className="ModalManager--modal"
      overlayClassName="ModalManager--modalOverlay"
    >
      {ModalComponents[component]}
    </Modal>
  );
}
