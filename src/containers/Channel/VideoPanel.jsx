import React, { Component } from "react";
import { connect } from "react-redux";
import arrayMove from "array-move";
import { openInviteModal, openProfileModal } from "../../redux/actions";
import { mapIdsToUsers, calculatePlayerStatus } from "../../helpers/functions";
import VideoSection from "../../comp/VideoSection";
import QueueSection from "../../comp/QueueSection";

const mapStateToProps = (state, ownProps) => {
  const { defaultAvatar } = state.general;
  const channel = state.channels[ownProps.channelId];
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

const mapDispatchToProps = dispatch => ({
  openInviteModal: channelId => dispatch(openInviteModal(channelId, false)),
  openProfileModal: id => dispatch(openProfileModal(id))
});

class VideoPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queueList: props.playlist,
      playerStatus: {
        channelId: props.channelId,
        ...calculatePlayerStatus(props.startPlayerStatus, props.playlist)
      }
    };

    this.playNextVideo = this.playNextVideo.bind(this);
  }

  playNextVideo() {
    if (
      this.props.playlist.length <
      this.state.playerStatus.queueStartPosition + 1
    ) {
      this.setState({
        playerStatus: {
          ...this.state.playerStatus,
          queueStartPosition: this.state.playerStatus.queueStartPosition + 1,
          videoStartTime: 0
        }
      });
    } else {
      this.setState({
        playerStatus: {
          ...this.state.playerStatus,
          queueStartPosition: 0,
          videoStartTime: 0,
          status: "Ended"
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.startPlayerStatus.queueStartPosition !==
        this.props.startPlayerStatus.queueStartPosition ||
      prevProps.startPlayerStatus.videoStartTime !==
        this.props.startPlayerStatus.videoStartTime ||
      prevProps.startPlayerStatus.status !== this.props.startPlayerStatus.status
    ) {
      this.setState({
        playerStatus: {
          channelId: this.props.channelId,
          ...calculatePlayerStatus(
            this.props.startPlayerStatus,
            this.props.playlist
          )
        }
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
          inviteUsers={() => this.props.openInviteModal(this.props.channelId)}
          openProfile={id => this.props.openProfileModal(id)}
          isInvitingAllowed={this.props.isInvitingAllowed}
          displayControls={this.props.displayControls}
          dispatchPlay={this.props.dispatchPlay}
          dispatchPause={this.props.dispatchPause}
          dispatchSkip={this.props.dispatchSkip}
          dispatchPlayNextVideo={this.playNextVideo}
        />
        <QueueSection
          queueList={this.props.playlist}
          handlerChange={handlerChange}
          handleDeleteVideo={this.props.handleDeleteVideo}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPanel);
