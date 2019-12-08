import React from "react";
import "./UserPage.css";
import ChannelsPanel from "../../components/ChannelsPanel";
import FriendsPanel2 from "../../components/FriendsPanel2";
import Profile2 from "../../components/Profile2";

export default function UserPage() {
  return (
    <div className="UserPage--container">
      <ChannelsPanel />
      <Profile2 />
      <FriendsPanel2 />
    </div>
  );
}
