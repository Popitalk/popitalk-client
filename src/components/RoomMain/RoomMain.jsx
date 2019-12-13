import React from "react";
import "./RoomMain.css";
import RoomHeader from "../RoomHeader";
import VideoPanel from "../VideoPanel";

export default function RoomMain() {
  return (
    <div className="RoomMain--container">
      <RoomHeader />
      <VideoPanel />
    </div>
  );
}
