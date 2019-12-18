import React from "react";
import VideoCard1 from "../VideoCard1";
import "./SearchResults.css";

export default function SearchResults() {
  return (
    <div className="SearchResults--container">
      <h4>Results for: &quot;abcd&quot;</h4>
      <div className="SearchResults--results">
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
        <VideoCard1 />
      </div>
    </div>
  );
}
