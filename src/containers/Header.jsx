/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/actions";
import SiteHeaderMain from "../comp/SiteHeaderMain";
import SiteHeaderWelcome from "../comp/SiteHeaderWelcome";

export default function HeaderContainer() {
  const { loggedIn } = useSelector(state => state.general);
  const { id, username, avatar } = useSelector(state => state.self);
  const { defaultAvatar } = useSelector(state => state.general);
  const apiLoading = useSelector(state => state.api.loginApi.loading);
  const dispatch = useDispatch();

  //TODO: Handle login errors
  //TODO: Retrieve notifications
  //TODO: Open profile modal

  if (loggedIn) {
    return (
      <SiteHeaderMain
        hasNotification={true}
        username={username}
        avatar={avatar || defaultAvatar}
        openProfileHandler={() => console.log(`open profile ${id}`)}
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
