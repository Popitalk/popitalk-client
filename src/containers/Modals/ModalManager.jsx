import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearProfileInfo } from "../../redux/actions";
import { closeModalFinal } from "../../redux";
import ProfileModal from "./ProfileModalContainer";
import EditUserSettingsContainer from "./EditUserSettingsContainer";
import ChangePasswordContainer from "./ChangePasswordContainer";
import BlockedUsersContainer from "./BlockedUsersContainer";
import InviteFriendsContainer from "./InviteFriendsContainer";
import SocialShareContainer from "./SocialShareContainer";
import RoomExistsContainer from "./RoomExistsContainer";
import DeleteMessageContainer from "./DeleteMessageContainer";
import ListUsersContainer from "./ListUsersContainer";
import DeleteChannelContainer from "./DeleteChannelContainer";
import DeletePostContainer from "./DeletePostContainer.jsx";
import {
  MODAL_PROFILE,
  MODAL_EDIT_USER_SETTINGS,
  MODAL_CHANGE_PASSWORD,
  MODAL_BLOCKED_USERS,
  MODAL_INVITE,
  MODAL_SOCIAL_SHARE,
  MODAL_ROOM_EXISTS,
  MODAL_DELETE_MESSAGE,
  MODAL_LIST,
  MODAL_DELETE_CHANNEL,
  MODAL_DELETE_POST
} from "../../helpers/constants";

const ModalComponents = {
  [MODAL_PROFILE]: ProfileModal,
  [MODAL_EDIT_USER_SETTINGS]: EditUserSettingsContainer,
  [MODAL_CHANGE_PASSWORD]: ChangePasswordContainer,
  [MODAL_BLOCKED_USERS]: BlockedUsersContainer,
  [MODAL_INVITE]: InviteFriendsContainer,
  [MODAL_SOCIAL_SHARE]: SocialShareContainer,
  [MODAL_ROOM_EXISTS]: RoomExistsContainer,
  [MODAL_DELETE_MESSAGE]: DeleteMessageContainer,
  [MODAL_LIST]: ListUsersContainer,
  [MODAL_DELETE_CHANNEL]: DeleteChannelContainer,
  [MODAL_DELETE_POST]: DeletePostContainer
};

const ModalManager = () => {
  const dispatch = useDispatch();

  const { components } = useSelector(state => state.modal);

  const handleModalClose = () => {
    dispatch(closeModalFinal());
    dispatch(clearProfileInfo());
  };

  const isModalOpen = components.length > 0;
  const currentModal = components[components.length - 1];
  const ModalType = ModalComponents[currentModal];

  return (
    <>{isModalOpen && <ModalType handleModalClose={handleModalClose} />}</>
  );
};

export default ModalManager;
