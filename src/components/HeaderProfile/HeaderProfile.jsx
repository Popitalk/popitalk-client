import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openProfileModal } from "../../redux/actions";
import "./HeaderProfile.css";

export default function HeaderProfile() {
  const dispatch = useDispatch();
  const openProfileModalDispatcher = useCallback(
    () => dispatch(openProfileModal()),
    [dispatch]
  );

  return (
    <div
      className="HeaderProfile--container"
      role="button"
      onClick={openProfileModalDispatcher}
    >
      <h4>Andrew</h4>
      <div>
        <img src="https://i.imgur.com/aqjzchq.jpg" alt="avatar" />
      </div>
    </div>
  );
}
