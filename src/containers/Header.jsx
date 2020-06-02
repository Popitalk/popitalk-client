/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  logout,
  deleteAccount,
  openProfileModal,
  openEditUserSettingsModal,
  acceptFriendRequest,
  rejectFriendRequest
} from "../redux/actions";
import SiteHeaderMain from "../comp/SiteHeaderMain";
import SiteHeaderWelcome from "../comp/SiteHeaderWelcome";

export default function HeaderContainer() {
  const { loggedIn } = useSelector(state => state.general);
  const { id, username, avatar } = useSelector(state => state.self);
  const { defaultAvatar } = useSelector(state => state.general);
  const { receivedFriendRequests } = useSelector(state => state.relationships);
  const apiLoading = useSelector(state => state.api.loginApi.loading);
  const dispatch = useDispatch();
  const deleteAccountDispatcher = useCallback(() => dispatch(deleteAccount()), [
    dispatch
  ]);

  if (loggedIn) {
    return (
      <SiteHeaderMain
        hasNotification={true}
        userID={id}
        username={username}
        avatar={avatar || defaultAvatar}
        friendRequests={receivedFriendRequests}
        notifications={[]}
        openProfileHandler={id => dispatch(openProfileModal(id))}
        openEditInformationHandler={() => dispatch(openEditUserSettingsModal())}
        acceptRequestHandler={id => dispatch(acceptFriendRequest(id))}
        rejectRequestHandler={id => dispatch(rejectFriendRequest(id))}
        clearNotificationsHandler={() => console.log("clear notifications")}
        deleteAccountHandler={deleteAccountDispatcher}
        logoutHandler={() => dispatch(logout())}
      />
    );
  } else {
    const handleLogin = (username, password) => {
      dispatch(
        login({
          usernameOrEmail: username,
          password: password
        })
      );
    };

    return (
      <SiteHeaderWelcome apiLoading={apiLoading} dispatchLogin={handleLogin} />
    );
  }
}
