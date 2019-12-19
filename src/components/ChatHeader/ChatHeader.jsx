import React from "react";
import "./ChatHeader.css";

export default function ChatHeader() {
  return (
    <div className="ChatHeader--container">
      <div className="ChatHeader--private">
        <p>Private Chat</p>
      </div>
      {/* <div className="ChatHeader--live">
        <p>Team Playnow</p>
      </div> */}
    </div>
  );
}
