import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import VideoCard from "../comp/VideoCard";
import SuggestionCard from "../comp/SuggestionCard";
import VideoPanelCard from "../comp/VideoPanelCard";

import QueueSection from "../comp/QueueSection";
import VideoChannelHeader from "../comp/VideoChannelHeader";
import VideoSection from "../comp/VideoSection";
import ChannelDescription from "../comp/ChannelDescription";
import NewChannelPost from "../comp/NewChannelPost";
import ChannelPost from "../comp/ChannelPost";
import ChannelComment from "../comp/ChannelComment";

import arrayMove from "array-move";
import NewChannelComment from "../comp/NewChannelComment";
import ChannelChat from "../comp/ChannelChat";
import ChannelVideo from "../comp/ChannelVideo";
import VideoSearchBar from "../comp/VideoSearchBar";
import VideoSearch from "../comp/VideoSearch";
import VideoResults from "../comp/VideoResults";

import {
  testComments,
  testPosts,
  testQueue,
  testUserMinimal,
  testVideos,
  testResult
} from "./seed-arrays";

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
        type="add"
      />
      <VideoPanelCard />
    </div>
  );
};

export const QueueSectionShow = () => {
  const [queueList, setQueueList] = useState(testVideos);
  const handlerChange = ({ oldIndex, newIndex }) => {
    setQueueList(arrayMove(queueList, oldIndex, newIndex));
  };

  return (
    // <div className="p-5 grid grid-cols-2">
    <>
      <QueueSection queueList={queueList} handlerChange={handlerChange} />
      <QueueSection
        queueList={queueList.slice(0, 4)}
        handlerChange={handlerChange}
      />

      <QueueSection
        queueList={queueList.slice(0, 3)}
        handlerChange={handlerChange}
      />
      <QueueSection
        queueList={queueList.slice(1, 2)}
        handlerChange={handlerChange}
      />
    </>
    // </div>
  );
};

export const VideoChannelHeaderShow = () => {
  return (
    <>
      <VideoChannelHeader
        id={123}
        name="Channel #1"
        icon="https://i.imgur.com/xCGu56D.jpg"
        videoStatus="paused"
      />
      <VideoChannelHeader
        id={123}
        name="Channel #1"
        icon="https://i.imgur.com/xCGu56D.jpg"
        videoStatus="playing"
      />
    </>
  );
};

export const VideoSectionShow = () => {
  return (
    <>
      <VideoSection
        id={123}
        title="Video Title #1"
        sourceChannelName="sourceChannel"
        activeFriendViewers={testUserMinimal}
        status="playing"
      />
      <VideoSection
        id={123}
        title="Video Title #1"
        sourceChannelName="sourceChannel"
        activeFriendViewers={testUserMinimal}
        status="paused"
      />
    </>
  );
};

export const ChannelDescriptionShow = () => {
  const description =
    "Channel Description Channel Description Channel Description Channel Description Channel Description Channel Description Channel Description ";
  return (
    <div>
      <ChannelDescription
        id={123}
        icon="https://i.imgur.com/xCGu56D.jpg"
        name="Channel Name"
        adminList={testUserMinimal}
        description={description}
        status="playing"
      />
      <ChannelDescription
        id={123}
        icon="https://i.imgur.com/xCGu56D.jpg"
        name="Channel Name"
        adminList={testUserMinimal}
        description={description}
        status="paused"
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
        name="admin name"
        avatar="https://source.unsplash.com/128x128/?5,cat"
        timeFromPost="20min ago"
        text="Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post Channel Post "
        comments={[]}
      />
    </div>
  );
};

export const ChannelCommentShow = () => {
  return (
    <div>
      <ChannelComment
        name="commenterName"
        avatar="https://source.unsplash.com/128x128/?6,cat"
        timeFromPost="20min ago"
        text="Channel Comment Channel Comment Channel Comment Channel Comment Channel Comment ABC Channel Comment Channel Comment Channel Comment Channel Comment Channel Comment Channel Comment "
        likes={0}
      />
      <ChannelComment
        name="commenterName"
        avatar="https://source.unsplash.com/128x128/?6,cat"
        timeFromPost="20min ago"
        text="Channel Comment Channel Comment Channel Comment Channel Comment Channel Comment ABC Channel Comment Channel Comment Channel Comment Channel Comment Channel Comment Channel Comment "
        likes={2}
      />
    </div>
  );
};

export const NewChannelCommentShow = () => {
  return (
    <div>
      <NewChannelComment
        handleEmot={() => console.log("handle emot")}
        handleUploadImg={() => console.log("handle img upload")}
        handleSubmit={() => console.log("handle submit")}
      />
    </div>
  );
};

export const ChannelChatShow = () => {
  return (
    <div className=" bg-secondaryBackground p-2">
      <h1 className="text-2xl font-bold mt-2">One post</h1>
      <ChannelChat posts={testPosts.slice(0, 1)} comments={testComments} />
      <h1 className="text-2xl font-bold mt-2">More than one post</h1>
      <ChannelChat posts={testPosts} comments={testComments} />
      <h1 className="text-2xl font-bold mt-2">Empty</h1>
      <ChannelChat posts={[]} comments={testComments} />
    </div>
  );
};

export const ChannelVideoShow = () => {
  const description =
    "Channel Description Channel Description Channel Description Channel Description Channel Description Channel Description Channel Description ";

  const activeVideo = testQueue.shift();
  activeVideo.status = "playing";
  activeVideo.activeFriendViewers = testUserMinimal;
  // return (
  //   <VideoSection
  //     {...activeVideo}
  //   />
  // );
  return (
    <ChannelVideo
      id={123}
      name="Channel #1"
      icon="https://i.imgur.com/xCGu56D.jpg"
      activeFriendViewers={testUserMinimal}
      activeVideo={activeVideo}
      playlist={testQueue}
      adminList={testUserMinimal}
      description={description}
      comments={testComments}
      posts={testPosts}
    />
  );
};

export const VideoSearchBarShow = () => {
  return (
    <div>
      <VideoSearchBar />
    </div>
  );
};

export const VideoResultShow = () => {
  const results = testResult;
  return (
    <div>
      <h1 className="text-2xl font-bold mt-2">Within threshold</h1>
      <VideoResults results={results.slice(0, 3)} threshold={3} />

      <h1 className="text-2xl font-bold mt-2">Pass threshold</h1>
      <VideoResults results={results} threshold={3} />

      <h1 className="text-2xl font-bold mt-2">Empty Result</h1>
      <VideoResults results={[]} />
    </div>
  );
};

export const VideoSearchShow = () => {
  const results = testResult;
  return (
    <div>
      {/* <h1 className="text-2xl font-bold mt-2">Within threshold</h1> */}
      <VideoSearch results={results} threshold={3}/>

    </div>
  );
};
