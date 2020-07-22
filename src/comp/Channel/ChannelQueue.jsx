import React from "react";
import "../VideoStatus.css";
import VideoSearch from "../VideoSearch";
import ChannelListQueue from "./ChannelListQueue";

export default function ChannelQueue({
  activeVideo,
  queue,
  trendingResults = [],
  searchResults = [],
  totalResults,
  handleSearch
}) {
  // const handlerChange = ({ oldIndex, newIndex }) => {
  //   setQueueList(arrayMove(queueList, oldIndex, newIndex));
  // };
  const playlist = [activeVideo, ...queue];

  return (
    <div className="flex flex-col bg-secondaryBackground">
      <div className="p-0">
        <div className="mt-4">
          <h2 className="px-4 text-2xl text-primaryText">
            Manage Videos Up Next
          </h2>
          <p className="px-4 mb-2 text-sm text-secondaryText">
            Add or change videos up next. You can add up to 30 videos.
          </p>

          <ChannelListQueue playlist={playlist} />
        </div>
        <div className="mt-8 ">
          <h2 className="px-4 text-lg font-bold">Find More Videos</h2>
          <VideoSearch
            trendingResults={trendingResults}
            searchResults={searchResults}
            totalResults={totalResults}
            threshold={24}
            handleSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
