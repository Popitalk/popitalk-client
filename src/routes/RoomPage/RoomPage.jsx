import React from "react";
import "./RoomPage.css";
import AnonRoomLeftPanel from "../../components/AnonRoomLeftPanel";
import FriendsPanel from "../../components/FriendsPanel";
import RoomMiddlePanel from "../../components/RoomMiddlePanel";
import RoomRightPanel from "../../components/RoomRightPanel";
import ChannelsPanel from "../../components/ChannelsPanel";

export default function RoomPage() {
  return (
    <div className="RoomPage--container">
      <ChannelsPanel />
      <FriendsPanel />
      <RoomMiddlePanel />
      <RoomRightPanel />
    </div>
  );
}
