import React from "react";
import "./AnonRoomLeftPanel.css";
import CreateNewAccount from "../CreateNewAccount";
import InvitePanel from "../InvitePanel";

const Seperator = () => (
  <div className="AnonRoomLeftPanel--seperator">
    <div />
    <p>OR</p>
    <div />
  </div>
);

export default function AnonRoomLeftPanel() {
  return (
    <div className="AnonRoomLeftPanel--container">
      <InvitePanel />
      <Seperator />
      <CreateNewAccount />
    </div>
  );
}
