import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import sortBy from "lodash/sortBy";

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
import VideoSearch from "../../comp/VideoSearch";

export default function Channel({ tab, type = "channel" }) {
  const { channelId, roomId } = useParams();
  const channel = useSelector(state => state.channels[channelId || roomId]);
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const draft = useSelector(state => state.postDrafts[channelId]);
  const posts = useSelector(state => state.posts[channelId]);
  const { id: ownId, username: ownUsername, avatar: ownAvatar } = useSelector(
    state => state.self
  );
  const users = useSelector(state => state.users);

  const comments = useSelector(state => state.comments);

  const channels = useSelector(state => state.channels);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const channelRef = useRef(null);
  const scrollRef = useRef(null);

  // console.log("channels", channels);
  // console.log("channelid", channelId);
  // console.log("channel", channel);
  // console.log("posts", posts);
  // console.log("comments", comments);
  // console.log("tab", tab);
  const copyTestQueue = [...testQueue];
  const activeVideo = copyTestQueue[0];
  activeVideo.status = "playing";

  const trendingResults = testResult;
  const searchResults = testResult.slice(0, 3);
  const generatedUsers = generateTestUsers();

  const pickRoomName = (room, users, ownId) => {
    let roomName = "";
    if (room.name) {
      roomName = room.name;
    } else if (room.type === "friend") {
      roomName =
        users[room.members.filter(userId => userId !== ownId)[0]].username;
    } else if (room.type === "self") {
      roomName = ownUsername;
    } else if (room.type === "group") {
      roomName = sortBy(room.members, userId =>
        users[userId].username.toLowerCase()
      )
        .map(userId => users[userId].username)
        .join(", ");
    }

    if (roomName.length > 25) {
      roomName = `${roomName.slice(0, 25)}...`;
    }
    return roomName;
  };

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

  const loading = useSelector(state => !state.channels[channelId]?.loaded);

  useEffect(() => {
    if (loading) return;
    if (tab === "video") {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      console.log("in useEffect for video");
    } else if (tab === "channel") {
      scrollRef.current.scrollTo({
        top: channelRef.current.offsetTop + 6,
        behavior: "smooth"
      });
      console.log("channelRef offsetTop", channelRef.current.offsetTop);
      console.log("scrollRef", scrollRef);
      console.log("channelRef", channelRef);
      console.log("in useEffect for channel");
    } else if (tab === "settings" || tab === "queue") {
      scrollRef.current.scrollTo({ top: 0 });
      console.log("in useEffect for settings");
    }
  }, [tab, loading]);

  return (
    <div
      ref={scrollRef}
      className="flex flex-col w-full bg-secondaryBackground overflow-y-scroll"
    >
      <ChannelHeader
        id={channelId || roomId}
        name={pickRoomName(channel, users, ownId)}
        icon={channel.icon || defaultIcon}
        videoStatus={
          activeVideo && activeVideo.status ? activeVideo.status : ""
        }
        type={type}
      />
      {(tab === "video" || tab === "channel") && (
        <>
          <VideoPanel playlist={copyTestQueue} classNames="pt-0" />
          {type === "channel" && (
            <ForumPanel
              ref={channelRef}
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
          )}
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
    </div>
  );
}
