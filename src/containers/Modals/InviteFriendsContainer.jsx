import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../../comp/Modals/ModalContainer";
import NewRoomModal from "../../comp/Modals/NewRoomModal";
import SearchHeader from "../../comp/SearchHeader";
import { buildTagInput } from "../../comp/TagInput";
import {
  createRoom,
  inviteFriends,
  openRoomExistsModal
} from "../../redux/actions";
import {
  filterSearch,
  handleCancel,
  handleEnter,
  mapIdsToUsers,
  onCheck
} from "../../helpers/functions";
import sortBy from "lodash/sortBy";
import _ from "lodash";

export default function InviteFriendsContainer({ handleModalClose }) {
  const { isCreatingNewRoom } = useSelector(state => state.modal);
  const { channelId } = useSelector(state => state.modal);
  const { friends } = useSelector(state => state.relationships);
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const channels = useSelector(state => state.channels);
  const { roomIds, id: ownId } = useSelector(state => state.self);
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
    let roomObj;
    const roomExists = rooms.some(room => {
      const memberIds = room.members.map(obj => obj.id);
      const roomExists = _.isEmpty(_.xor(userIds, memberIds));
      if (roomExists) roomObj = room;
      return _.isEmpty(_.xor(userIds, memberIds));
    });

    if (roomExists) {
      dispatch(openRoomExistsModal(roomObj, userIds));
    } else {
      dispatch(createRoom(userIds));
    }
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
        onCheck={(id, name) => onCheck(selected, setSelected, id, name)}
        handleSend={isCreatingNewRoom ? handleCreateRoom : handleInviteFriends}
        isCreatingNewRoom={isCreatingNewRoom}
      />
    </ModalContainer>
  );
}
