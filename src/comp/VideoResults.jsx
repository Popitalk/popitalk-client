import React, { useState, useEffect } from "react";
import sources from "./videoSourceImages";
import VideoPanelCard from "./VideoPanelCard";

export default function VideoResults({
  results,
  totalResults,
  handleLoadMoreResults,
  threshold = 24
}) {
  const [currThreshold, setCurrThreshold] = useState(threshold);

  const setNextThreshold = prev => {
    let nextThreshold = prev + threshold;
    if (nextThreshold > results.length) {
      nextThreshold = results.length;
    }

    return nextThreshold;
  };

  const handleClick = () => {
    setCurrThreshold(setNextThreshold);
  };

  const handleLoad = () => {
    setCurrThreshold(setNextThreshold);
    handleLoadMoreResults(null);
  };

  const highestResults =
    results.length > totalResults ? results.length : totalResults;

  return (
    <div className="flex flex-col justify-center bg-secondaryBackground p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 row-gap-8">
        {results.map((result, idx) => {
          if (idx <= currThreshold - 1) {
            return <VideoPanelCard key={idx} {...result} />;
          }
        })}
      </div>

      {currThreshold < highestResults && (
        <div className="flex justify-center py-4">
          <button
            className="text-tertiaryText text-sm focus:outline-none bg-gradient-r-button p-2 rounded-xl"
            onClick={currThreshold < results.length ? handleClick : handleLoad}
          >
            Show more
          </button>
        </div>
      )}
      {results.length === 0 && (
        <p className="text-secondaryText text-sm text-center py-48">
          No results found
        </p>
      )}
    </div>
  );
}

// {!showComments && comments.length > 1 && (
//   <button
//     className="text-secondaryText text-sm"
//     onClick={() => setShowComments(!showComments)}
//   >
//     View more comments
//   </button>
// )}
// {showComments && comments.length > 1 && (
//   <button
//     className="text-secondaryText text-sm"
//     onClick={() => setShowComments(!showComments)}
//   >
//     Hide comments
//   </button>
// )}
// {comments.map((comment, idx) => {
//   if (!showComments && idx === comments.length - 1) {
//     return <ChannelComment key={idx} {...comment} />;
//   }
//   if (showComments) {
//     return <ChannelComment key={idx} {...comment} />;
//   }
// })}
// {showNewComment && <NewChannelComment />}
