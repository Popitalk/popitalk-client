import React from "react";
import "./UserPage.css";
import ChannelsPanel1 from "../../components/ChannelsPanel1";
import FriendsPanel1 from "../../components/FriendsPanel1";
import UserMain from "../../components/UserMain";

export default function UserPage() {
  return (
    <div className="UserPage--container">
      <ChannelsPanel1 />
      <UserMain />
      <FriendsPanel1 />
    </div>
  );
}
