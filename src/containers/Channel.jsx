import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannel } from "../redux/actions";
import ChannelVideo from "../comp/Channel/ChannelVideo";
import {
  testComments,
  testPosts,
  testQueue,
  testUserMinimal,
  testVideos,
  testResult
} from "../stories/seed-arrays";
import ChannelHeader from "../comp/ChannelHeader";

export default function Channel() {
  const { channelId } = useParams();
  const channel = useSelector(state => state.channels[channelId]);
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const dispatch = useDispatch();
  console.log("channelid", channelId);
  console.log("channel", channel);

  const copyTestQueue = [...testQueue];
  const activeVideo = copyTestQueue.shift();
  activeVideo.status = "playing";
  activeVideo.activeFriendViewers = testUserMinimal;

  const trendingResults = testResult;
  const searchResults = testResult.slice(0, 3);

  useEffect(() => {
    if (channel && !channel?.loaded) {
      dispatch(getChannel(channelId));
    } else if (channel && channel?.loaded) {
      console.log("ADD WATCHER");
    } else if (!channel) {
      dispatch(getChannel(channelId));
      console.log("NO CHANNEL");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  let privateAndNotMember = true;

  if (channel) {
    privateAndNotMember = !channel.public && !channel.isMember;
  }
  return (
    // <ChannelVideo
    //   id={channelId}
    // />
    <div className="flex flex-col w-full bg-secondaryBackground">
      <ChannelHeader
        id={channelId}
        name={channel.name}
        icon={defaultIcon}
        videoStatus={
          activeVideo && activeVideo.status ? activeVideo.status : ""
        }
      />
      {/* <VideoSection {...activeVideo} />
      <h2 className="text-2xl pt-4 px-3">Up Next</h2>
      <QueueSection queueList={queueList} handlerChange={handlerChange} />
      {type === "channel" && (
        <div className="mx-32 mt-40">
          <ChannelDescription
            id={id}
            icon={icon}
            name={name}
            adminList={adminList}
            description={description}
            status={activeVideo && activeVideo.status ? activeVideo.status : ""}
          />
          <NewChannelPost
            handleEmot={() => console.log("handle emot")}
            handleUploadImg={() => console.log("handle img upload")}
            handleSubmit={() => console.log("handle submit")}
            className="px-8 my-8"
          />
          <ChannelChat comments={comments} posts={posts} />
        </div>
      )}
      {type === "room" && (
        <div>
          <h2 className="text-2xl mt-20 px-3">Find More Videos</h2>
          <VideoSearch
            trendingResults={trendingResults}
            searchResults={searchResults}
            threshold={3}
          />
        </div>
      )} */}
    </div>
  );
}
