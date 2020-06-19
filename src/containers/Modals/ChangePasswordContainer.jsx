import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError, updateUser } from "../../redux/actions";
import ModalContainer from "../../comp/Modals/ModalContainer";
import ChangePasswordModal from "../../comp/Modals/ChangePasswordModal";
import ContainerHeader from "../../comp/ContainerHeader";

export default function ChangePasswordContainer({ handleModalClose }) {
  const updateUserApi = useSelector(state => state.api.userUpdateApi);
  const dispatch = useDispatch();

  const closeModalAndClearError = () => {
    handleModalClose();
    dispatch(clearError());
  };

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      handleModalClose={closeModalAndClearError}
      header={<ContainerHeader title="Change Password" />}
    >
      <ChangePasswordModal
        passwordUpdated={updateUserApi.status === "success"}
        loading={updateUserApi.loading}
        error={updateUserApi.status === "error" ? updateUserApi.error : false}
        handleSubmit={values => dispatch(updateUser(values))}
      />
    </ModalContainer>
  );
}
