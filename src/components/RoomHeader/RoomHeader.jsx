import React from "react";
import "./RoomHeader.css";

export default function RoomHeader() {
  const handleRoomClose = () => {
    console.log("CLOSING ROOM");
  };

  return (
    <div className="RoomHeader--container">
      <div role="button" onClick={handleRoomClose}>
        <i className="fas fa-chevron-left fa-lg" />
      </div>
      <h2>Anonymous#123</h2>
    </div>
  );
}
