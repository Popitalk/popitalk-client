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
      <img src="https://i.imgur.com/tLljw1z.jpg" alt="icon" />
      <div className="ForumHeader--bio">
        <h2>Thelmo Society</h2>
        <h4 onClick={openFollowersModalDispatcher}>
          <span>120</span> followers
        </h4>
        <p>
          The Thelomathesian Society was instituted in 1863 by Vasco P. Abbott
          and is the governing entity of the St. Lawrence University Student
          Body.
        </p>
        <div>
          <p>ADMINS</p>
          <div>
            <img src="https://i.imgur.com/tLljw1z.jpg" alt="admin icons" />
            <img src="https://i.imgur.com/tLljw1z.jpg" alt="admin icons" />
            <img src="https://i.imgur.com/tLljw1z.jpg" alt="admin icons" />
            <img src="https://i.imgur.com/tLljw1z.jpg" alt="admin icons" />
          </div>
        </div>
      </div>
      <button type="button" className="button">
        Follow
      </button>
    </div>
  );
}
