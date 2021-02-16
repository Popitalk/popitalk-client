import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  login,
  logout,
  deleteAccount,
  searchChannels,
  setSelectedTab
} from "../redux/actions";
import {
  openProfileModal,
  openEditUserSettingsModal,
  openChangePasswordModal,
  openBlockedUsersModal
} from "../redux";
import { mapIdsToUsers, setRelationshipHandlers } from "../helpers/functions";
import {
  SiteHeaderMain,
  SiteHeaderViewers,
  SiteHeaderWelcome
} from "../components/Headers";

const HeaderContainer = ({ windowSize }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { loggedIn, defaultAvatar } = useSelector(state => state.general);
  const { id, username, avatar } = useSelector(state => state.self);
  const relationships = useSelector(state => state.relationships);
  const users = useSelector(state => state.users);
  const { status, loading, error } = useSelector(state => state.api.loginApi);

  const { receivedFriendRequests, sentFriendRequests } = relationships;
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(() => {
    history.push("/");
    dispatch(searchChannels({ channelName: search }));
    dispatch(setSelectedTab(false));
  }, [history, dispatch, search]);

  const setUserRelationships = user =>
    setRelationshipHandlers(user, relationships, dispatch, defaultAvatar, id);

  const handleLogin = (username, password) => {
    dispatch(
      login({
        usernameOrEmail: username,
        password: password
      })
    );
  };

  useEffect(() => {
    if (status === "success") history.push("/");
  }, [history, status]);
  useEffect(() => {
    if (pathname !== "/welcome") {
      const listener = event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          handleSearch();
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }
  }, [handleSearch, pathname, search]);

  const requests = [...receivedFriendRequests, ...sentFriendRequests];
  const mappedUsers = mapIdsToUsers(requests, users, defaultAvatar);
  const friendRequests = mappedUsers.map(setUserRelationships);
  const signUp = pathname === "/welcome" || pathname === "/welcome/";

  if (loggedIn)
    return (
      <SiteHeaderMain
        userID={id}
        username={username}
        avatar={avatar || defaultAvatar}
        friendRequests={friendRequests}
        notifications={[]}
        openProfileHandler={id => dispatch(openProfileModal(id))}
        openBlockedUsersHandler={() => dispatch(openBlockedUsersModal())}
        openEditInformationHandler={() => dispatch(openEditUserSettingsModal())}
        openChangePasswordHandler={() => dispatch(openChangePasswordModal())}
        clearNotificationsHandler={() => console.log("clear notifications")}
        deleteAccountHandler={() => dispatch(deleteAccount())}
        logoutHandler={() => {
          dispatch(logout());
          history.push("/");
        }}
        setSearch={e => setSearch(e.target.value)}
        search={search}
        handleSearch={handleSearch}
        windowSize={windowSize}
      />
    );
  if (signUp)
    return (
      <SiteHeaderWelcome
        apiLoading={loading}
        apiError={status === "error" ? error : false}
        dispatchLogin={handleLogin}
      />
    );
  return (
    <SiteHeaderViewers
      setSearch={e => setSearch(e.target.value)}
      search={search}
      handleSearch={handleSearch}
    />
  );
};

export default HeaderContainer;
