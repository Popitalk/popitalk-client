import React from "react";

import "./VideoSources.css";

export default function VideoSources({ sources, source, setSource }) {
  return (
    <div className="VideoSources--container">
      {sources.map(s => (
        <div
          key={s.source}
          role="button"
          onClick={() => setSource(s.source)}
          className={`VideoSources--source${
            s.source === source ? " VideoSources--active" : ""
          }`}
        >
          <div className="VideoSources--sources--slab" />
          <img src={s.icon} alt={`${s.source} icon`} />
          <p>{s.source}</p>
        </div>
      ))}
    </div>
  );
}
