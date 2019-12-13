import React, { useState } from "react";
import VideoQueue1 from "../VideoQueue1";
import VideoQueue2 from "../VideoQueue2";
import "./VideoQueuePanel.css";

export default function VideoQueuePanel() {
  const [queue, setQueue] = useState(false);

  return (
    <div className="VideoQueuePanel--container">
      <div className="VideoQueuePanel--header">
        <h5>Up Next</h5>
        <p onClick={() => setQueue(!queue)}>Edit queue</p>
      </div>
      {queue ? (
        <VideoQueue1 />
      ) : (
        <VideoQueue2 changeQueue={() => setQueue(!queue)} />
      )}
    </div>
  );
}
