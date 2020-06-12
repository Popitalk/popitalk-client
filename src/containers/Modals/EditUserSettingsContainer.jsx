import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions";
import ModalContainer from "../../comp/Modals/ModalContainer";
import EditInformationModal from "../../comp/Modals/EditInformationModal";
import ContainerHeader from "../../comp/ContainerHeader";

export default function EditUserSettingsModal({ handleModalClose }) {
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    username,
    avatar
  } = useSelector(state => state.self);

  const updateUserApi = useSelector(state => state.api.userUpdateApi);
  const dispatch = useDispatch();

  return (
    <ModalContainer
      isOpen={true}
      handleModalClose={handleModalClose}
      header={<ContainerHeader title="Edit Your Information" />}
    >
      <EditInformationModal
        username={username}
        initial={{
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: new Date(dateOfBirth),
          email: email,
          avatar: avatar
        }}
        handleSubmit={values => dispatch(updateUser({ ...values }))}
        informationUpdated={updateUserApi.status === "success"}
        loading={updateUserApi.loading}
        error={updateUserApi.status === "error" ? updateUserApi.error : false}
      />
    </ModalContainer>
  );
}
