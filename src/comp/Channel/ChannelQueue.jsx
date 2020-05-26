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
    <div className="flex flex-col bg-secondaryBackground p-2">
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
      <div className="mt-3">
        <h2 className="text-2xl px-3">Queue Videos</h2>
        <p className="text-sm text-secondaryText px-3 mb-2">
          Add or change video up next. You can add up to 30 videos.
        </p>

        <ChannelListQueue playlist={playlist} />
      </div>
      <div className=" mt-16">
        <h2 className="text-2xl px-3">Find More Videos</h2>
        <VideoSearch
          trendingResults={trendingResults}
          searchResults={searchResults}
          threshold={3}
        />
      </div>
    </div>
  );
}
