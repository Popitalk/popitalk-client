import React, { Component } from "react";
import { connect } from "react-redux";
import arrayMove from "array-move";
import {
  openInviteModal,
  openProfileModal,
  setPlaying,
  setPaused,
  skipPlayer,
  deleteVideo
} from "../../redux/actions";
import {
  mapIdsToUsers,
  calculatePlayerStatus,
  calculateNextPlayerStatus
} from "../../helpers/functions";
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
    displayControls: channel.admins.find(a => a === ownId)
  };
};

const mapDispatchToProps = (dispatch, { channelId }) => ({
  openInviteModal: () => dispatch(openInviteModal(channelId, false)),
  openProfileModal: id => dispatch(openProfileModal(id)),
  dispatchPlay: (queueStartPosition, videoStartTime) =>
    dispatch(setPlaying({ channelId, queueStartPosition, videoStartTime })),
  dispatchPause: (queueStartPosition, videoStartTime) =>
    dispatch(setPaused({ channelId, queueStartPosition, videoStartTime })),
  dispatchSkip: (queueStartPosition, videoStartTime) =>
    dispatch(skipPlayer({ channelId, queueStartPosition, videoStartTime })),
  handleDeleteVideo: channelVideoId =>
    dispatch(deleteVideo({ channelId, channelVideoId }))
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

      this.setState({
        playerStatus: {
          ...this.state.playerStatus,
          ...calculateNextPlayerStatus(
            this.props.startPlayerStatus,
            this.props.playlist,
            nextPosition
          )
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

  handleSkip(id) {
    const index = this.state.queueList.findIndex(v => v.id === id);
    if (this.state.playerStatus.status === "Playing") {
      this.props.dispatchPlay(index, 0);
    } else {
      this.props.dispatchPause(index, 0);
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
      prevProps.channelId !== this.props.channelId
    ) {
      this.setState({
        playerStatus: {
          channelId: this.props.channelId,
          ...calculatePlayerStatus(
            this.props.startPlayerStatus,
            this.props.playlist
          )
        },
        queueList: this.mapVideoStatuses(
          this.props.playlist,
          this.props.startPlayerStatus.queueStartPosition,
          this.props.startPlayerStatus.status
        )
      });
    }
  }

  render() {
    const handlerChange = ({ oldIndex, newIndex }) => {
      // setQueueList(arrayMove(queueList, oldIndex, newIndex));
    };

    let video = null;
    if (this.state.playerStatus.channelId === this.props.channelId) {
      video = this.props.playlist[this.state.playerStatus.queueStartPosition];
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
          dispatchSkip={this.props.dispatchSkip}
          dispatchPlayNextVideo={this.playNextVideo}
        />
        <QueueSection
          queueList={this.state.queueList}
          handlerChange={handlerChange}
          handleSkip={this.handleSkip}
          handleDeleteVideo={this.props.handleDeleteVideo}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPanel);
