import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfoModal } from "../../redux/actions";
import ModalContainer from "../../comp/Modals/ModalContainer";
import ProfileModal from "../../comp/Modals/ProfileModal";

export default function ProfileModalContainer({ handleModalClose }) {
  const { userId } = useSelector(state => state.modal);
  const {
    idModal: id,
    firstNameModal: firstName,
    lastNameModal: lastName,
    usernameModal: username,
    avatarModal: avatar
  } = useSelector(state => state.userProfile);
  const { defaultAvatar } = useSelector(state => state.general);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoModal(userId));
  }, [dispatch, userId]);

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
        myProfile={userId === id}
        following={6}
        followers={22}
        friends={12}
        recentVideos={[]}
        followedChannels={[]}
      />
    </ModalContainer>
  );
}
