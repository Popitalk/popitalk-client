import React, { createRef, Component } from "react";
import { connect } from "react-redux";
import sortBy from "lodash/sortBy";
import Helmet from "react-helmet";
import { v4 as uuidv4 } from "uuid";
import { Redirect, withRouter } from "react-router-dom";
import {
  addMessage,
  getChannel,
  visitAndLeaveChannel,
  searchVideos,
  addVideo,
  deleteVideo,
  swapVideos,
  setPlaying,
  setAlert,
  getTrending
} from "../../redux/actions";
import ChannelHeaderContainer from "./ChannelHeaderContainer";
import VideoPanel from "./VideoPanel";
import ForumPanel from "./ForumPanel";
import ChannelSettingsContainer from "./ChannelSettingsContainer";
import VideoSearch from "../../components/VideoSearch";
import {
  calculatePlayerStatus,
  calculateNextPlayerStatus,
  defaultPlayerStatus,
  LOOP
} from "../../helpers/videoSyncing";
import strings from "../../helpers/localization";
import { DEFAULT_SOURCE } from "../../helpers/videoSourceImages";

const CHANNEL_TYPE = "channel";
const ROOM_TYPE = "room";

const VIDEO_TAB = "video";
const POSTS_TAB = "channel";
const SETTINGS_TAB = "settings";

// const HEADER_HEIGHT = 96; // The height of the website header + channel header

const mapStateToProps = (state, { match }) => {
  const { channelId, roomId, tab } = match.params;
  const finalId = channelId || roomId;

  const { defaultIcon } = state.general;
  const channel = state.channels[finalId];
  const channelApi = state.api.channel;
  const { id: ownId, username: ownUsername } = state.self;
  const users = state.users;

  const validTabs = [VIDEO_TAB, POSTS_TAB, SETTINGS_TAB];

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
    channel: channel ? channel : {},
    startPlayerStatus: startPlayerStatus,
    playlist: channel ? channel.queue : [],
    trendingResults: state.general.trendingResults,
    channelApi,
    ownId,
    ownUsername,
    users,
    tab: tab && validTabs.includes(tab) ? tab : VIDEO_TAB,
    type: channelId ? CHANNEL_TYPE : ROOM_TYPE
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  const channelId = match.params.channelId || match.params.roomId;

  return {
    handleSend: video =>
      dispatch(
        addMessage({
          id: uuidv4(),
          channelId,
          content: "Asking the admin to play something fun!",
          upload: "system",
          createdAt: new Date().toString(),
          author: {
            id: "",
            username: "this.props.ownUsername",
            avatar: null
          }
        })
      ),
    handleSearch: (terms, source, next = false) =>
      dispatch(searchVideos({ channelId, source, terms, next })),
    handleGetTrending: (next, source) =>
      dispatch(getTrending({ next, source })),
    handleAddVideo: videoInfo =>
      dispatch(addVideo({ channelId, ...videoInfo })),
    handleDeleteVideo: channelVideoId =>
      dispatch(deleteVideo({ channelId, channelVideoId })),
    handleSwapVideos: ({ oldIndex, newIndex }) =>
      dispatch(swapVideos({ channelId, oldIndex, newIndex })),
    handleGetChannel: leave => dispatch(getChannel({ channelId, leave })),
    handleVisitAndLeave: visitAndLeaveInfo =>
      dispatch(visitAndLeaveChannel(visitAndLeaveInfo)),
    handleChannelNotFound: () =>
      dispatch(setAlert("The channel / room you entered does not exist.")),
    dispatchPlay: (queueStartPosition, videoStartTime) =>
      dispatch(setPlaying({ channelId, queueStartPosition, videoStartTime }))
  };
};

