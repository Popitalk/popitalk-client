import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import VideoCard from "../comp/VideoCard";
import SuggestionCard from "../comp/SuggestionCard";
import VideoPanelCard from "../comp/VideoPanelCard";

export default {
  title: "Cards",
  decorators: [withKnobs]
};

export const VideoCardShow = () => {
  return (
    // <div className="p-5 grid grid-cols-2">
    <VideoCard
      id={123}
      title="Video Title"
      channelName="Channel Name"
      views="20K views"
      timeFromUpload="2 months ago"
      videoSource="youtube"
      thumbnail="https://i.imgur.com/aqjzchq.jpg"
    />
    // </div>
  );
};

export const SuggestionCardStates = () => {
  return (
    <div className="p-5 grid grid-cols-2">
      <SuggestionCard
        id={123}
        name="Thelmo Society"
        icon="https://i.imgur.com/xCGu56D.jpg"
        videoStatus="playing"
        videoTitle="Video Title"
        videoSource="youtube"
        videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
        activeViewers="2,000"
      />
      <SuggestionCard
        id={123}
        name="Thelmo Society"
        icon="https://i.imgur.com/xCGu56D.jpg"
        videoStatus="paused"
        videoTitle="Video Title"
        videoSource="youtube"
        videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
        activeViewers="2,000"
      />
    </div>
  );
};

export const VideoPanelCardShow = () => {
  return (
    <div className="p-5 grid grid-cols-2">
      <VideoPanelCard
        id={123}
        title="Video Title"
        channelName="Channel Name"
        views="20K views"
        timeFromUpload="2 months ago"
        videoSource="youtube"
        thumbnail="https://i.imgur.com/aqjzchq.jpg"
      />

      <VideoPanelCard
        id={123}
        channelName="Channel Name"
        views="20K views"
        timeFromUpload="2 months ago"
        videoSource="youtube"
        thumbnail="https://i.imgur.com/aqjzchq.jpg"
      />
    </div>
  );
};
