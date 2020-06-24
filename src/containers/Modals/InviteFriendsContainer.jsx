import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalContainer from "../../comp/Modals/ModalContainer";
import NewRoomModal from "../../comp/Modals/NewRoomModal";
import SearchHeader from "../../comp/SearchHeader";
import { buildTagInput } from "../../comp/TagInput";
import { createRoom, inviteFriends } from "../../redux/actions";
import {
  filterSearch,
  handleCancel,
  handleEnter,
  onCheck,
  mapIdsToUsers
} from "../../helpers/functions";
import sortBy from "lodash/sortBy";

export default function InviteFriendsContainer({ handleModalClose }) {
  const { isCreatingNewRoom } = useSelector(state => state.modal);
  const { channelId } = useSelector(state => state.modal);
  const { friends } = useSelector(state => state.relationships);
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const channels = useSelector(state => state.channels);
  const { roomIds, ownId } = useSelector(state => state.self);
  const rooms = sortBy(
    roomIds.map(roomId => {
      const members = mapIdsToUsers(
        channels[roomId].members,
        users,
        defaultAvatar
      ).filter(m =>
        channels[roomId].members.length === 1 ? true : m.id !== ownId
      );

      return {
        id: roomId,
        ...channels[roomId],
        members: members
      };
    }),
    room => new Date(room.lastMessageAt)
  );

  let friendsMap = mapIdsToUsers(
    isCreatingNewRoom
      ? friends
      : friends.filter(f => !channels[channelId].members?.includes(f)),
    users,
    defaultAvatar
  );

  const [visible, setVisible] = useState(friendsMap);
  const [selected, setSelected] = useState([]);
  const [roomAlreadyExists, setRoomAlreadyExists] = useState(false);

  const nameField = "username";

  const dispatch = useDispatch();
  const handleInviteFriends = () => {
    dispatch(inviteFriends({ channelId, selected }));
  };
  const handleCreateRoom = () => {
    const userIds = selected.map(obj => obj.id);
    dispatch(createRoom(userIds));
  };

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      fixedFullSize={true}
      handleModalClose={handleModalClose}
      header={
        <SearchHeader
          title="Select Friends to Invite"
          filterSearch={searchTerm =>
            filterSearch(friendsMap, nameField, setVisible, searchTerm)
          }
          buildInput={buildTagInput(selected, id =>
            handleCancel(selected, setSelected, id)
          )}
          handleEnter={() =>
            handleEnter(selected, setSelected, visible, nameField)
          }
          items={selected}
        />
      }
    >
      <NewRoomModal
        users={visible}
        selected={selected}
        onCheck={(id, name) => {
          const newSelected = onCheck(selected, setSelected, id, name);
          if (isCreatingNewRoom) {
            let roomExists = false;
            if (newSelected.length >= 2) {
              roomExists = rooms.reduce((roomAlreadyExists, room) => {
                if (!roomAlreadyExists) {
                  return (
                    newSelected.every(s =>
                      room.members.some(m => m.id === s.id)
                    ) && newSelected.length === room.members.length - 1
                  );
                }
                return roomAlreadyExists;
              }, false);
            }
            setRoomAlreadyExists(roomExists);
          }
        }}
        handleSend={isCreatingNewRoom ? handleCreateRoom : handleInviteFriends}
        isCreatingNewRoom={isCreatingNewRoom}
        roomAlreadyExists={roomAlreadyExists}
      />
    </ModalContainer>
  );
}
