import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import VideoCard from "../comp/VideoCard";

export default {
  title: "Cards",
  decorators: [withKnobs]
};

export const VideoCardShow = () => {
  return (
    <div className="p-5 grid grid-cols-2">
      <VideoCard
        id={123}
        title="Video Title"
        channelName="Channel Name"
        views="20K views"
        timeFromUpload="2 months ago"
        videoSource="youtube"
        thumbnail="https://i.imgur.com/aqjzchq.jpg"
      />
    </div>
  );
};
