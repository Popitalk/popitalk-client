import React, { useState } from "react";
import VideoSearchBar from "./VideoSearchBar";
import VideoResults from "./VideoResults";
import strings from "../helpers/localization";

export default function VideoSearch({
  className,
  trendingResults,
  searchResults,
  totalResults,
  threshold,
  handleSearch,
  handleAddVideo
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = value => {
    setSearchTerm(value);
    handleSearch(value);
  };
  return (
    <div className="flex flex-col bg-secondaryBackground">
      <VideoSearchBar onClick={handleClick} />
      <div className="px-4">
        <span className="text-md rainbow-text font-bold">
          {searchTerm
            ? `${strings.searchResult} "${searchTerm}"`
            : strings.trending}
        </span>
      </div>
      {searchTerm.length > 0 ? (
        <VideoResults
          results={searchResults}
          totalResults={totalResults}
          handleLoadMoreResults={handleSearch}
          handleAddVideo={handleAddVideo}
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
