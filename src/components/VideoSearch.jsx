import React from "react";
import VideoSearchBar from "./VideoSearchBar";
import VideoResults from "./ThumbnailCardLists/VideoResults";
import strings from "../localization/strings";

function VideoSearch(
  { searchTerm, searchResults, totalResults, handleSearch, handleAddVideo },
  ref
) {
  return (
    <div className="my-4" ref={ref}>
      <h2 className="text-lg text-copy-primary font-bold px-4">
        {strings.findMoreVideos}
      </h2>
      <div className="flex flex-col bg-background-secondary">
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
    </div>
  );
}

export default React.forwardRef(VideoSearch);
