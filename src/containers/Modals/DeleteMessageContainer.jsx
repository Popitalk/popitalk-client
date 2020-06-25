import React from "react";
import ModalContainer from "../../comp/Modals/ModalContainer";
import DeleteMessageModal from "../../comp/Modals/DeleteMessageModal";
import { generateTestMessages } from "../../stories/seed-arrays";

export default function DeleteMessageContainer({ handleModalClose }) {
  const message = { ...generateTestMessages(1)[0] };

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      handleModalClose={handleModalClose}
    >
      <DeleteMessageModal
        message={message}
        handleCancel={() => console.log("cancel")}
        handleDelete={() => console.log("delete")}
      />
    </ModalContainer>
  );
}
