import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openFollowersModal } from "../../redux/actions";
import "./ChatHeader.css";

export default function ChatHeader() {
  const dispatch = useDispatch();
  const openFollowersModalDispatcher = useCallback(
    () => dispatch(openFollowersModal()),
    [dispatch]
  );

  return (
    <div className="ChatHeader--container">
      <div className="ChatHeader--private">
        <p onClick={openFollowersModalDispatcher}>
          Private Chat - <span>120 people</span>
        </p>
      </div>
      {/* <div className="ChatHeader--live">
        <p>Team Playnow</p>
      </div> */}
    </div>
  );
}
