import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserInfoModal,
  deleteFriend,
  blockUser,
  unblockUser,
  updateUser,
  clearError
} from "../../redux/actions";
import ModalContainer from "../../comp/Modals/ModalContainer";
import ProfileModal from "../../comp/Modals/ProfileModal";
import { setRelationshipHandlers } from "../../helpers/functions";

export default function ProfileModalContainer({ handleModalClose }) {
  const { userId } = useSelector(state => state.modal);
  const { id: myId } = useSelector(state => state.self);

  const {
    idModal: id,
    firstNameModal: firstName,
    lastNameModal: lastName,
    usernameModal: username,
    avatarModal: avatar
  } = useSelector(state => state.userProfile);
  const relationships = useSelector(state => state.relationships);
  const updateUserApi = useSelector(state => state.api.userUpdateApi);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoModal(userId));
  }, [dispatch, userId]);
  const updateAvatar = avatar => dispatch(updateUser({ avatar }));

  let plainUser = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    username: username,
    avatar: avatar
  };
  const user = setRelationshipHandlers(
    plainUser,
    relationships,
    dispatch,
    null,
    myId
  );

  let blockHandler =
    user.variant === "blocked"
      ? () => dispatch(unblockUser(userId))
      : () => dispatch(blockUser(plainUser));

  const closeModalAndClearError = () => {
    handleModalClose();
    dispatch(clearError());
  };

  return (
    <ModalContainer isOpen={true} handleModalClose={closeModalAndClearError}>
      <ProfileModal
        user={user}
        following={6}
        followers={22}
        friends={12}
        recentVideos={[]}
        followedChannels={[]}
        unfriendHandler={() => dispatch(deleteFriend(userId))}
        blockHandler={blockHandler}
        updateAvatar={updateAvatar}
        updateUserApi={updateUserApi}
      />
    </ModalContainer>
  );
}
