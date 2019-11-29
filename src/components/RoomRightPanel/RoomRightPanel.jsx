import React from "react";
import "./RoomRightPanel.css";
import ChatHeader from "../ChatHeader";
import ChatPanel from "../ChatPanel";
import DraftPanel from "../DraftPanel";

export default function RoomRightPanel() {
  return (
    <div className="RoomRightPanel--container">
      <ChatHeader />
      <ChatPanel />
      <DraftPanel />
    </div>
  );
}
