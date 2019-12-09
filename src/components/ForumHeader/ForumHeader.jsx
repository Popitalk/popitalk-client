import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openFollowersModal } from "../../redux/actions";
import "./ForumHeader.css";

export default function ForumHeader() {
  const dispatch = useDispatch();
  const openFollowersModalDispatcher = useCallback(
    () => dispatch(openFollowersModal()),
    [dispatch]
  );

  return (
    <div className="ForumHeader--container">
      <div className="ForumHeader--icon">
        <div>
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="icon" />
        </div>
        <p onClick={openFollowersModalDispatcher}>
          <span>120</span> followers
        </p>
      </div>
      <div className="ForumHeader--bio">
        <h4>@Thelmo Society</h4>
        <p>
          The Thelomathesian Society was instituted in 1863 by Vasco P. Abbott
          and is the governing entity of the St. Lawrence University Student
          Body.
        </p>
        <div>
          <p>ADMINS</p>
        </div>
      </div>
      <button type="button" className="button">
        Follow
      </button>
    </div>
  );
}
