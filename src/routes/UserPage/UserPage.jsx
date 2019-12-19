import React from "react";
import "./UserPage.css";
import ChannelsPanel1 from "../../components/ChannelsPanel1";
import FriendsPanel from "../../components/FriendsPanel";
import UserMain from "../../components/UserMain";

export default function UserPage() {
  return (
    <div className="UserPage--container">
      <ChannelsPanel1 />
      <UserMain />
      <FriendsPanel />
    </div>
  );
}
