import React, { useState } from "react";
import VideoQueue1 from "../VideoQueue1";
import VideoQueue2 from "../VideoQueue2";
import "./VideoQueuePanel.css";

export default function VideoQueuePanel() {
  return (
    <div className="VideoQueuePanel--container">
      <div className="VideoQueuePanel--header">
        <h5>Up Next</h5>
      </div>
      <VideoQueue2 />
    </div>
  );
}
