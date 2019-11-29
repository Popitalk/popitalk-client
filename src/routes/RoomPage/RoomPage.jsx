import React from "react";
import "./RoomPage.css";
import AnonRoomLeftPanel from "../../components/AnonRoomLeftPanel";
import RoomMiddlePanel from "../../components/RoomMiddlePanel";
import RoomRightPanel from "../../components/RoomRightPanel";

export default function RoomPage() {
  return (
    <div className="RoomPage--container">
      <AnonRoomLeftPanel />
      <RoomMiddlePanel />
      <RoomRightPanel />
    </div>
  );
}
