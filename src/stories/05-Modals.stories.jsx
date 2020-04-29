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

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
  /* justify-items: center; */
  /* justify-items: center; */
  /* align-items: center; */
  /* row-gap: 25px; */
  height: 100%;
  padding: 20px;
  background-color: #fff;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const CreateNewAccountModalTest = () => {
  return (
    <Container>
      <CreateNewAccountModal />
    </Container>
  );
};

export const EditInformationModalTest = () => {
  return (
    <Container>
      <EditInformationModal
        handleBack="test"
        username="Silent Fuzzle"
        initial={{
          firstName: "",
          lastName: "",
          dateOfBirth: new Date(),
          email: ""
        }}
      />
    </Container>
  );
};

export const ChangePasswordModalTest = () => {
  return (
    <Container>
      <ChangePasswordModal handleBack="test" />
    </Container>
  );
};

export const ForgotPasswordModalTest = () => {
  return (
    <Container>
      <ForgotPasswordModal confirmEmailSent={true} />
    </Container>
  );
};
