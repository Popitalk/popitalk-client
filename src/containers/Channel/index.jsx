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
import {
  getChannel,
  setPostDraft,
  addPost,
  addComment,
  unlikePost,
  likePost,
  unlikeComment,
  likeComment
} from "../../redux/actions";

import {
  testComments,
  testPosts,
  testQueue,
  testUserMinimal,
  testVideos,
  testResult,
  testUsers,
  testMessages,
  generateTestUsers
} from "../../stories/seed-arrays";
import ChannelHeader from "../../comp/ChannelHeader";
import VideoPanel from "./VideoPanel";
import ForumPanel from "./ForumPanel";
import ChannelSettingsPanel from "../../comp/Channel/ChannelSettingsPanel";
import ChannelQueue from "../../comp/Channel/ChannelQueue";
import ChatPanel from "../../comp/Chat/ChatPanel";

export default function Channel({ tab, type = "channel" }) {
  const { channelId, roomId } = useParams();
  const channel = useSelector(state => state.channels[channelId || roomId]);
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const draft = useSelector(state => state.postDrafts[channelId]);
  const posts = useSelector(state => state.posts[channelId]);
  const comments = useSelector(state => state.comments);

  console.log("channel/room", channel);
  // posts.map((post) => {
  //   if (!post.author.avatar) {
  //     post.author.avatar = defaultAvatar;
  //   }
  // })
  // console.log("draft", draft);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  console.log("channelid", channelId);
  console.log("channel", channel);
  console.log("posts", posts);
  console.log("comments", comments);
  console.log("tab", tab);
  const copyTestQueue = [...testQueue];
  const activeVideo = copyTestQueue[0];
  activeVideo.status = "playing";

  const trendingResults = testResult;
  const searchResults = testResult.slice(0, 3);
  const generatedUsers = generateTestUsers();

  const chatPanel = (
    <div className="w-dropdown">
      <ChatPanel messages={testMessages} />
    </div>
  );

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

  const saveComment = (text, postId) => {
    if (text && text.length > 0) {
      dispatch(
        addComment({
          postId,
          content: text
        })
      );
    }
  };

  const toggleLike = (id, type, liked) => {
    if (type === "post") {
      if (liked) {
        dispatch(unlikePost({ postId: id }));
      } else {
        dispatch(likePost({ postId: id }));
      }
    }

    if (type === "comment") {
      if (liked) {
        dispatch(unlikeComment({ commentId: id }));
      } else {
        dispatch(likeComment({ commentId: id }));
      }
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

      {/* <Switch>
        <Route exact path={[`${match.path}/video`, `${match.path}/channel`]}> */}
      {tab === "video" && (
        <>
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
            comments={comments}
            posts={posts}
            saveDraft={saveDraft}
            savePost={savePost}
            saveComment={saveComment}
            draft={draft}
            defaultAvatar={defaultAvatar}
            toggleLike={toggleLike}
          />
        </>
      )}

      {tab === "queue" && (
        <ChannelQueue
          name={channel.name}
          icon={channel.icon || defaultIcon}
          trendingResults={testResult}
          searchResults={testResult}
          activeVideo={testQueue[0]}
          queue={testQueue}
        />
      )}
      {tab === "settings" && (
        <ChannelSettingsPanel
          followers={generatedUsers}
          admins={generatedUsers}
          bannedUsers={generatedUsers}
          initialChannelForm={{
            name: "",
            description: "",
            private: false,
            icon: null,
            category: ""
          }}
        />
      )}
      {/* </Route>
        <Route exact path="/channels/:channelId/queue">
          <div className="flex">
            <ChannelQueue
              id={123}
              name="Channel #1"
              icon="https://i.imgur.com/xCGu56D.jpg"
              trendingResults={testResult}
              searchResults={testResult}
              activeVideo={testQueue[0]}
              queue={testQueue}
            />
            {chatPanel}
          </div>
        </Route>
        <Route exact path="/channels/:channelId/settings">
          <ChannelSettingsPanel
            followers={testUsers}
            admins={testUsers}
            bannedUsers={testUsers}
            initialChannelForm={{
              name: "",
              description: "",
              private: false,
              icon: null,
              category: ""
            }}
          />
        </Route>
      </Switch> */}

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
