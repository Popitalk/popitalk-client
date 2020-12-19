import React from "react";
import { openProfileModal } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

export default function MessageAuthorUsername({ userId, username }) {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state => state.general);

  return (
    <span
      role="button"
      className="font-bold text-copy-primary"
      onClick={() => {
        if (loggedIn) {
          dispatch(openProfileModal(userId));
        }
      }}
    >
      {username}
    </span>
  );
}
