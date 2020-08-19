import React from "react";
import "../VideoStatus.css";
import VideoSearch from "../VideoSearch";
import ChannelListQueue from "./ChannelListQueue";
import strings from "../../helpers/localization";

export default function ChannelQueue({
  queue,
  trendingResults = [],
  searchResults = [],
  totalResults,
  handleSearch,
  handleAddVideo
}) {
  return (
    <div className="flex flex-col bg-secondaryBackground">
      <div className="px-4 my-4">
        <h2 className="text-2xl text-primaryText">{strings.manageUpNext}</h2>
        <p className="text-sm text-secondaryText">{strings.upNextSubtitle}</p>
      </div>
      <ChannelListQueue playlist={queue} />
      <div className="my-4">
        <h2 className="px-4 text-lg text-primaryText">
          {strings.findMoreVideos}
        </h2>
        <VideoSearch
          trendingResults={trendingResults}
          searchResults={searchResults}
          totalResults={totalResults}
          threshold={24}
          handleSearch={handleSearch}
          handleAddVideo={handleAddVideo}
        />
      </div>
    </div>
  );
}
