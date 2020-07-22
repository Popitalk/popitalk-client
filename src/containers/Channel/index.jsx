import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import sortBy from "lodash/sortBy";
import { useParams } from "react-router-dom";
import {
  getChannel,
  setPostDraft,
  addPost,
  addComment,
  unlikePost,
  likePost,
  unlikeComment,
  likeComment,
  updateChannel,
  makeAdmin,
  deleteAdmin,
  addBan,
  deleteBan,
  deletePost,
  followChannel,
  unfollowChannel,
  openListModal,
  searchVideos
} from "../../redux/actions";
import { testQueue, testResult } from "../../stories/seed-arrays";
import ChannelHeader from "../../comp/ChannelHeader";
import VideoPanel from "./VideoPanel";
import ForumPanel from "./ForumPanel";
import ChannelSettingsPanel from "../../comp/Channel/ChannelSettingsPanel";
import ChannelQueue from "../../comp/Channel/ChannelQueue";
import VideoSearch from "../../comp/VideoSearch";
import { mapIdsToUsers } from "../../helpers/functions";

export default function Channel({ tab, type = "channel" }) {
  let { channelId, roomId } = useParams();
  channelId = channelId || roomId;
  const channel = useSelector(state => state.channels[channelId]);
  const dispatch = useDispatch();
  if (!channel) {
    dispatch(getChannel(channelId));
  }
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const updateChannelApi = useSelector(state => state.api.channel);
  const draft = useSelector(state => state.postDrafts[channelId]);
  const posts = useSelector(state => state.posts[channelId]);
  const { id: ownId, username: ownUsername } = useSelector(state => state.self);
  const users = useSelector(state => state.users);

  let adminList = useSelector(state => state.channels[channelId]?.admins);
  if (adminList) adminList = mapIdsToUsers(adminList, users, defaultAvatar);

  const comments = useSelector(state => state.comments);

  const channelRef = useRef(null);
  const scrollRef = useRef(null);

  // console.log("tab", tab);
  const copyTestQueue = [...testQueue];
  const activeVideo = copyTestQueue[0];
  activeVideo.status = "playing";

  const trendingResults = testResult;
  const searchResults = channel.videoSearch.results;
  const totalResults = channel.videoSearch.totalResults;

  const isMember =
    channel && channel.members
      ? !!channel.members.filter(memberId => memberId === ownId).length
      : null;

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

  const handleChannelFormSubmit = (values, channelId) => {
    dispatch(updateChannel({ channelId, ...values }));
  };

  const addAdminHandler = userId => {
    dispatch(makeAdmin({ channelId, userId }));
  };

  const removeAdminHandler = userId => {
    dispatch(deleteAdmin({ channelId, userId }));
  };

  const addBanHandler = bannedId => {
    dispatch(addBan({ channelId, bannedId }));
  };

  const removeBanHandler = bannedId => {
    dispatch(deleteBan({ channelId, bannedId }));
  };

  const removePost = postId => {
    dispatch(deletePost({ postId }));
  };

  const handleFollow = channelId => {
    dispatch(followChannel(channelId));
  };

  const handleUnfollow = channelId => {
    dispatch(unfollowChannel(channelId));
  };

  const openAdminsList = channelId => {
    dispatch(openListModal(channelId, "admins"));
  };

  const handleSearch = terms => {
    dispatch(searchVideos({ channelId, source: "youtube", terms }));
  };

  const loading = channel?.loaded ? false : true;

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
  }, [channelId, loading]);

  useEffect(() => {
    if (loading) return;
    if (tab === "video") {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (tab === "channel") {
      scrollRef.current.scrollTo({
        top: channelRef.current.offsetTop + 6,
        behavior: "smooth"
      });
    } else if (tab === "settings" || tab === "queue") {
      scrollRef.current.scrollTo({ top: 0 });
    }
  }, [tab, loading]);

  if (loading) return <></>;
  return (
    <div
      ref={scrollRef}
      className="flex flex-col w-full bg-secondaryBackground overflow-auto"
    >
      <div className="sticky top-0 w-full z-20">
        <ChannelHeader
          id={channelId || roomId}
          name={pickRoomName(channel, users, ownId)}
          icon={channel.icon || defaultIcon}
          videoStatus={
            activeVideo && activeVideo.status ? activeVideo.status : ""
          }
          type={type}
        />
      </div>
      {(tab === "video" || tab === "channel") && (
        <>
          <VideoPanel playlist={copyTestQueue} classNames="pt-0" />
          {type === "channel" && (
            <ForumPanel
              ref={channelRef}
              name={channel.name}
              description={channel.description}
              icon={channel.icon || defaultIcon}
              adminList={adminList}
              status="playing"
              comments={comments}
              posts={posts}
              saveDraft={saveDraft}
              savePost={savePost}
              removePost={removePost}
              saveComment={saveComment}
              draft={draft}
              defaultAvatar={defaultAvatar}
              toggleLike={toggleLike}
              ownId={ownId}
              handleFollow={() => handleFollow(channelId)}
              isMember={isMember}
              handleUnfollow={() => handleUnfollow(channelId)}
              handleListAdmins={() => openAdminsList(channelId)}
            />
          )}
          {type === "room" && (
            <div>
              <h2 className="text-lg mt-20 px-4 text-bold">Find More Videos</h2>
              <VideoSearch
                trendingResults={trendingResults}
                searchResults={searchResults}
                totalResults={totalResults}
                threshold={24}
                handleSearch={handleSearch}
              />
            </div>
          )}
        </>
      )}

      {tab === "queue" && (
        <ChannelQueue
          name={channel.name}
          icon={channel.icon || defaultIcon}
          trendingResults={trendingResults}
          searchResults={searchResults}
          totalResults={totalResults}
          handleSearch={handleSearch}
          activeVideo={testQueue[0]}
          queue={testQueue}
        />
      )}
      {tab === "settings" && !loading && (
        <ChannelSettingsPanel
          ownerId={channel.ownerId || channel.owner_id}
          followers={mapIdsToUsers(channel.members, users, defaultAvatar)}
          admins={mapIdsToUsers(channel.admins, users, defaultAvatar)}
          bannedUsers={mapIdsToUsers(channel.banned, users, defaultAvatar)}
          initialChannelForm={{
            ...channel,
            private: !channel.public,
            category: ""
          }}
          handleChannelFormSubmit={values =>
            handleChannelFormSubmit(values, channelId)
          }
          channelFormLoading={updateChannelApi.loading}
          channelFormError={
            updateChannelApi.status === "error" ? updateChannelApi.error : false
          }
          addAdminHandler={addAdminHandler}
          removeAdminHandler={removeAdminHandler}
          addBanHandler={addBanHandler}
          removeBanHandler={removeBanHandler}
        />
      )}
    </div>
  );
}
