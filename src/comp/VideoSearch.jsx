import React, { useState } from "react";
import sources from "./videoSourceImages";
import VideoSearchBar from "./VideoSearchBar";
import VideoResults from "./VideoResults";

export default function VideoSearch({
  className,
  trendingResults,
  searchResults,
  threshold
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = value => {
    setSearchTerm(value);
  };
  return (
    <div className="flex flex-col bg-secondaryBackground">
      <VideoSearchBar onClick={handleClick} />
      <div className="pt-4 px-4">
        <span className="text-md rainbow-text font-bold">
          {searchTerm
            ? `Results for ${searchTerm}`
            : "Trending videos right now"}
        </span>
      </div>
      {searchTerm.length > 0 ? (
        <VideoResults results={searchResults} threshold={threshold} />
      ) : (
        <VideoResults results={trendingResults} threshold={threshold} />
      )}
    </div>
  );
}