class Channel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queueList: this.props.playlist,
      playerStatus: this.props.startPlayerStatus,
      searchTerm: "",
      source: DEFAULT_SOURCE.toLowerCase(),
      forceScroll: false
    };

    this.scrollRef = createRef();
    this.channelRef = createRef();
    this.searchRef = createRef();

    this.playNextVideo = this.playNextVideo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(term, source, next) {
    source = source ? source : this.state.source;
    source = source.toLowerCase();
    if (source !== this.state.source) {
      this.setState({ source });
    }

    if (term !== null) {
      this.setState({
        searchTerm: term.trim()
      });
    } else {
      term = this.state.searchTerm;
    }

    if (term !== "") {
      this.props.handleSearch(term, source, next);
    } else {
      this.props.handleGetTrending(next, source);
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
    return playlist.map((video, position) => {
      const videoStatus =
        position < currPosition
          ? "ended"
          : position > currPosition
          ? "queued"
          : status.toLowerCase();

      return {
        ...video,
        status: videoStatus
      };
    });
  }

  playNextVideo() {
    let nextPosition = this.state.playerStatus.queueStartPosition + 1;
    if (nextPosition === this.props.playlist.length && LOOP) {
      nextPosition = 0;
    }

    if (this.props.playlist.length > nextPosition) {
      let newQueueList = null;
      if (nextPosition === 0) {
        // Reset video statuses when restarting playlist from beginning
        newQueueList = this.mapVideoStatuses(
          this.props.playlist,
          nextPosition,
          this.state.playerStatus.status
        );
      } else {
        newQueueList = [...this.state.queueList];
        newQueueList[
          nextPosition
        ].status = this.state.playerStatus.status.toLowerCase();
        newQueueList[nextPosition - 1].status = "ended";
      }

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
      // End the stream if the channel doesn't loop
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
    const {
      startPlayerStatus,
      playlist,
      channelId,
      trendingResults,
      handleGetTrending
    } = this.props;

    const { source } = this.state;

    const playerStatus = calculatePlayerStatus(startPlayerStatus, playlist);

    this.setState({
      playerStatus: {
        channelId,
        ...playerStatus
      },
      queueList: this.mapVideoStatuses(
        playlist,
        playerStatus.queueStartPosition,
        playerStatus.status
      )
    });

    if (trendingResults.results.length === 0) {
      handleGetTrending(false, source);
    }
  }

  componentDidMount() {
    const {
      channel,
      channelId,
      handleGetChannel,
      handleVisitAndLeave
    } = this.props;

    const { playerStatus } = this.state;

    if (!channel?.loaded) {
      handleGetChannel();
    } else if (!playerStatus.channelId) {
      this.setPlayerStatus();
      handleVisitAndLeave({
        visit: channelId
      });
    }

    this.setState({
      forceScroll: true
    });
  }

  componentWillUnmount() {
    this.props.handleVisitAndLeave({
      leave: this.props.channelId
    });
  }

  componentDidUpdate(prevProps) {
    const loadChannel =
      prevProps.channelId !== this.props.channelId ||
      (prevProps.tab === SETTINGS_TAB && this.props.tab !== SETTINGS_TAB);
    if (loadChannel) {
      this.setState({
        searchTerm: ""
      });
    }

    if (
      prevProps.channelId !== this.props.channelId &&
      !this.props.channel?.loaded
    ) {
      this.props.handleGetChannel(prevProps.channelId);
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

    if (
      (prevProps.tab !== this.props.tab || this.state.forceScroll) &&
      this.scrollRef.current
    ) {
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
      } else {
        this.scrollRef.current.scrollTo({ top: 0 });
      }

      this.setState({
        forceScroll: false
      });
    }

    if (
      this.props.channelId !== prevProps.channelId &&
      this.props.channel?.loaded &&
      prevProps.channel?.loaded
    ) {
      this.props.handleVisitAndLeave({
        leave: prevProps.channelId,
        visit: this.props.channelId
      });
    }
  }

  render() {
    const {
      channelId,
      channelApi,
      channel,
      tab,
      handleChannelNotFound
    } = this.props;

    const channelNotFound =
      channelApi.status !== "loading" &&
      channelApi.status !== "initial" &&
      !channel;

    if (channelNotFound) {
      handleChannelNotFound(); // needs to be fixed
      return <Redirect to="/" />;
    }

    const loading = channel?.loaded ? false : true;

    if (loading || this.state.playerStatus.channelId !== channelId) {
      return <></>;
    }

    const {
      ownId,
      type,
      defaultIcon,
      handleDeleteVideo,
      handleSwapVideos,
      trendingResults,
      handleSend,
      dispatchPlay
    } = this.props;

    const handleSearch = this.handleSearch;
    const handleAddVideo = videoData => {
      this.props.handleAddVideo(videoData);
    };

    // const editor =
    //   channel.ownerId === ownId || admins.find(a => a.id === ownId);

    const isOwner = channel.ownerId === ownId;
    const isMember = channel.members
      ? !!channel.members.filter(memberId => memberId === ownId).length
      : null;
    const isAdmin =
      channel.type !== "channel" ? false : channel.admins.includes(ownId);

    const isSearchTerm = this.state.searchTerm !== "";
    const searchResults = isSearchTerm
      ? channel.videoSearch.results
      : trendingResults.results;
    const totalResults = isSearchTerm
      ? channel.videoSearch.totalResults
      : trendingResults.totalResults;

    const displayControls =
      channel.type === "channel"
        ? channel.admins.find(adminId => adminId === ownId)
        : ownId;

    let handleNothingPlaying = null;
    if (type !== ROOM_TYPE) {
      handleNothingPlaying = video => {
        handleSend();
      };
    }

    return (
      <>
        <div className="flex flex-col bg-background-secondary w-full overflow-x-hidden">
          {/* Channel & Room structure */}
          <div className="w-full h-12 bg-background-primary z-50">
            <ChannelHeaderContainer
              channelId={channelId}
              isMember={isMember}
              isAdmin={isAdmin}
              status={this.state.playerStatus.status.toLowerCase()}
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
                  dispatchPlay={dispatchPlay}
                  handleDeleteVideo={handleDeleteVideo}
                  handleSwapVideos={handleSwapVideos}
                  handlePlayNextVideo={this.playNextVideo}
                  handleNothingPlaying={handleNothingPlaying}
                  displayControls={displayControls}
                  playlist={this.state.queueList}
                  playerStatus={this.state.playerStatus}
                  isChannel={type === CHANNEL_TYPE && true}
                  classNames="pt-0"
                  // Below is for ChannelQueue
                  searchRef={this.searchRef}
                  name={channel.name}
                  icon={channel.icon || defaultIcon}
                  searchTerm={this.state.searchTerm}
                  searchResults={searchResults}
                  totalResults={totalResults}
                  handleSearch={handleSearch}
                  handleAddVideo={handleAddVideo}
                  queue={this.state.queueList}
                  isMember={isMember}
                />
                {type === CHANNEL_TYPE && (
                  <ForumPanel
                    ref={this.channelRef}
                    channelId={channelId}
                    isMember={isMember}
                    isAdmin={isAdmin}
                    isOwner={isOwner}
                    status={this.state.playerStatus.status.toLowerCase()}
                  />
                )}
                {type === ROOM_TYPE && (
                  <VideoSearch
                    ref={this.searchRef}
                    searchTerm={this.state.searchTerm}
                    searchResults={searchResults}
                    totalResults={totalResults}
                    handleSearch={handleSearch}
                    handleAddVideo={handleAddVideo}
                  />
                )}
              </>
            )}
            {tab === SETTINGS_TAB && (
              <ChannelSettingsContainer channelId={channel.id} />
            )}
          </div>
        </div>
        {tab !== SETTINGS_TAB && <>{this.props.chatPanel}</>}
        {/* Google Search Index & SEO */}
        <Helmet>
          <meta charSet="UFT-8" />
          <title>{`${channel.name} · ${strings.mainTitle}`}</title>
          <meta
            name="description"
            content={`${strings.popitalkChannel} - ${channel.description} - ${strings.mainDescription}`}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content={strings.mainKeywords} />
          <meta
            data-react-helmet="true"
            property="og:title"
            content={`${channel.name} · ${strings.mainTitle}`}
          />
          <meta
            data-react-helmet="true"
            property="og:description"
            content={`${strings.popitalkChannel} - ${channel.description} - ${strings.mainDescription}`}
          />
          <meta
            data-react-helmet="true"
            property="og:image"
            content={channel.icon}
          />
        </Helmet>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Channel)
);
