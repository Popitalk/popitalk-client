import React from "react";
import "./VideoPanel.css";
import VideoPlayer from "../VideoPlayer";
import RoomOnlineUsersPanel from "../RoomOnlineUsersPanel";
import VideoQueue from "../VideoQueue";
import VideoQueue2 from "../VideoQueue2";
import SearchSource from "../SearchSource";
import SearchResults from "../SearchResults";

export default function VideoPanel() {
  return (
    <div className="VideoPanel--container">
      <VideoPlayer />
      <RoomOnlineUsersPanel />
      <VideoQueue />
      {/* <VideoQueue2 /> */}
      <SearchSource />
      <SearchResults />
    </div>
  );
}
