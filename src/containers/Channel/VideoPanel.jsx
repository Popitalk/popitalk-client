import React, { Component } from "react";
import { connect } from "react-redux";
import {
  openInviteModal,
  openProfileModal,
  openSocialShareModal,
  setPaused,
  setVolume
} from "../../redux/actions";
import { mapIdsToUsers } from "../../helpers/functions";
import VideoSection from "../../components/VideoSection";
import QueueSection from "../../components/ThumbnailCardLists/QueueSection";
import VideoPanelCard from "../../components/ThumbnailCards/VideoPanelCard";
import ScrollableCardList from "../../components/ThumbnailCardLists/ScrollableCardList";
import ChannelQueue from "../../components/Channel/ChannelQueue";
import strings from "../../helpers/localization";
import Button from "../../components/Controls/Button";

const mapStateToProps = (state, { channelId }) => {
  const { defaultAvatar, volume } = state.general;
  const channel = state.channels[channelId];
  const viewerIds = channel.viewers;
  const users = state.users;
  const viewers = viewerIds
    ? mapIdsToUsers(viewerIds, users, defaultAvatar)
    : [];

  return {
    viewers: viewers,
    isInvitingAllowed: channel.type === "group",
    volume: volume
  };
};

const mapDispatchToProps = (dispatch, { channelId }) => ({
  openInviteModal: () => dispatch(openInviteModal(channelId, false)),
  openSocialShareModal: () => dispatch(openSocialShareModal(channelId, false)),
  openProfileModal: id => dispatch(openProfileModal(id)),
  dispatchPause: (queueStartPosition, videoStartTime) =>
    dispatch(setPaused({ channelId, queueStartPosition, videoStartTime })),
  setVolume: volume => dispatch(setVolume(volume))
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
  state = {
    check: false // initial value
  };

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
          socialShare={() => this.props.openSocialShareModal()}
          openProfile={id => this.props.openProfileModal(id)}
          isInvitingAllowed={this.props.isInvitingAllowed}
          displayControls={this.props.displayControls}
          volume={this.props.volume}
          setVolume={this.props.setVolume}
          dispatchPlay={this.props.dispatchPlay}
          dispatchPause={this.props.dispatchPause}
          dispatchSkip={s => this.handleSkip(null, s)}
          dispatchPlayNextVideo={this.props.handlePlayNextVideo}
          handleNothingPlaying={this.props.handleNothingPlaying}
          isChannel={this.props.isChannel}
        />
        <div className="flex px-4 mt-4 space-x-4">
          <p className="text-lg text-copy-primary select-none font-bold">
            {strings.upNext}
          </p>
          {this.props.displayControls && (
            <Button
              styleNone
              styleNoneContent={
                this.state.check === true
                  ? "Save and return"
                  : strings.manageUpNext
              }
              styleNoneContentClassName="text-copy-highlight text-sm underline"
              onClick={e =>
                this.setState(prevState => ({
                  check: !prevState.check
                }))
              }
            />
          )}
        </div>
        {this.props.displayControls ? (
          <>
            {this.state.check === true ? (
              <ChannelQueue
                ref={this.props.ref}
                name={this.props.name}
                icon={this.props.icon || this.props.defaultIcon}
                searchTerm={this.props.searchTerm}
                searchResults={this.props.searchResults}
                totalResults={this.props.totalResults}
                handleSearch={this.props.handleSearch}
                handleAddVideo={this.props.handleAddVideo}
                queue={this.props.queue}
                handleSwapVideos={this.props.handleSwapVideos}
                handleDeleteVideo={this.props.handleDeleteVideo}
                // handleFindMore={() => this.scrollToSearch()}
              />
            ) : (
              <QueueSection
                queueList={this.props.playlist}
                handlerChange={this.props.handleSwapVideos}
                handleSkip={this.handleSkip}
                handleDeleteVideo={this.props.handleDeleteVideo}
                handleFindMore={this.props.handleFindMore}
              />
            )}
          </>
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
