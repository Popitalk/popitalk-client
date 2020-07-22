import React, { useState } from "react";
import VideoPanelCard from "./VideoPanelCard";
import Button from "./Controls/Button";

export default function VideoResults({
  results,
  totalResults,
  handleLoadMoreResults,
  threshold
}) {
  const [currThreshold, setCurrThreshold] = useState(threshold);

  const setNextThreshold = prev => {
    let nextThreshold = prev + threshold;
    if (nextThreshold > results.length) {
      nextThreshold = results.length;
    }

    return nextThreshold;
  };

  // const handleClick = () => {
  //   setCurrThreshold(setNextThreshold);
  // };

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
            return <VideoPanelCard key={idx} {...result} type="add" />;
          } else {
            return null;
          }
        })}
      </div>

      {currThreshold < highestResults && (
        <div className="flex justify-center pt-12 pb-8">
          <Button
            onClick={handleLoad}
            // onClick={currThreshold >= results.length ? handleClick : handleLoad}
          >
            Show more
          </Button>
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
