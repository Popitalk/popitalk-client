import React, { useState } from "react";

import "./VideoSources.css";

export default function VideoSources({ sources, source, setSource }) {
  const [firstShadeVisible, setFirstShadeVisible] = useState(false);
  const [secondShadeVisible, setSecondShadeVisible] = useState(true);
  return (
    <div className="VideoSources--container">
      {firstShadeVisible && <div className="VideoSources--firstShade" />}
      <div
        className="VideoSources--scroll"
        onScroll={e => {
          if (e.target.scrollLeft !== 0) {
            setFirstShadeVisible(true);
          } else {
            setFirstShadeVisible(false);
          }
          if (
            e.target.scrollWidth - e.target.scrollLeft ===
            e.target.offsetWidth
          ) {
            setSecondShadeVisible(false);
          } else {
            setSecondShadeVisible(true);
          }
        }}
      >
        <div>
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
      </div>
      {secondShadeVisible && <div className="VideoSources--secondShade" />}
    </div>
  );
}
