import React from "react";
import ModalContainer from "../../comp/Modals/ModalContainer";
import DeleteMessageModal from "../../comp/Modals/DeleteMessageModal";
import { useSelector, useDispatch } from "react-redux";
import { deleteMessage } from "../../redux/actions";

export default function DeleteMessageContainer({ handleModalClose }) {
  const messageId = useSelector(state => state.modal.messageId);
  const channelId = useSelector(state => state.modal.channelId);
  const message = useSelector(state =>
    state.messages[channelId].find(m => m.id === messageId)
  );
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteMessage({ status: message.status, id: messageId, channelId })
    );
  };

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      handleModalClose={handleModalClose}
      modalOwnClasses="rounded-xl shadow-xl outline-none w-deleteMessageModal"
    >
      <DeleteMessageModal
        message={message}
        handleCancel={handleModalClose}
        handleDelete={handleDelete}
      />
    </ModalContainer>
  );
}
