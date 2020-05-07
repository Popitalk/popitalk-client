import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import VideoCard from "../comp/VideoCard";
import SuggestionCard from "../comp/SuggestionCard";

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

export const SuggestionCardShow = () => {
  return (
    <SuggestionCard
      id={123}
      name="Thelmo Society"
      icon="https://i.imgur.com/xCGu56D.jpg"
      avatars={[
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]}
      live={false}
      videoTitle="Video Title"
      videoSource="youtube"
      videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
      handleFollow={() => console.log("FOLLOW")}
      activeViewers={2000}
    />
  );
};
