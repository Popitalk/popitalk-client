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
      <div className="px-4 my-4">
        <h2 className="text-2xl text-primaryText">Manage Videos Up Next</h2>
        <p className="text-sm text-secondaryText">
          Add or change videos up next. You can add up to 30 videos.
        </p>
      </div>
      <ChannelListQueue playlist={playlist} />
      <div className="my-4">
        <h2 className="px-4 text-lg">Find More Videos</h2>
        <VideoSearch
          trendingResults={trendingResults}
          searchResults={searchResults}
          totalResults={totalResults}
          threshold={24}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
}
