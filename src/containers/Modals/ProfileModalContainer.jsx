import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ModalContainer from "../../components/Modals/ModalContainer";
import ProfileModal from "../../components/Modals/ProfileModal";
import { setRelationshipHandlers } from "../../helpers/functions";
import {
  getUserInfo,
  deleteFriend,
  blockUser,
  unblockUser,
  updateUser,
  clearError
} from "../../redux/actions";

const ProfileModalContainer = ({ handleModalClose }) => {
  const dispatch = useDispatch();

  const { userId } = useSelector(state => state.modal);
  const { id: myId } = useSelector(state => state.self);
  const { defaultAvatar } = useSelector(state => state.general);
  const relationships = useSelector(state => state.relationships);
  const { status } = useSelector(state => state.api.userProfile);
  const {
    id,
    firstName,
    lastName,
    username,
    avatar,
    followingCount,
    friendsCount
  } = useSelector(state => state.userProfile);

  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [dispatch, userId]);

  const plainUser = {
    id,
    firstName,
    lastName,
    username,
    avatar
  };

  const user = setRelationshipHandlers(
    plainUser,
    relationships,
    dispatch,
    id !== myId ? defaultAvatar : null,
    myId
  );

  const updateAvatar = avatar => dispatch(updateUser({ avatar }));

  const blockHandler =
    user.variant === "blocked"
      ? () => dispatch(unblockUser(userId))
      : () => dispatch(blockUser(plainUser));

  const closeModalAndClearError = () => {
    handleModalClose();
    dispatch(clearError());
  };

  return (
    <ModalContainer
      isOpen={true}
      handleModalClose={closeModalAndClearError}
      width="sm"
    >
      <ProfileModal
        user={user}
        following={followingCount}
        followers={22}
        friends={friendsCount}
        recentVideos={[]}
        followedChannels={[]}
        unfriendHandler={() => dispatch(deleteFriend(userId))}
        blockHandler={blockHandler}
        updateAvatar={updateAvatar}
        status={status}
      />
    </ModalContainer>
  );
};

export default ProfileModalContainer;
