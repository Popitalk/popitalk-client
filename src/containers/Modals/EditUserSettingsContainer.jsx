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

  const apiLoading = useSelector(state => state.api.updateUser.loading);
  const apiSuccess = useSelector(state => state.api.updateUser.status);

  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(updateUser(values));
  };

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
          dateOfBirth: dateOfBirth,
          email: email,
          avatar: avatar
        }}
        handleSubmit={handleSubmit}
        informationUpdated={apiSuccess === "Success"}
        loading={apiLoading}
      />
    </ModalContainer>
  );
}
