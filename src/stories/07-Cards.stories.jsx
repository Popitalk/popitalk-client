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
import VideoSearch from "../comp/VideoSearch";

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
  const defaultThumbnail = "https://i.imgur.com/aqjzchq.jpg";
  const [queueList, setQueueList] = useState([
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
  ]);
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
    <>
      <VideoSection
        id={123}
        title="Video Title #1"
        sourceChannelName="sourceChannel"
        activeFriendViewers={activeFriendViewers}
        status="playing"
      />
      <VideoSection
        id={123}
        title="Video Title #1"
        sourceChannelName="sourceChannel"
        activeFriendViewers={activeFriendViewers}
        status="paused"
      />
    </>
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
        status="playing"
      />
      <ChannelDescription
        id={123}
        icon="https://i.imgur.com/xCGu56D.jpg"
        name="Channel Name"
        adminList={adminList}
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
  const posts = [
    {
      id: 1,
      name: "Person 1",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      liked: false,
      comments: [1, 3, 4],
      timeFromPost: "20days ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 2,
      name: "Person 2",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      liked: true,
      comments: [],
      timeFromPost: "10days ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 3,
      name: "Person 3",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      liked: false,
      comments: [2],
      timeFromPost: "5 days ago",
      text: "Post Post Post Post Post"
    }
  ];
  const comments = [
    {
      id: 1,
      name: "Commenter 1",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      likes: 0,
      liked: false,
      timeFromPost: "40min ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 2,
      name: "Commenter 2",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      likes: 2,
      liked: true,
      timeFromPost: "30min ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 3,
      name: "Commenter 3",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      likes: 10,
      liked: false,
      timeFromPost: "10min ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 4,
      name: "Commenter 4",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      likes: 10,
      liked: false,
      timeFromPost: "10min ago",
      text: "Post Post Post Post Post"
    }
  ];
  return (
    <div className=" bg-secondaryBackground p-2">
      <h1 className="text-2xl font-bold mt-2">One post</h1>
      <ChannelChat posts={posts.slice(0, 1)} comments={comments} />
      <h1 className="text-2xl font-bold mt-2">More than one post</h1>
      <ChannelChat posts={posts} comments={comments} />
      <h1 className="text-2xl font-bold mt-2">Empty</h1>
      <ChannelChat posts={[]} comments={comments} />
    </div>
  );
};

export const ChannelVideoShow = () => {
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

  const defaultThumbnail = "https://i.imgur.com/aqjzchq.jpg";

  const playlist = [
    {
      id: 1,
      title: "Video 1",
      views: "20k views",
      timeFromUpload: "2 months ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 10min",
      sourceChannelName: "sourceChannel"
    },
    {
      id: 2,
      title: "Video 2",
      views: "1M views",
      timeFromUpload: "1 week ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 14min",
      sourceChannelName: "sourceChannel"
    },
    {
      id: 3,
      title: "Video 3",
      views: "200k views",
      timeFromUpload: "1 months ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 18min",
      sourceChannelName: "sourceChannel"
    },
    {
      id: 4,
      title: "Video 4",
      views: "1.2M views",
      timeFromUpload: "3 months ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 25min",
      sourceChannelName: "sourceChannel"
    },
    {
      id: 5,
      title: "Video 5",
      views: "1.2M views",
      timeFromUpload: "3 months ago",
      thumbnail: defaultThumbnail,
      status: "queued",
      statusMessage: "In 50min",
      sourceChannelName: "sourceChannel"
    },
    {}
  ];
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
  const posts = [
    {
      id: 1,
      name: "Person 1",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      liked: false,
      comments: [1, 3, 4],
      timeFromPost: "20days ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 2,
      name: "Person 2",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      liked: true,
      comments: [],
      timeFromPost: "10days ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 3,
      name: "Person 3",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      liked: false,
      comments: [2],
      timeFromPost: "5 days ago",
      text: "Post Post Post Post Post"
    }
  ];
  const comments = [
    {
      id: 1,
      name: "Commenter 1",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      likes: 0,
      liked: false,
      timeFromPost: "40min ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 2,
      name: "Commenter 2",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      likes: 2,
      liked: true,
      timeFromPost: "30min ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 3,
      name: "Commenter 3",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      likes: 10,
      liked: false,
      timeFromPost: "10min ago",
      text: "Post Post Post Post Post"
    },
    {
      id: 4,
      name: "Commenter 4",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      likes: 10,
      liked: false,
      timeFromPost: "10min ago",
      text: "Post Post Post Post Post"
    }
  ];

  const activeVideo = playlist.shift();
  activeVideo.status = "playing";
  activeVideo.activeFriendViewers = activeFriendViewers;
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
      activeFriendViewers={activeFriendViewers}
      activeVideo={activeVideo}
      playlist={playlist}
      adminList={adminList}
      description={description}
      comments={comments}
      posts={posts}
    />
  );
};

export const VideoSearchShow = () => {
  return (
    <div>
      <VideoSearch />
    </div>
  );
};
