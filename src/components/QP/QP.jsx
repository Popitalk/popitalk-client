import React, { useState } from "react";
import VideoQueue from "../VideoQueue";
import VideoQueue2 from "../VideoQueue2";
import "./QP.css";

export default function QP() {
  const [queue, setQueue] = useState(false);

  return (
    <div className="QP--container">
      <div className="QP--header">
        <h5>Up Next</h5>
        <p onClick={() => setQueue(!queue)}>Edit queue</p>
      </div>
      {queue ? (
        <VideoQueue />
      ) : (
        <VideoQueue2 changeQueue={() => setQueue(!queue)} />
      )}
    </div>
  );
}
