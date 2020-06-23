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

export default function InviteFriendsContainer({ handleModalClose }) {
  const { isCreatingNewRoom } = useSelector(state => state.modal);
  const { channelId } = useSelector(state => state.modal);
  const { friends } = useSelector(state => state.relationships);
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const channels = useSelector(state => state.channels);

  let friendsMap = mapIdsToUsers(
    isCreatingNewRoom
      ? friends
      : friends.filter(f => !channels[channelId].members?.includes(f)),
    users,
    defaultAvatar
  );

  const [visible, setVisible] = useState(friendsMap);
  const [selected, setSelected] = useState([]);

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
          filterSearch={(searchTerm, items) =>
            filterSearch(items, nameField, setVisible, searchTerm)
          }
          buildInput={buildTagInput(selected, id =>
            handleCancel(selected, setSelected, id)
          )}
          handleEnter={() =>
            handleEnter(selected, setSelected, visible, nameField)
          }
          items={friendsMap}
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
