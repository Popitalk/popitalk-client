import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserInfoModal,
  deleteFriend,
  sendFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  blockUser
} from "../../redux/actions";
import ModalContainer from "../../comp/Modals/ModalContainer";
import ProfileModal from "../../comp/Modals/ProfileModal";

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

  let unfriendHandler = () => dispatch(deleteFriend(userId));
  let friendHandler = () => dispatch(sendFriendRequest(userId));
  let blockHandler = () => dispatch(blockUser(userId));
  let variant = "stranger";

  if (relationships.friends.includes(userId)) {
    variant = "friend";
    blockHandler = () => {
      dispatch(unfriendHandler(userId));
      dispatch(blockUser(userId));
    };
  } else if (relationships.sentFriendRequests.includes(userId)) {
    variant = "sentRequest";
    unfriendHandler = () => dispatch(cancelFriendRequest(userId));
    blockHandler = () => {
      dispatch(cancelFriendRequest(userId));
      dispatch(blockUser(userId));
    };
  } else if (relationships.receivedFriendRequests.includes(userId)) {
    variant = "receivedRequest";
    friendHandler = () => dispatch(acceptFriendRequest(userId));
    unfriendHandler = () => dispatch(rejectFriendRequest(userId));
    blockHandler = () => {
      dispatch(rejectFriendRequest(userId));
      dispatch(blockUser(userId));
    };
  } else if (myId === userId) {
    variant = "self";
  }

  return (
    <ModalContainer isOpen={true} handleModalClose={handleModalClose}>
      <ProfileModal
        user={{
          id: id,
          firstName: firstName,
          lastName: lastName,
          username: username,
          avatar: avatar || defaultAvatar
        }}
        following={6}
        followers={22}
        friends={12}
        recentVideos={[]}
        followedChannels={[]}
        unfriendHandler={unfriendHandler}
        friendHandler={friendHandler}
        blockHandler={blockHandler}
        variant={variant}
      />
    </ModalContainer>
  );
}
