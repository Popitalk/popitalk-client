import React from "react";
import Modal from "react-modal";
import classnames from "classnames";
import "./ModalContainer.css";

Modal.setAppElement("#root");

export default function ModalContainer({
  isOpen,
  small,
  fixedFullSize,
  handleModalClose,
  background = "white",
  header,
  children
}) {
  const modalClasses = classnames("rounded-xl shadow-xl", {
    "bg-primaryBackground": background === "white",
    "bg-secondaryBackground": background === "gray",
    "w-full sm:w-dropdown": small,
    "w-full md:w-3/4 lg:w-1/2": !small
  });

  const contentClasses = classnames(
    "h-100vh flex flex-col items-stretch overflow-hidden",
    {
      "h-modalFull": fixedFullSize,
      "rounded-xl": !header,
      "rounded-b-xl": header
    }
  );

  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={170}
      contentLabel="modal"
      onRequestClose={handleModalClose}
      className={modalClasses}
      overlayClassName="ModalManager--modalOverlay"
    >
      {header ? header : <></>}
      <div className={contentClasses}>{children}</div>
    </Modal>
  );
}
