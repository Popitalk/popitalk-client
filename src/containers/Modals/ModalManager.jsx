import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModalFinal } from "../../redux/actions";
import ProfileModal from "./ProfileModalContainer";
import EditUserSettingsContainer from "./EditUserSettingsContainer";
import ChangePasswordContainer from "./ChangePasswordContainer";
import BlockedUsersContainer from "./BlockedUsersContainer";
import {
  MODAL_PROFILE,
  MODAL_EDIT_USER_SETTINGS,
  MODAL_CHANGE_PASSWORD,
  MODAL_BLOCKED_USERS
} from "../../helpers/constants";

const ModalComponents = {
  [MODAL_PROFILE]: ProfileModal,
  [MODAL_EDIT_USER_SETTINGS]: EditUserSettingsContainer,
  [MODAL_CHANGE_PASSWORD]: ChangePasswordContainer,
  [MODAL_BLOCKED_USERS]: BlockedUsersContainer
};

export default function ModalManager() {
  const components = useSelector(state => state.modal.components);
  const dispatch = useDispatch();

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
        <ModalType handleModalClose={handleAfterClose} />
      )}
    </>
  );
}
