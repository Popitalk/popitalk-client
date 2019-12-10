import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openUserSettingsModal } from "../../redux/actions";
import "./HeaderSettings.css";

export default function HeaderSettings() {
  const dispatch = useDispatch();
  const openUserSettingsModalDispatcher = useCallback(
    () => dispatch(openUserSettingsModal()),
    [dispatch]
  );

  return (
    <div className="HeaderSettings--container">
      <i
        className="fas fa-cog fa-2x"
        role="button"
        onClick={openUserSettingsModalDispatcher}
      />
    </div>
  );
}
