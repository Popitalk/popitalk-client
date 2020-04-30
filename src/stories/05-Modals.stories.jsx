import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import EditInformationModal from "../comp/EditInformationModal";
import ChangePasswordModal from "../comp/ChangePasswordModal";
import ForgotPasswordModal from "../comp/ForgotPasswordModal";
import CreateNewAccountModal from "../comp/CreateNewAccountModal";
import ModalManager from "../comp/ModalManager";
import ModalHeader from "../comp/ModalHeader";

export default {
  title: "Modals",
  decorators: [withKnobs]
};

const handleBack = () => {
  console.log("RETURN");
};

export const CreateNewAccountModalTest = () => {
  return (
    <ModalManager isOpen={true} fullHeight={true}>
      <CreateNewAccountModal />
    </ModalManager>
  );
};

export const EditInformationModalTest = () => {
  return (
    <ModalManager
      isOpen={true}
      fullHeight={true}
      header={
        <ModalHeader title="Edit Your Information" handleBack={handleBack} />
      }
    >
      <EditInformationModal
        handleBack="test"
        username="Silent Fuzzle"
        initial={{
          firstName: "",
          lastName: "",
          dateOfBirth: new Date(),
          email: ""
        }}
        informationUpdated={true}
      />
    </ModalManager>
  );
};

export const ChangePasswordModalTest = () => {
  return (
    <ModalManager
      isOpen={true}
      header={<ModalHeader title="Change Password" handleBack={handleBack} />}
    >
      <ChangePasswordModal handleBack="test" passwordUpdated={true} />
    </ModalManager>
  );
};

export const ForgotPasswordModalTest = () => {
  return (
    <ModalManager
      isOpen={true}
      header={<ModalHeader title="Forgot Password" handleBack={handleBack} />}
    >
      <ForgotPasswordModal confirmEmailSent={true} />
    </ModalManager>
  );
};
