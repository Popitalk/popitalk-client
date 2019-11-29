import React from "react";
import "./RoomMiddlePanel.css";
import RoomHeader from "../RoomHeader";
import VideoPanel from "../VideoPanel";
import RoomOnlineUsersPanel from "../RoomOnlineUsersPanel";

export default function RoomMiddlePanel() {
  return (
    <div className="RoomMiddlePanel--container">
      <RoomHeader />
      <VideoPanel />
      <RoomOnlineUsersPanel />
    </div>
  );
}
