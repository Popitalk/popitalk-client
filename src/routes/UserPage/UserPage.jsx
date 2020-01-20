import React from "react";
import "./UserPage.css";
import ChannelsPanel1 from "../../components/ChannelsPanel1";
import FriendsPanel from "../../components/FriendsPanel";
import UserProfile from "../../components/UserProfile";
import UserMain from "../../components/UserMain";

export default function UserPage() {
  return (
    <div className="UserPage--container">
      <ChannelsPanel1 />
      <UserMain />
      {/* <UserProfile /> */}
      <FriendsPanel />
    </div>
  );
}
