import React from "react";
import ModalContainer from "../../comp/Modals/ModalContainer";
import DeleteMessageModal from "../../comp/Modals/DeleteMessageModal";
import { generateTestMessages } from "../../stories/seed-arrays";

const message = { ...generateTestMessages(1)[0] };

export default function DeleteMessageContainer({ handleModalClose }) {
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
