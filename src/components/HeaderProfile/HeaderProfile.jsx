import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal } from "../../redux/actions";
import "./HeaderProfile.css";

export default function HeaderProfile() {
  const dispatch = useDispatch();
  const { id, username, avatar } = useSelector(state => state.userState);
  const { defaultAvatar } = useSelector(state => state.generalState);
  const openProfileModalDispatcher = useCallback(
    () => dispatch(openProfileModal(id)),
    [dispatch, id]
  );

  return (
    <div
      className="HeaderProfile--container"
      role="button"
      onClick={openProfileModalDispatcher}
    >
      <h4>{username}</h4>
      <img src={avatar || defaultAvatar} alt="avatar" />
    </div>
  );
}
