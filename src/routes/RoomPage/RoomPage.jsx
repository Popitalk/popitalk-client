import React from "react";
import "./RoomPage.css";
import AnonRoomLeftPanel from "../../components/AnonRoomLeftPanel";
import FriendsPanel from "../../components/FriendsPanel";
import RoomMiddlePanel from "../../components/RoomMiddlePanel";
import RoomRightPanel from "../../components/RoomRightPanel";
import ChannelsPanel from "../../components/ChannelsPanel";
import FP2 from "../../components/FP2";

export default function RoomPage() {
  return (
    <div className="RoomPage--container">
      <ChannelsPanel />
      {/* <FriendsPanel /> */}
      <FP2 />
      <RoomMiddlePanel />
      <RoomRightPanel />
    </div>
  );
}
