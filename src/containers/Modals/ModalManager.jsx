import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAllModals, closeModalFinal } from "../../redux/actions";
import ProfileModal from "./ProfileModalContainer";
import { MODAL_PROFILE } from "../../helpers/constants";

const ModalComponents = {
  [MODAL_PROFILE]: ProfileModal
};

export default function ModalManager() {
  const components = useSelector(state => state.modal.components);
  const closing = useSelector(state => state.modal.closing);
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    // if (apiLoading) return;
    dispatch(closeAllModals());
  };

  const onShadeClick = e => {
    if (e.target !== e.currentTarget) return;
    modalCloseHandler();
  };

  const handleAfterClose = () => {
    dispatch(closeModalFinal());
  };

  const ModalType =
    components.length > 0
      ? ModalComponents[components[components.length - 1]]
      : 0;

  return (
    <>
      {ModalType === 0 ? (
        <></>
      ) : (
        <ModalType
          handleModalClose={handleAfterClose}
          onShadeClick={onShadeClick}
        />
      )}
    </>
  );
}
