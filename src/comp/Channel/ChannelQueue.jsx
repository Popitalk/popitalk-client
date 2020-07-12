import React, { useState } from "react";
import "../VideoStatus.css";
import ChannelHeader from "../ChannelHeader";
import arrayMove from "array-move";
import VideoSearch from "../VideoSearch";
import ChannelListQueue from "./ChannelListQueue";

export default function ChannelQueue({
  id,
  name,
  icon,
  activeVideo,
  queue,
  type = "channel",
  trendingResults = [],
  searchResults = [],
  totalResults,
  handleSearch
}) {
  const [queueList, setQueueList] = useState(queue);
  const handlerChange = ({ oldIndex, newIndex }) => {
    setQueueList(arrayMove(queueList, oldIndex, newIndex));
  };
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
          <h2 className="px-4 text-lg">Find More Videos</h2>
          <VideoSearch
            trendingResults={trendingResults}
            searchResults={searchResults}
            totalResults={totalResults}
            threshold={12}
            handleSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
