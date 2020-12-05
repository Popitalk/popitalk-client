import React, { useState } from "react";
import VideoCardHorizontalPlaylist from "../ThumbnailCards/VideoCardHorizontalPlaylist";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";
import { VIDEO_RESULTS_PER_PAGE } from "../../helpers/constants";

export default function VideoResults({
  results,
  totalResults,
  handleLoadMoreResults,
  handleAddVideo,
  threshold = VIDEO_RESULTS_PER_PAGE
}) {
  const [currThreshold, setCurrThreshold] = useState(threshold);

  const setNextThreshold = prev => {
    let nextThreshold = prev + threshold;
    if (nextThreshold > totalResults) {
      nextThreshold = totalResults;
    }

    return nextThreshold;
  };

  // const handleClick = () => {
  //   setCurrThreshold(setNextThreshold);
  // };

  const handleLoad = () => {
    setCurrThreshold(setNextThreshold);
    handleLoadMoreResults(null, null, true);
  };

  const highestResults =
    results.length > totalResults ? results.length : totalResults;

  return (
    <div className="flex flex-col justify-center bg-background-secondary p-4">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-8">
        {results.map((result, idx) => {
          if (idx <= currThreshold - 1) {
            return (
              <VideoCardHorizontalPlaylist
                key={idx}
                {...result}
                type="add"
                handleAddVideo={handleAddVideo}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      {currThreshold < highestResults && (
        <div className="flex justify-center pt-12 pb-8">
          <Button
            styleNone
            styleNoneContent={strings.loadMoreButton}
            styleNoneContentClassName="text-copy-highlight text-sm font-bold"
            hoverable
            className="w-24 hover:bg-hover-highlight h-10 mx-2 rounded-xl"
            onClick={handleLoad}
            analyticsString="Show More Video: Video Results"
            // onClick={currThreshold >= results.length ? handleClick : handleLoad}
          />
        </div>
      )}
      {results.length === 0 && (
        <p className="text-copy-secondary text-sm text-center py-48">
          {strings.noVideosFound}
        </p>
      )}
    </div>
  );
}
