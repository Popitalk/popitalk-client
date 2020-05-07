import React from "react";
import Modal from "react-modal";
import classnames from "classnames";
import "./ModalManager.css";

Modal.setAppElement("#root");

export default function ModalManager({
  isOpen,
  fullHeight,
  small,
  handleModalClose,
  onShadeClick,
  background = "white",
  header,
  children
}) {
  const subClasses = classnames("p-4 overflow-auto", {
    "h-75vh": fullHeight
  });

  const modalClasses = classnames("rounded-xl shadow-xl", {
    "bg-primaryBackground": background === "white",
    "bg-secondaryBackground": background === "gray",
    "w-full sm:w-dropdown": small,
    "w-full md:w-3/4 lg:w-1/2": !small
  });

  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={170}
      contentLabel="modal"
      // onRequestClose={apiLoading ? undefined : modalCloseHandler}
      onAfterClose={handleModalClose}
      className={modalClasses}
      overlayClassName="ModalManager--modalOverlay"
    >
      {header ? header : <></>}
      <div className={subClasses}>{children}</div>
    </Modal>
  );
}
