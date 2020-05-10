import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import VideoCard from "../comp/VideoCard";
import SuggestionCard from "../comp/SuggestionCard";
import VideoPanelCard from "../comp/VideoPanelCard";
import QueueSection from "../comp/QueueSection";

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
        status="queued"
        statusMessage="In 14min"
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

export const QueueSectionShow = () => {
  const defaultThumbnail = "https://i.imgur.com/aqjzchq.jpg";
  const queueList = [
    {
      id: 1,
      title: "Video 1",
      views: "20k views",
      timeFromUpload: "2 months ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 10min"
    },
    {
      id: 2,
      title: "Video 2",
      views: "1M views",
      timeFromUpload: "1 week ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 14min"
    },
    {
      id: 3,
      title: "Video 3",
      views: "200k views",
      timeFromUpload: "1 months ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 18min"
    },
    {
      id: 4,
      title: "Video 4",
      views: "1.2M views",
      timeFromUpload: "3 months ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 25min"
    },
    {
      id: 5,
      title: "Video 5",
      views: "1.2M views",
      timeFromUpload: "3 months ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 50min"
    }
  ];
  return (
    // <div className="p-5 grid grid-cols-2">
    <>
      <QueueSection queueList={queueList} />
      <QueueSection queueList={queueList.slice(0, 4)} />

      <QueueSection queueList={queueList.slice(0, 3)} />
      <QueueSection queueList={queueList.slice(1, 2)} />
    </>
    // </div>
  );
};
