import React from "react";
import VideoSearchBar from "./VideoSearchBar";
import VideoResults from "./ThumbnailCardLists/VideoResults";
import strings from "../helpers/localization";

export default function VideoSearch({
  searchTerm,
  searchResults,
  totalResults,
  handleSearch,
  handleAddVideo
}) {
  return (
    <div className="flex flex-col bg-secondaryBackground">
      <VideoSearchBar onClick={handleSearch} />
      <div className="px-4">
        <span className="text-md rainbow-text font-bold">
          {searchTerm
            ? `${strings.searchResult} "${searchTerm}"`
            : strings.trending}
        </span>
      </div>
      <VideoResults
        results={searchResults}
        totalResults={totalResults}
        handleLoadMoreResults={handleSearch}
        handleAddVideo={handleAddVideo}
      />
    </div>
  );
}
