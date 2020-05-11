import React from "react";
import VideoPanelCard from "./VideoPanelCard";

export default function QueueSection({ queueList }) {
  return (
    <div className="flex flex-row justify-start overflow-auto">
      {queueList.map((video, idx) => {
        return <VideoPanelCard key={idx} {...video} />;
      })}
      <VideoPanelCard />
    </div>
  );
}
