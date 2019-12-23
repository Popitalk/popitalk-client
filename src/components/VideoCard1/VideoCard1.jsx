import React from "react";
import YoutubeLogo from "../../assets/youtube-logo.png";
import "./VideoCard1.css";
import Button1 from "../Button1";

export default function VideoCard1() {
  return (
    <div className="VideoCard1--container">
      <div className="VideoCard1--top">
        <img src="https://i.imgur.com/tLljw1z.jpg" alt="video" />
        <img src={YoutubeLogo} alt="youtube" />
      </div>
      <div className="VideoCard1--bottom">
        <h6>Week 4 Day 1 | LCS Spring Split (2019)</h6>
        <p>LoL Esports | 60K views. 2 months ago</p>
      </div>
      <div className="VideoCard1--shade">
        {/* <button type="button" className="button pill">
          Add to queue
        </button> */}
        <Button1 pill size="lg">
          Add to queue
        </Button1>
      </div>
    </div>
  );
}
