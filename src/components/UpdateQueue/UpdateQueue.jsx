import React, { useState } from "react";
import VideoQueue1 from "../VideoQueue1";
import SearchSource from "../SearchSource";
import SearchResults from "../SearchResults";
import "./UpdateQueue.css";

export default function UpdateQueue() {
  return (
    <div className="UpdateQueue--container">
      <div className="UpdateQueue--header">
        <h2>Edit video schedule</h2>
        <p>
          <span>Loop 1 (30 videos)</span>Drag and drop videos into the loop
        </p>
      </div>
      <VideoQueue1 />
      <SearchSource />
      <SearchResults />
    </div>
  );
}
