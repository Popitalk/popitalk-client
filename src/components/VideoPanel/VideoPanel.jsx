import React from "react";
import "./VideoPanel.css";
import VideoPlayer from "../VideoPlayer";
import WatchingUsersList from "../WatchingUsersList";
import VideoQueuePanel from "../VideoQueuePanel";
import SearchSource from "../SearchSource";
import SearchResults from "../SearchResults";

export default function VideoPanel() {
  return (
    <div className="VideoPanel--container">
      <VideoPlayer />
      <WatchingUsersList />
      <VideoQueuePanel />
      <SearchSource />
      <SearchResults />
    </div>
  );
}
