import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import sortBy from "lodash/sortBy";
import { useParams, Redirect } from "react-router-dom";
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
  searchVideos,
  addVideo,
  setAlert
} from "../../redux/actions";
import { testResult } from "../../stories/seed-arrays";
import ChannelHeader from "../../comp/ChannelHeader";
import VideoPanel from "./VideoPanel";
import ForumPanel from "./ForumPanel";
import ChannelSettingsPanel from "../../comp/Channel/ChannelSettingsPanel";
import ChannelQueue from "../../comp/Channel/ChannelQueue";
import VideoSearch from "../../comp/VideoSearch";
import { mapIdsToUsers } from "../../helpers/functions";
import Helmet from "react-helmet";

export default function Channel({ tab, searchClasses, type = "channel" }) {
  let { channelId, roomId } = useParams();
  channelId = channelId || roomId;
  const channel = useSelector(state => state.channels[channelId]);
  const dispatch = useDispatch();

  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const channelApi = useSelector(state => state.api.channel);
  const draft = useSelector(state => state.postDrafts[channelId]);
  const posts = useSelector(state => state.posts[channelId]);
  const { id: ownId, username: ownUsername } = useSelector(state => state.self);
  const users = useSelector(state => state.users);

  let adminList = useSelector(state => state.channels[channelId]?.admins);
  if (adminList) adminList = mapIdsToUsers(adminList, users, defaultAvatar);

  const comments = useSelector(state => state.comments);

  const channelRef = useRef(null);
  const scrollRef = useRef(null);

  const trendingResults = testResult;
  const searchResults = channel ? channel.videoSearch.results : [];
  const totalResults = channel ? channel.videoSearch.totalResults : [];
  const admins =
    channel && channel.admins
      ? mapIdsToUsers(channel.admins, users, defaultAvatar)
      : [];
  const editor =
    channel && (channel.ownerId === ownId || admins.find(a => a.id === ownId));

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

  const handleAddVideo = videoInfo => {
    dispatch(addVideo({ channelId, ...videoInfo }));
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

  if (
    channelApi.status !== "loading" &&
    channelApi.status !== "initial" &&
    !channel
  ) {
    dispatch(setAlert("The channel / room you entered does not exist."));
    return <Redirect to="/channels" />;
  }

  if (loading) return <></>;
  return (
    <div className="flex flex-col bg-secondaryBackground w-full overflow-x-hidden">
      {/* Google Search Index & SEO */}
      <Helmet>
        <meta charSet="UFT-8" />
        <title>{pickRoomName(channel, users, ownId)} - Popitalk</title>
        <meta
          name="description"
          content={type === "channel" && channel.description}
        />
        {type === "room" && <meta name="robots" content="noindex" />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {/* Channel & Room structure */}
      <div className="w-full h-12 bg-primaryBackground">
        <ChannelHeader
          id={channelId}
          isAdmin={editor}
          name={pickRoomName(channel, users, ownId)}
          icon={channel.icon || defaultIcon}
          videoStatus={true}
          type={type}
        />
      </div>
      <div
        ref={scrollRef}
        className={`flex flex-col overflow-x-hidden h-auto ${searchClasses}`}
      >
        {(tab === "video" || tab === "channel") && (
          <>
            <VideoPanel channelId={channelId} classNames="pt-0" />
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
              <div className="my-4">
                <h2 className="text-lg text-primaryText px-4">
                  Find More Videos
                </h2>
                <VideoSearch
                  trendingResults={trendingResults}
                  searchResults={searchResults}
                  totalResults={totalResults}
                  threshold={24}
                  handleSearch={handleSearch}
                  handleAddVideo={handleAddVideo}
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
            handleAddVideo={handleAddVideo}
            queue={channel.queue}
          />
        )}
        {tab === "settings" && !loading && (
          <ChannelSettingsPanel
            ownerId={channel.ownerId}
            followers={mapIdsToUsers(channel.members, users, defaultAvatar)}
            admins={admins}
            bannedUsers={mapIdsToUsers(channel.banned, users, defaultAvatar)}
            initialChannelForm={{
              ...channel,
              private: !channel.public,
              category: ""
            }}
            handleChannelFormSubmit={values =>
              handleChannelFormSubmit(values, channelId)
            }
            channelFormLoading={channelApi.loading}
            channelFormError={
              channelApi.status === "error" ? channelApi.error : false
            }
            addAdminHandler={addAdminHandler}
            removeAdminHandler={removeAdminHandler}
            addBanHandler={addBanHandler}
            removeBanHandler={removeBanHandler}
          />
        )}
      </div>
    </div>
  );
}
