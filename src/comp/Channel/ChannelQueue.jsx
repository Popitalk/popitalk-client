import React, { useState } from "react";
import "../VideoStatus.css";
import VideoChannelHeader from "../VideoChannelHeader";
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
  searchResults = []
}) {
  const [queueList, setQueueList] = useState(queue);
  const handlerChange = ({ oldIndex, newIndex }) => {
    setQueueList(arrayMove(queueList, oldIndex, newIndex));
  };
  const playlist = [activeVideo, ...queue];

  return (
    <div className="flex flex-col bg-secondaryBackground">
      <VideoChannelHeader
        id={id}
        name={name}
        icon={icon}
        videoStatus={
          activeVideo && activeVideo.status ? activeVideo.status : ""
        }
        type={type}
        select="Queue"
      />
      <div className="p-2">
        <div className="mt-3">
          <h2 className="px-3 text-2xl">Queue Videos</h2>
          <p className="px-3 mb-2 text-sm text-secondaryText">
            Add or change video up next. You can add up to 30 videos.
          </p>

          <ChannelListQueue playlist={playlist} />
        </div>
        <div className="mt-16 ">
          <h2 className="px-3 text-2xl">Find More Videos</h2>
          <VideoSearch
            trendingResults={trendingResults}
            searchResults={searchResults}
            threshold={3}
          />
        </div>
      </div>
    </div>
  );
}
