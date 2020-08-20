import React, { Component } from "react";
import { connect } from "react-redux";
import {
  openInviteModal,
  openProfileModal,
  setPlaying,
  setPaused,
  deleteVideo,
  swapVideos
} from "../../redux/actions";
import { mapIdsToUsers } from "../../helpers/functions";
import {
  calculatePlayerStatus,
  calculateNextPlayerStatus
} from "../../helpers/videoSyncing";
import VideoSection from "../../comp/VideoSection";
import QueueSection from "../../comp/QueueSection";

const mapStateToProps = (state, { channelId }) => {
  const { defaultAvatar } = state.general;
  const channel = state.channels[channelId];
  const viewerIds = channel.members || [];
  const users = state.users;
  const viewers = viewerIds
    ? mapIdsToUsers(viewerIds, users, defaultAvatar)
    : [];
  const ownId = state.self.id;

  return {
    viewers: viewers,
    isInvitingAllowed: channel.type === "group",
    displayControls:
      channel.type === "channel"
        ? channel.admins.find(a => a === ownId)
        : ownId,
    playlist: channel.queue,
    startPlayerStatus: {
      queueStartPosition: channel.queueStartPosition,
      clockStartTime: channel.clockStartTime,
      videoStartTime: channel.videoStartTime,
      status: channel.status
    }
  };
};

const mapDispatchToProps = (dispatch, { channelId }) => ({
  openInviteModal: () => dispatch(openInviteModal(channelId, false)),
  openProfileModal: id => dispatch(openProfileModal(id)),
  dispatchPlay: (queueStartPosition, videoStartTime) =>
    dispatch(setPlaying({ channelId, queueStartPosition, videoStartTime })),
  dispatchPause: (queueStartPosition, videoStartTime) =>
    dispatch(setPaused({ channelId, queueStartPosition, videoStartTime })),
  handleDeleteVideo: channelVideoId =>
    dispatch(deleteVideo({ channelId, channelVideoId })),
  handleSwapVideos: ({ oldIndex, newIndex }) =>
    dispatch(swapVideos({ channelId, oldIndex, newIndex }))
});

class VideoPanel extends Component {
  constructor(props) {
    super(props);

    const playerStatus = calculatePlayerStatus(
      props.startPlayerStatus,
      props.playlist
    );

    const queueList = this.mapVideoStatuses(
      props.playlist,
      playerStatus.queueStartPosition,
      playerStatus.status
    );

    this.state = {
      queueList: queueList,
      playerStatus: {
        channelId: props.channelId,
        ...playerStatus
      }
    };

    this.playNextVideo = this.playNextVideo.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
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

  handleSkip(id = null, s = 0) {
    const index = id
      ? this.state.queueList.findIndex(v => v.id === id)
      : this.state.playerStatus.queueStartPosition;

    if (this.state.playerStatus.status === "Playing") {
      this.props.dispatchPlay(index, s);
    } else {
      this.props.dispatchPause(index, s);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.startPlayerStatus.queueStartPosition !==
        this.props.startPlayerStatus.queueStartPosition ||
      prevProps.startPlayerStatus.videoStartTime !==
        this.props.startPlayerStatus.videoStartTime ||
      prevProps.startPlayerStatus.status !==
        this.props.startPlayerStatus.status ||
      prevProps.startPlayerStatus.clockStartTime !==
        this.props.startPlayerStatus.clockStartTime ||
      prevProps.channelId !== this.props.channelId
    ) {
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
    } else if (prevProps.playlist !== this.props.playlist) {
      const playerStatus = calculatePlayerStatus(
        this.props.startPlayerStatus,
        this.props.playlist
      );

      this.setState({
        queueList: this.mapVideoStatuses(
          this.props.playlist,
          playerStatus.queueStartPosition,
          playerStatus.status
        )
      });
    }
  }

  render() {
    let video = null;
    if (this.state.playerStatus.channelId === this.props.channelId) {
      video = this.state.queueList[this.state.playerStatus.queueStartPosition];
    }

    return (
      <div className={this.props.classNames}>
        <VideoSection
          {...video}
          playerStatus={this.state.playerStatus}
          activeFriendViewers={this.props.viewers}
          inviteUsers={() => this.props.openInviteModal()}
          openProfile={id => this.props.openProfileModal(id)}
          isInvitingAllowed={this.props.isInvitingAllowed}
          displayControls={this.props.displayControls}
          dispatchPlay={this.props.dispatchPlay}
          dispatchPause={this.props.dispatchPause}
          dispatchSkip={s => this.handleSkip(null, s)}
          dispatchPlayNextVideo={this.playNextVideo}
        />
        <QueueSection
          queueList={this.state.queueList}
          handlerChange={this.props.handleSwapVideos}
          handleSkip={this.handleSkip}
          handleDeleteVideo={this.props.handleDeleteVideo}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPanel);
