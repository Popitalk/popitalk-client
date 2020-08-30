import React, { Component } from "react";
import { connect } from "react-redux";
import {
  openInviteModal,
  openProfileModal,
  setPlaying,
  setPaused
} from "../../redux/actions";
import { mapIdsToUsers } from "../../helpers/functions";
import VideoSection from "../../comp/VideoSection";
import QueueSection from "../../comp/QueueSection";
import VideoPanelCard from "../../comp/VideoPanelCard";
import ScrollableCardList from "../../comp/ScrollableCardList";

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
      channel.type === "channel" ? channel.admins.find(a => a === ownId) : ownId
  };
};

const mapDispatchToProps = (dispatch, { channelId }) => ({
  openInviteModal: () => dispatch(openInviteModal(channelId, false)),
  openProfileModal: id => dispatch(openProfileModal(id)),
  dispatchPlay: (queueStartPosition, videoStartTime) =>
    dispatch(setPlaying({ channelId, queueStartPosition, videoStartTime })),
  dispatchPause: (queueStartPosition, videoStartTime) =>
    dispatch(setPaused({ channelId, queueStartPosition, videoStartTime }))
});

class VideoPanel extends Component {
  constructor(props) {
    super(props);

    this.handleSkip = this.handleSkip.bind(this);
  }

  handleSkip(id = null, s = 0) {
    const index = id
      ? this.props.playlist.findIndex(v => v.id === id)
      : this.props.playerStatus.queueStartPosition;

    if (this.props.playerStatus.status === "Playing") {
      this.props.dispatchPlay(index, s);
    } else {
      this.props.dispatchPause(index, s);
    }
  }

  render() {
    let video = null;
    if (this.props.playerStatus.channelId === this.props.channelId) {
      video = this.props.playlist[this.props.playerStatus.queueStartPosition];
    }

    return (
      <div className={this.props.classNames}>
        <VideoSection
          {...video}
          playerStatus={this.props.playerStatus}
          activeFriendViewers={this.props.viewers}
          inviteUsers={() => this.props.openInviteModal()}
          openProfile={id => this.props.openProfileModal(id)}
          isInvitingAllowed={this.props.isInvitingAllowed}
          displayControls={this.props.displayControls}
          dispatchPlay={this.props.dispatchPlay}
          dispatchPause={this.props.dispatchPause}
          dispatchSkip={s => this.handleSkip(null, s)}
          dispatchPlayNextVideo={this.props.handlePlayNextVideo}
        />
        {this.props.displayControls ? (
          <QueueSection
            queueList={this.props.playlist}
            handlerChange={this.props.handleSwapVideos}
            handleSkip={this.handleSkip}
            handleDeleteVideo={this.props.handleDeleteVideo}
          />
        ) : (
          <ScrollableCardList axis="x">
            {this.props.playlist.map(value => (
              <VideoPanelCard
                {...value}
                key={value.id}
                size="sm"
                type="none"
                className="mr-2"
              />
            ))}
          </ScrollableCardList>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPanel);
