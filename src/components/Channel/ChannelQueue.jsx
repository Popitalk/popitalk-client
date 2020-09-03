import React from "react";
import "../VideoStatus.css";
import VideoSearch from "../VideoSearch";
import ChannelListQueue from "../ThumbnailCardLists/ChannelListQueue";
import strings from "../../helpers/localization";

export default function ChannelQueue({
  queue,
  handleSwapVideos,
  handleDeleteVideo,
  searchTerm,
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
      <ChannelListQueue
        playlist={queue}
        handleChange={handleSwapVideos}
        handleDeleteVideo={handleDeleteVideo}
      />
      <div className="my-4">
        <h2 className="px-4 text-lg text-primaryText">
          {strings.findMoreVideos}
        </h2>
        <VideoSearch
          searchTerm={searchTerm}
          searchResults={searchResults}
          totalResults={totalResults}
          handleSearch={handleSearch}
          handleAddVideo={handleAddVideo}
        />
      </div>
    </div>
  );
}