import React from "react";
import "./RoomPage.css";
// import AnonRoomLeftPanel from "../../components/AnonRoomLeftPanel";
import RoomMain from "../../components/RoomMain";
import ChatPanel from "../../components/ChatPanel";
import ChannelsPanel1 from "../../components/ChannelsPanel1";
import FriendsPanel from "../../components/FriendsPanel";

export default function RoomPage() {
  return (
    <div className="RoomPage--container">
      <ChannelsPanel1 />
      <FriendsPanel unexpandable={true} />
      <RoomMain />
      <ChatPanel />
    </div>
  );
}
