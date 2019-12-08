import React from "react";
import "./ForumHeader.css";

export default function ForumHeader() {
  return (
    <div className="ForumHeader--container">
      <div className="ForumHeader--icon">
        <div>
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="icon" />
        </div>
        <p>
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
      {/* <div className="ForumHeader--following">
        <p>Following</p>
      </div> */}
    </div>
  );
}
