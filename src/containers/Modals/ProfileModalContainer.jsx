import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserInfoModal,
  deleteFriend,
  cancelFriendRequest,
  rejectFriendRequest,
  blockUser
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
  const { defaultAvatar } = useSelector(state => state.general);
  const relationships = useSelector(state => state.relationships);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoModal(userId));
  }, [dispatch, userId]);

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
    defaultAvatar,
    myId
  );

  let blockHandler = () => dispatch(blockUser(plainUser));
  if (user.variant === "friend") {
    blockHandler = () => {
      dispatch(deleteFriend(userId));
      dispatch(blockUser(userId));
    };
  } else if (user.variant === "sentRequest") {
    blockHandler = () => {
      dispatch(cancelFriendRequest(userId));
      dispatch(blockUser(userId));
    };
  } else if (user.variant === "receivedRequest") {
    blockHandler = () => {
      dispatch(rejectFriendRequest(userId));
      dispatch(blockUser(userId));
    };
  }

  return (
    <ModalContainer isOpen={true} handleModalClose={handleModalClose}>
      <ProfileModal
        user={user}
        following={6}
        followers={22}
        friends={12}
        recentVideos={[]}
        followedChannels={[]}
        unfriendHandler={() => dispatch(deleteFriend(userId))}
        blockHandler={blockHandler}
      />
    </ModalContainer>
  );
}
