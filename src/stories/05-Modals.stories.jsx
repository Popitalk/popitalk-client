import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import EditInformationModal from "../comp/EditInformationModal";
import ChangePasswordModal from "../comp/ChangePasswordModal";
import ForgotPasswordModal from "../comp/ForgotPasswordModal";
import CreateNewAccountModal from "../comp/CreateNewAccountModal";

export default {
  title: "Modals",
  decorators: [withKnobs]
};

export const CreateNewAccountModalTest = () => {
  return <CreateNewAccountModal />;
};

export const EditInformationModalTest = () => {
  return (
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
  );
};

export const ChangePasswordModalTest = () => {
  return <ChangePasswordModal handleBack="test" passwordUpdated={true} />;
};

export const ForgotPasswordModalTest = () => {
  return <ForgotPasswordModal confirmEmailSent={true} />;
};
