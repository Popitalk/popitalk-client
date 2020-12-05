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
  const { id: myId, channelIds } = useSelector(state => state.self);
  const { defaultAvatar } = useSelector(state => state.general);
  const relationships = useSelector(state => state.relationships);
  const channels = useSelector(state => state.channels);
  const { id, firstName, lastName, username, avatar } = useSelector(
    state => state.userProfile
  );
  const { status } = useSelector(state => state.api.userProfile);

  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [dispatch, userId]);

  const followingChannelsCount = channelIds.reduce((acc, channelId) => {
    const ownerId = channels[channelId].ownerId || channels[channelId].owner_id;
    const members = channels[channelId].members;
    const isOwner = ownerId === myId;
    const isMember = members && members.includes(myId);

    return !isOwner && isMember ? acc + 1 : acc;
  }, 0);

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
        following={followingChannelsCount}
        followers={22}
        friends={relationships.friends.length}
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
