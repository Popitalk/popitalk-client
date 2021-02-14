import React from "react";
import ModalContainer from "../../components/Modals/ModalContainer";
import SignUpRequiredModal from "../../components/Modals/SignUpRequiredModal";
import history from "../../history";

export default function SignUpRequiredContainer({ handleModalClose }) {
  const toWelcome = () => {
    history.push(`/welcome`);
    handleModalClose();
  };
  return (
    <ModalContainer
      isOpen={true}
      width="sm"
      handleModalClose={handleModalClose}
    >
      <SignUpRequiredModal toWelcome={toWelcome} />
    </ModalContainer>
  );
}
