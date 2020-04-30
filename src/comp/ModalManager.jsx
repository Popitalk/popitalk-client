import React from "react";
import Modal from "react-modal";
import classnames from "classnames";
import "./ModalManager.css";

Modal.setAppElement("#root");

export default function ModalManager({
  isOpen,
  fullHeight,
  handleModalClose,
  onShadeClick,
  header,
  children
}) {
  const subClasses = classnames("px-8 py-8 overflow-auto", {
    "h-75vh": fullHeight
  });

  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={170}
      contentLabel="modal"
      // onRequestClose={apiLoading ? undefined : modalCloseHandler}
      onAfterClose={handleModalClose}
      className="w-full md:w-3/4 lg:w-1/2 bg-primaryBackground rounded-xl shadow-xl"
      overlayClassName="ModalManager--modalOverlay"
    >
      {header ? header : <></>}
      <div className={subClasses}>{children}</div>
    </Modal>
  );
}
