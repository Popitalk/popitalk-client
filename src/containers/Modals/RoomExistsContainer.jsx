import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalContainer from "../../comp/Modals/ModalContainer";
import RoomExistsModal from "../../comp/Modals/RoomExistsModal";
import { closeModal, createRoom } from "../../redux/actions";
import history from "../../history";
import moment from "moment";

export default function RoomExistsContainer({ handleModalClose }) {
  const { room, selectedIds } = useSelector(state => state.modal);

  const dispatch = useDispatch();
  const openRoomHandler = id => {
    history.push(`/rooms/${id}/video`);
    dispatch(closeModal());
    dispatch(closeModal());
  };
  const createNewHandler = () => {
    dispatch(createRoom(selectedIds));
    dispatch(closeModal());
    dispatch(closeModal());
  };

  const subtitleAndDate = room.lastMessageContent
    ? room.lastMessageContent + " · " + moment(room.lastMessageAt).fromNow()
    : null;

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      fixedFullSize={true}
      handleModalClose={handleModalClose}
    >
      <RoomExistsModal
        room={room}
        openRoomHandler={openRoomHandler}
        createNewHandler={createNewHandler}
        subtitle={subtitleAndDate}
      />
    </ModalContainer>
  );
}
