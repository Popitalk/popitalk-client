import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import VideoCard from "../comp/VideoCard";
import SuggestionCard from "../comp/SuggestionCard";
import VideoPanelCard from "../comp/VideoPanelCard";

import QueueSection from "../comp/QueueSection";
import VideoChannelHeader from "../comp/VideoChannelHeader";
import VideoSection from "../comp/VideoSection";
import ChannelDescription from "../comp/ChannelDescription";
import NewChannelPost from "../comp/NewChannelPost";
import ChannelPost from "../comp/ChannelPost";

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
        title="Video Title"
        channelName="Channel Name"
        views="20K views"
        timeFromUpload="2 months ago"
        videoSource="youtube"
        thumbnail="https://i.imgur.com/aqjzchq.jpg"
        status="ended"
        statusMessage="Ended 1hr ago"
      />

      <VideoPanelCard />
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

export const VideoChannelHeaderShow = () => {
  return (
    <VideoChannelHeader
      id={123}
      name="Channel #1"
      icon="https://i.imgur.com/xCGu56D.jpg"
      videoStatus="paused"
    />
  );
};

export const VideoSectionShow = () => {
  const activeFriendViewers = [
    {
      id: 1,
      name: "Friend 1",
      avatar: "https://source.unsplash.com/128x128/?1,cat"
    },
    {
      id: 2,
      name: "Friend 2",
      avatar: "https://source.unsplash.com/128x128/?2,cat"
    },
    {
      id: 3,
      name: "Friend 3",
      avatar: "https://source.unsplash.com/128x128/?3,cat"
    },
    {
      id: 4,
      name: "Friend 4",
      avatar: "https://source.unsplash.com/128x128/?4,cat"
    }
  ];
  return (
    <VideoSection
      id={123}
      name="Video Title #1"
      sourceChannelName="sourceChannel"
      activeFriendViewers={activeFriendViewers}
    />
  );
};

export const ChannelDescriptionShow = () => {
  const adminList = [
    {
      id: 1,
      name: "Friend 1",
      avatar: "https://source.unsplash.com/128x128/?1,cat"
    },
    {
      id: 2,
      name: "Friend 2",
      avatar: "https://source.unsplash.com/128x128/?2,cat"
    },
    {
      id: 3,
      name: "Friend 3",
      avatar: "https://source.unsplash.com/128x128/?3,cat"
    },
    {
      id: 4,
      name: "Friend 4",
      avatar: "https://source.unsplash.com/128x128/?4,cat"
    },
    {
      id: 5,
      name: "Friend 5",
      avatar: "https://source.unsplash.com/128x128/?5,cat"
    }
  ];
  const description =
    "Channel Description Channel Description Channel Description Channel Description Channel Description Channel Description Channel Description ";
  return (
    <div>
      <ChannelDescription
        id={123}
        icon="https://i.imgur.com/xCGu56D.jpg"
        name="Channel Name"
        adminList={adminList}
        description={description}
      />
    </div>
  );
};

export const NewChannelPostShow = () => {
  return (
    <div>
      <NewChannelPost
        handleEmot={() => console.log("handle emot")}
        handleUploadImg={() => console.log("handle img upload")}
        handleSubmit={() => console.log("handle submit")}
      />
    </div>
  );
};

export const ChannelPostShow = () => {
  return (
    <div>
      <ChannelPost
        adminName="admin name"
        adminAvatar="https://source.unsplash.com/128x128/?5,cat"
        timeFromPost="20min ago"
        post="Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post "
        comments={[]}
      />
    </div>
  );
};
