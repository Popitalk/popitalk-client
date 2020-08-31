import React, { createRef, Component } from "react";
import { connect } from "react-redux";
import sortBy from "lodash/sortBy";
import { Redirect, withRouter } from "react-router-dom";
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
  deleteVideo,
  swapVideos,
  setAlert,
  getTrending
} from "../../redux/actions";
import ChannelHeader from "../../components/ChannelHeader";
import VideoPanel from "./VideoPanel";
import ForumPanel from "./ForumPanel";
import ChannelSettingsPanel from "../../components/Channel/ChannelSettingsPanel";
import ChannelQueue from "../../components/Channel/ChannelQueue";
import VideoSearch from "../../components/VideoSearch";
import { mapIdsToUsers } from "../../helpers/functions";
import {
  calculatePlayerStatus,
  calculateNextPlayerStatus,
  defaultPlayerStatus
} from "../../helpers/videoSyncing";
import Helmet from "react-helmet";
import strings from "../../helpers/localization";

const CHANNEL_TYPE = "channel";
const ROOM_TYPE = "room";

const VIDEO_TAB = "video";
const POSTS_TAB = "channel";
const QUEUE_TAB = "queue";
const SETTINGS_TAB = "settings";

const mapStateToProps = (state, { match }) => {
  const { channelId, roomId, tab } = match.params;
  const finalId = channelId || roomId;

  const { defaultIcon, defaultAvatar } = state.general;
  const channel = state.channels[finalId];
  const channelApi = state.api.channel;
  const drafts = state.postDrafts[finalId];
  const posts = state.posts[finalId];
  const { id: ownId, username: ownUsername } = state.self;
  const users = state.users;
  const comments = state.comments;

  const validTabs = [VIDEO_TAB, POSTS_TAB, QUEUE_TAB, SETTINGS_TAB];

  const startPlayerStatus = channel
    ? {
        videoStartTime: channel.videoStartTime,
        queueStartPosition: channel.queueStartPosition,
        clockStartTime: channel.clockStartTime,
        status: channel.status
      }
    : defaultPlayerStatus();

  return {
    channelId: finalId,
    defaultIcon,
    defaultAvatar,
    channel: channel ? channel : {},
    startPlayerStatus: startPlayerStatus,
    playlist: channel ? channel.queue : [],
    trendingResults: state.general.trendingResults,
    channelApi,
    drafts,
    posts,
    ownId,
    ownUsername,
    users,
    comments,
    tab: tab && validTabs.includes(tab) ? tab : VIDEO_TAB,
    type: channelId ? CHANNEL_TYPE : ROOM_TYPE
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  const channelId = match.params.channelId || match.params.roomId;

  return {
    handleSaveDraft: text => dispatch(setPostDraft({ channelId, draft: text })),
    handleSavePost: text => {
      if (text && text.length > 0) {
        dispatch(addPost({ channelId, content: text }));
      }
    },
    handleSaveComment: (text, postId) => {
      if (text && text.length > 0) {
        dispatch(addComment({ postId, content: text }));
      }
    },
    handleToggleLike: (id, type, liked) => {
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
    },
    handleChannelFormSubmit: values =>
      dispatch(updateChannel({ channelId, ...values })),
    handleAddAdmin: userId => dispatch(makeAdmin({ channelId, userId })),
    handleRemoveAdmin: userId => dispatch(deleteAdmin({ channelId, userId })),
    handleAddBan: bannedId => dispatch(addBan({ channelId, bannedId })),
    handleRemoveBan: bannedId => dispatch(deleteBan({ channelId, bannedId })),
    handleRemovePost: postId => dispatch(deletePost({ postId })),
    handleFollow: () => dispatch(followChannel(channelId)),
    handleUnfollow: () => dispatch(unfollowChannel(channelId)),
    handleOpenAdminsList: () => dispatch(openListModal(channelId, "admins")),
    handleSearch: (terms, next = false) =>
      dispatch(searchVideos({ channelId, source: "youtube", terms, next })),
    handleGetTrending: next =>
      dispatch(getTrending({ next, source: "youtube" })),
    handleAddVideo: videoInfo =>
      dispatch(addVideo({ channelId, ...videoInfo })),
    handleDeleteVideo: channelVideoId =>
      dispatch(deleteVideo({ channelId, channelVideoId })),
    handleSwapVideos: ({ oldIndex, newIndex }) =>
      dispatch(swapVideos({ channelId, oldIndex, newIndex })),
    handleGetChannel: () => dispatch(getChannel(channelId)),
    handleChannelNotFound: () =>
      dispatch(setAlert("The channel / room you entered does not exist."))
  };
};

class Channel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queueList: this.props.playlist,
      playerStatus: this.props.startPlayerStatus,
      searchTerm: ""
    };

    this.scrollRef = createRef();
    this.channelRef = createRef();

    this.playNextVideo = this.playNextVideo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(term, next) {
    if (term !== null) {
      this.setState({
        searchTerm: term.trim()
      });
    } else {
      term = this.state.searchTerm;
    }

    if (term !== "") {
      this.props.handleSearch(term, next);
    } else {
      this.props.handleGetTrending(next);
    }
  }

  pickRoomName() {
    const room = this.props.channel;
    const users = this.props.users;
    const ownId = this.props.ownId;

    let roomName = "";
    if (room.name) {
      roomName = room.name;
    } else if (room.type === "friend") {
      roomName =
        users[room.members.filter(userId => userId !== ownId)[0]].username;
    } else if (room.type === "self") {
      roomName = this.props.ownUsername;
    } else if (room.type === "group") {
      roomName = sortBy(room.members, userId =>
        users[userId].username.toLowerCase()
      )
        .map(userId => users[userId].username)
        .join(", ");
    }
    return roomName;
  }

  mapVideoStatuses(playlist, currPosition, status) {
    return playlist.map((v, i) => {
      let videoStatus = "queued";
      if (i < currPosition) {
        videoStatus = "ended";
      } else if (i === currPosition) {
        videoStatus = status.toLowerCase();
      }

      return {
        ...v,
        status: videoStatus
      };
    });
  }

  playNextVideo() {
    const nextPosition = this.state.playerStatus.queueStartPosition + 1;
    if (this.props.playlist.length > nextPosition) {
      let newQueueList = [...this.state.queueList];
      newQueueList[
        nextPosition
      ].status = this.state.playerStatus.status.toLowerCase();
      newQueueList[nextPosition - 1].status = "ended";

      const nextPlayerStatus = calculateNextPlayerStatus(
        this.props.startPlayerStatus,
        this.props.playlist,
        nextPosition
      );

      this.setState({
        playerStatus: {
          ...this.state.playerStatus,
          ...nextPlayerStatus
        },
        queueList: newQueueList
      });
    } else {
      let newQueueList = [...this.state.queueList];
      newQueueList[nextPosition - 1].status = "ended";

      this.setState({
        playerStatus: {
          ...this.state.playerStatus,
          queueStartPosition: 0,
          videoStartTime: 0,
          status: "Ended"
        },
        queueList: newQueueList
      });
    }
  }

  setPlayerStatus() {
    const playerStatus = calculatePlayerStatus(
      this.props.startPlayerStatus,
      this.props.playlist
    );

    this.setState({
      playerStatus: {
        channelId: this.props.channelId,
        ...playerStatus
      },
      queueList: this.mapVideoStatuses(
        this.props.playlist,
        playerStatus.queueStartPosition,
        playerStatus.status
      )
    });

    if (this.props.trendingResults.results.length === 0) {
      this.props.handleGetTrending(false);
    }
  }

  componentDidMount() {
    if (!this.props.channel?.loaded) {
      this.props.handleGetChannel();
    } else if (!this.state.playerStatus.channelId) {
      this.setPlayerStatus();
    }
  }

  componentDidUpdate(prevProps) {
    const loadChannel =
      prevProps.channelId !== this.props.channelId ||
      ((prevProps.tab === QUEUE_TAB || prevProps.tab === SETTINGS_TAB) &&
        this.props.tab !== QUEUE_TAB &&
        this.props.tab !== SETTINGS_TAB);
    if (loadChannel) {
      this.setState({
        searchTerm: ""
      });
    }

    if (
      prevProps.channelId !== this.props.channelId &&
      !this.props.channel?.loaded
    ) {
      this.props.handleGetChannel();
    } else if (
      (!prevProps.channel && this.props.channel) ||
      (!prevProps.channel.loaded && this.props.channel.loaded) ||
      prevProps.startPlayerStatus.queueStartPosition !==
        this.props.startPlayerStatus.queueStartPosition ||
      prevProps.startPlayerStatus.videoStartTime !==
        this.props.startPlayerStatus.videoStartTime ||
      prevProps.startPlayerStatus.status !==
        this.props.startPlayerStatus.status ||
      prevProps.startPlayerStatus.clockStartTime !==
        this.props.startPlayerStatus.clockStartTime ||
      loadChannel
    ) {
      this.setPlayerStatus();
    } else if (prevProps.playlist !== this.props.playlist) {
      this.setState({
        queueList: this.mapVideoStatuses(
          this.props.playlist,
          this.state.playerStatus.queueStartPosition,
          this.state.playerStatus.status
        )
      });
    }

    if (prevProps.tab !== this.props.tab && this.scrollRef.current) {
      const tab = this.props.tab;

      if (tab === VIDEO_TAB) {
        this.scrollRef.current.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else if (tab === POSTS_TAB) {
        this.scrollRef.current.scrollTo({
          top: this.channelRef.current.offsetTop + 6,
          behavior: "smooth"
        });
      } else if (tab === SETTINGS_TAB || tab === QUEUE_TAB) {
        this.scrollRef.current.scrollTo({ top: 0 });
      }
    }
  }

  render() {
    const channelApi = this.props.channelApi;
    const channel = this.props.channel;
    const tab = this.props.tab;

    if (
      channelApi.status !== "loading" &&
      channelApi.status !== "initial" &&
      !channel
    ) {
      this.props.handleChannelNotFound();
      return <Redirect to="/channels" />;
    }

    const loading = channel?.loaded ? false : true;
    if (loading || this.state.playerStatus.channelId !== this.props.channelId) {
      return <></>;
    }
    const channelId = this.props.channelId;
    const ownId = this.props.ownId;
    const type = this.props.type;
    const defaultIcon = this.props.defaultIcon;
    const defaultAvatar = this.props.defaultAvatar;
    const handleDeleteVideo = this.props.handleDeleteVideo;
    const handleAddVideo = this.props.handleAddVideo;
    const handleSwapVideos = this.props.handleSwapVideos;

    const admins = channel.admins
      ? mapIdsToUsers(channel.admins, this.props.users, defaultAvatar)
      : [];
    const users = this.props.users;

    const editor =
      channel.ownerId === ownId || admins.find(a => a.id === ownId);
    const isMember = channel.members
      ? !!channel.members.filter(memberId => memberId === ownId).length
      : null;

    const handleSearch = this.handleSearch;
    let searchResults = this.props.trendingResults.results;
    let totalResults = this.props.trendingResults.totalResults;
    if (this.state.searchTerm !== "") {
      searchResults = channel.videoSearch.results;
      totalResults = channel.videoSearch.totalResults;
    }

    return (
      <>
        <div className="flex flex-col bg-secondaryBackground w-full overflow-x-hidden">
          {/* Google Search Index & SEO */}
          <Helmet>
            <meta charSet="UFT-8" />
            <title>{this.pickRoomName()} - Popitalk</title>
            <meta
              name="description"
              content={type === CHANNEL_TYPE && channel.description}
            />
            {type === ROOM_TYPE && <meta name="robots" content="noindex" />}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          {/* Channel & Room structure */}
          <div className="w-full h-12 bg-primaryBackground">
            <ChannelHeader
              id={channelId}
              isAdmin={editor}
              name={this.pickRoomName()}
              icon={channel.icon || defaultIcon}
              videoStatus={true}
              type={type}
            />
          </div>
          <div
            ref={this.scrollRef}
            className={`flex flex-col overflow-x-hidden h-full ${this.props.searchClasses}`}
          >
            {(tab === VIDEO_TAB || tab === POSTS_TAB) && (
              <>
                <VideoPanel
                  channelId={channelId}
                  handleDeleteVideo={handleDeleteVideo}
                  handleSwapVideos={handleSwapVideos}
                  handlePlayNextVideo={this.playNextVideo}
                  playlist={this.state.queueList}
                  playerStatus={this.state.playerStatus}
                  classNames="pt-0"
                />
                {type === CHANNEL_TYPE && (
                  <ForumPanel
                    ref={this.channelRef}
                    name={channel.name}
                    description={channel.description}
                    icon={channel.icon || defaultIcon}
                    adminList={admins}
                    status={this.state.playerStatus.status.toLowerCase()}
                    comments={this.props.comments}
                    posts={this.props.posts}
                    saveDraft={this.props.handleSaveDraft}
                    savePost={this.props.handleSavePost}
                    removePost={this.props.handleRemovePost}
                    saveComment={this.props.handleSaveComment}
                    draft={this.props.drafts}
                    defaultAvatar={defaultAvatar}
                    toggleLike={this.props.handleToggleLike}
                    ownId={ownId}
                    handleFollow={this.props.handleFollow}
                    isMember={isMember}
                    handleUnfollow={this.props.handleUnfollow}
                    handleListAdmins={this.props.handleOpenAdminsList}
                  />
                )}
                {type === ROOM_TYPE && (
                  <div className="my-4">
                    <h2 className="text-lg text-primaryText px-4">
                      {strings.findMoreVideos}
                    </h2>
                    <VideoSearch
                      searchTerm={this.state.searchTerm}
                      searchResults={searchResults}
                      totalResults={totalResults}
                      handleSearch={handleSearch}
                      handleAddVideo={handleAddVideo}
                    />
                  </div>
                )}
              </>
            )}
            {tab === QUEUE_TAB && (
              <ChannelQueue
                name={channel.name}
                icon={channel.icon || defaultIcon}
                searchTerm={this.state.searchTerm}
                searchResults={searchResults}
                totalResults={totalResults}
                handleSearch={handleSearch}
                handleAddVideo={handleAddVideo}
                queue={this.state.queueList}
                handleSwapVideos={handleSwapVideos}
                handleDeleteVideo={handleDeleteVideo}
              />
            )}
            {tab === SETTINGS_TAB && !loading && (
              <ChannelSettingsPanel
                ownerId={channel.ownerId}
                followers={mapIdsToUsers(channel.members, users, defaultAvatar)}
                admins={admins}
                bannedUsers={mapIdsToUsers(
                  channel.banned,
                  users,
                  defaultAvatar
                )}
                initialChannelForm={{
                  ...channel,
                  private: !channel.public,
                  category: ""
                }}
                handleChannelFormSubmit={values =>
                  this.props.handleChannelFormSubmit(values)
                }
                channelFormLoading={channelApi.loading}
                channelFormError={
                  channelApi.status === "error" ? channelApi.error : false
                }
                addAdminHandler={this.props.handleAddAdmin}
                removeAdminHandler={this.props.handleRemoveAdmin}
                addBanHandler={this.props.handleAddBan}
                removeBanHandler={this.props.handleRemoveBan}
              />
            )}
          </div>
        </div>
        {tab !== SETTINGS_TAB && <>{this.props.chatPanel}</>}
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Channel)
);
