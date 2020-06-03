import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions";
import ModalContainer from "../../comp/Modals/ModalContainer";
import ChangePasswordModal from "../../comp/Modals/ChangePasswordModal";
import ContainerHeader from "../../comp/ContainerHeader";

export default function ChangePasswordContainer({ handleModalClose }) {
  const api = useSelector(state => state.api);
  const apiLoading = api.updateUser ? api.updateUser.loading : false;
  const apiSuccess = api.updateUser
    ? api.updateUser.status === "Success"
    : false;

  const dispatch = useDispatch();

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      handleModalClose={handleModalClose}
      header={<ContainerHeader title="Change Password" />}
    >
      <ChangePasswordModal
        passwordUpdated={apiSuccess}
        loading={apiLoading}
        handleSubmit={values => dispatch(updateUser(values))}
      />
    </ModalContainer>
  );
}
