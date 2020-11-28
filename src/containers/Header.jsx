import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  login,
  logout,
  deleteAccount,
  openProfileModal,
  openEditUserSettingsModal,
  openChangePasswordModal,
  openBlockedUsersModal
} from "../redux/actions";
import { mapIdsToUsers, setRelationshipHandlers } from "../helpers/functions";
import {
  SiteHeaderMain,
  SiteHeaderViewers,
  SiteHeaderWelcome
} from "../components/Headers";

const HeaderContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { loggedIn, defaultAvatar } = useSelector(state => state.general);
  const { id, username, avatar } = useSelector(state => state.self);
  const relationships = useSelector(state => state.relationships);
  const users = useSelector(state => state.users);
  const { status, loading, error } = useSelector(state => state.api.loginApi);

  const { receivedFriendRequests, sentFriendRequests } = relationships;

  useEffect(() => {
    if (status === "success") history.push("/channels");
  }, [history, status]);

  const setUserRelationships = user =>
    setRelationshipHandlers(user, relationships, dispatch, defaultAvatar, id);

  const requests = [...receivedFriendRequests, ...sentFriendRequests];
  const mappedUsers = mapIdsToUsers(requests, users, defaultAvatar);
  const friendRequests = mappedUsers.map(setUserRelationships);

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
        logoutHandler={() => dispatch(logout())}
      />
    );

  const viewer = location.pathname.includes("channels");

  if (viewer) return <SiteHeaderViewers />;

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
      apiLoading={loading}
      apiError={status === "error" ? error : false}
      dispatchLogin={handleLogin}
    />
  );
};

export default HeaderContainer;
