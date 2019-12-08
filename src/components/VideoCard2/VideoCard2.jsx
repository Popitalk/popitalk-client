import React from "react";
import YoutubeLogo from "../../assets/youtube-logo.png";
import "./VideoCard2.css";

export default function VideoCard2() {
  return (
    <div className="VideoCard2--container">
      <div className="VideoCard2--top">
        <img src="https://i.imgur.com/tLljw1z.jpg" alt="video" />
        <img src={YoutubeLogo} alt="youtube" />
        <div>
          <button type="button" className="button pill">
            Add to queue
          </button>
        </div>
      </div>
      <div className="VideoCard2--bottom">
        <h6>Week 4 Day 1 | LCS Spring Split (2019)</h6>
        <p>LoL Esports | 60K views. 2 months ago</p>
      </div>
    </div>
  );
}
