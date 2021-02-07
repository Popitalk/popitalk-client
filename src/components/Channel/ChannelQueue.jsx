import React from "react";
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
    <div className="flex flex-col">
      <ChannelListQueue
        playlist={queue}
        handleChange={handleSwapVideos}
        handleDeleteVideo={handleDeleteVideo}
        handleFindMore={handleFindMore}
      />
    </div>
  );
}

export default React.forwardRef(ChannelQueue);
