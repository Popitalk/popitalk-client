import React from "react";
import "./RoomMiddlePanel.css";
import RoomHeader from "../RoomHeader";
import VideoPanel from "../VideoPanel";

export default function RoomMiddlePanel() {
  return (
    <div className="RoomMiddlePanel--container">
      <RoomHeader />
      <VideoPanel />
    </div>
  );
}
