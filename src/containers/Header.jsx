/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  login,
  logout,
  deleteAccount,
  openProfileModal,
  openEditUserSettingsModal,
  openChangePasswordModal,
  acceptFriendRequest,
  rejectFriendRequest,
  openBlockedUsersModal
} from "../redux/actions";
import SiteHeaderMain from "../comp/SiteHeaderMain";
import SiteHeaderWelcome from "../comp/SiteHeaderWelcome";

export default function HeaderContainer() {
  const { loggedIn } = useSelector(state => state.general);
  const { id, username, avatar } = useSelector(state => state.self);
  const { defaultAvatar } = useSelector(state => state.general);
  const { receivedFriendRequests } = useSelector(state => state.relationships);
  const loginApi = useSelector(state => state.api.loginApi);
  const history = useHistory();

  const dispatch = useDispatch();
  const deleteAccountDispatcher = useCallback(() => dispatch(deleteAccount()), [
    dispatch
  ]);

  useEffect(() => {
    if (loginApi.status === "success") {
      history.push("/channels");
    }
  }, [history, loginApi]);

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
        openBlockedUsersHandler={() => dispatch(openBlockedUsersModal())}
        openEditInformationHandler={() => dispatch(openEditUserSettingsModal())}
        openChangePasswordHandler={() => dispatch(openChangePasswordModal())}
        acceptRequestHandler={id => dispatch(acceptFriendRequest(id))}
        rejectRequestHandler={id => dispatch(rejectFriendRequest(id))}
        clearNotificationsHandler={() => console.log("clear notifications")}
        deleteAccountHandler={deleteAccountDispatcher}
        logoutHandler={() => {
          dispatch(logout());
          history.push("/welcome");
        }}
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
      <SiteHeaderWelcome
        apiLoading={loginApi.loading}
        apiError={loginApi.status === "error" ? loginApi.error : false}
        dispatchLogin={handleLogin}
      />
    );
  }
}
