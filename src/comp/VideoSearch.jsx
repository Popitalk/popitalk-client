import React, { useState } from "react";
import VideoSearchBar from "./VideoSearchBar";
import VideoResults from "./VideoResults";

export default function VideoSearch({
  className,
  trendingResults,
  searchResults,
  totalResults,
  threshold,
  handleSearch
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = value => {
    setSearchTerm(value);
    handleSearch(value);
  };
  return (
    <div className="flex flex-col bg-secondaryBackground">
      <VideoSearchBar onClick={handleClick} />
      <div className="pt-4 px-4">
        <span className="text-md rainbow-text font-bold">
          {searchTerm ? `Results for "${searchTerm}"` : "Trending Videos"}
        </span>
      </div>
      {searchTerm.length > 0 ? (
        <VideoResults
          results={searchResults}
          totalResults={totalResults}
          handleLoadMoreResults={handleSearch}
          threshold={threshold}
        />
      ) : (
        <VideoResults
          results={trendingResults}
          totalResults={trendingResults.length}
          threshold={threshold}
        />
      )}
    </div>
  );
}
