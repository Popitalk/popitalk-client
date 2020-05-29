import React from "react";
import { useSelector } from "react-redux";
import ModalManager from "../../comp/Modals/ModalManager";
import ProfileModal from "../../comp/Modals/ProfileModal";

export default function ProfileModalContainer({ handleModalClose }) {
  const { userId } = useSelector(state => state.modal);
  const { id, firstName, lastName, username, avatar } = useSelector(
    state => state.self
  );
  const { defaultAvatar } = useSelector(state => state.general);

  return (
    <ModalManager isOpen={true} handleModalClose={handleModalClose}>
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
    </ModalManager>
  );
}
