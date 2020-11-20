import React from "react";
import VideoSearch from "../VideoSearch";
import ChannelListQueue from "../ThumbnailCardLists/ChannelListQueue";

function ChannelQueue(
  {
    queue,
    handleSwapVideos,
    handleDeleteVideo,
    searchTerm,
    searchResults = [],
    totalResults,
    handleSearch,
    handleFindMore,
    handleAddVideo,
    isChannel
  },
  ref
) {
  return (
    <div className="flex flex-col bg-background-secondary">
      <ChannelListQueue
        playlist={queue}
        handleChange={handleSwapVideos}
        handleDeleteVideo={handleDeleteVideo}
        handleFindMore={handleFindMore}
      />
      {isChannel === true && (
        <VideoSearch
          ref={ref}
          searchTerm={searchTerm}
          searchResults={searchResults}
          totalResults={totalResults}
          handleSearch={handleSearch}
          handleAddVideo={handleAddVideo}
        />
      )}
    </div>
  );
}

export default React.forwardRef(ChannelQueue);
