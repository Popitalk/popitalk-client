import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalContainer from "../../components/Modals/ModalContainer";
import RoomExistsModal from "../../components/Modals/RoomExistsModal";
import { createRoom } from "../../redux/actions";
import history from "../../history";

export default function RoomExistsContainer({ handleModalClose }) {
  const { room, selectedIds } = useSelector(state => state.modal);

  const dispatch = useDispatch();
  const openRoomHandler = id => {
    history.push(`/rooms/${id}/video`);
    handleModalClose();
  };
  const createNewHandler = () => {
    dispatch(createRoom(selectedIds));
    handleModalClose();
  };

  return (
    <ModalContainer
      isOpen={true}
      width="sm"
      handleModalClose={handleModalClose}
    >
      <RoomExistsModal
        room={room}
        openRoomHandler={openRoomHandler}
        createNewHandler={createNewHandler}
      />
    </ModalContainer>
  );
}
