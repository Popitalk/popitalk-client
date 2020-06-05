import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
  useParams
} from "react-router-dom";
import { getChannel, setPostDraft, addPost } from "../../redux/actions";

import {
  testComments,
  testPosts,
  testQueue,
  testUserMinimal,
  testVideos,
  testResult,
  testUsers
} from "../../stories/seed-arrays";
import ChannelHeader from "../../comp/ChannelHeader";
import VideoPanel from "./VideoPanel";
import ForumPanel from "./ForumPanel";

export default function Channel() {
  const { channelId } = useParams();
  const channel = useSelector(state => state.channels[channelId]);
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const draft = useSelector(state => state.postDrafts[channelId]);
  const posts = useSelector(state => state.posts[channelId]);
  const comments = useSelector(state => state.comments);

  console.log("posts", posts);
  console.log("comments", comments);
  // console.log("draft", draft);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  console.log("channelid", channelId);
  console.log("channel", channel);

  const copyTestQueue = [...testQueue];
  const activeVideo = copyTestQueue[0];
  activeVideo.status = "playing";

  const trendingResults = testResult;
  const searchResults = testResult.slice(0, 3);

  const saveDraft = text => {
    dispatch(setPostDraft({ channelId, draft: text }));
  };
  const savePost = text => {
    if (text && text.length > 0) {
      dispatch(
        addPost({
          channelId,
          content: text
        })
      );
    }
  };

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
    <div className="flex flex-col w-full bg-secondaryBackground p-3 pr-5">
      <ChannelHeader
        id={channelId}
        name={channel.name}
        icon={channel.icon || defaultIcon}
        videoStatus={
          activeVideo && activeVideo.status ? activeVideo.status : ""
        }
      />

      <Switch>
        <Route exact path={[`${match.path}/video`, `${match.path}/channel`]}>
          <VideoPanel
            playlist={copyTestQueue}
            activeFriendViewers={testUserMinimal}
            classNames="pt-1"
          />
          <ForumPanel
            name={channel.name}
            description={channel.description}
            icon={channel.icon || defaultIcon}
            adminList={[...testUserMinimal, ...testUserMinimal]}
            status="playing"
            comments={testComments}
            posts={testPosts}
            saveDraft={saveDraft}
            savePost={savePost}
            draft={draft}
          />
        </Route>
      </Switch>
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
