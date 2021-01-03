import React, { createRef, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import Slider from "rc-slider";
import screenfull from "screenfull";
import ReactTooltip from "react-tooltip";
import "rc-slider/assets/index.css";
import moment from "moment";
import VideoPlayerStatusCard from "./VideoPlayerStatusCard";
import Ripples from "react-ripples";
import Button from "./Controls/Button";
import { BUFFER_TIME } from "../helpers/videoSyncing";
import strings from "../helpers/localization";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      isHoveringVolume: false,
      playing: false,
      progress: this.props.playerStatus.videoStartTime,
      ready: false,
      duration: 0,
      videoStatus: {
        currSeconds: 0
      }
    };

    this.reactPlayer = createRef();
    this.videoPlayer = createRef();

    this.playTimer = null;
    this.countDownTimer = null;

    this.setCountDownTimer = this.setCountDownTimer.bind(this);
  }

  handleProgressSliderChange(s) {
    this.props.dispatchSkip(s);
  }

  handleVolumeSliderChange(v) {
    if (this.state.isHoveringVolume) {
      this.props.setVolume({ volume: v, muted: false });
    }
  }

  handleFullScreen() {
    if (screenfull.isEnabled) screenfull.toggle(this.videoPlayer.current);
  }

  setBothPlaying() {
    if (this.state.playing || this.state.videoStatus.currSeconds !== 0) {
      this.props.dispatchPause(
        this.props.playerStatus.queueStartPosition,
        this.state.progress
      );
    } else {
      this.props.dispatchPlay(
        this.props.playerStatus.queueStartPosition,
        this.state.progress
      );
    }
  }

  toggleMute() {
    if (this.props.volume.volume === 0) {
      this.props.setVolume({ volume: 1, muted: false });
      return;
    }

    this.props.setVolume({ muted: !this.props.volume.muted });
  }

  // formats seconds into HH:MM:SS string
  formatSeconds(s) {
    const out = [];

    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    if (hours > 0) {
      out.push(hours.toString());
      out.push(minutes.toString().padStart(2, "0"));
    } else {
      out.push(minutes.toString());
    }

    const seconds = Math.floor(s % 60);
    out.push(seconds.toString().padStart(2, "0"));

    return out.join(":");
  }

  // generate video timestamp if video has finite duration
  generateTimestamp() {
    if (this.state.duration > 0) {
      const progressTimestamp = this.formatSeconds(this.state.progress);
      const durationTimestamp = this.formatSeconds(this.state.duration);
      return `${progressTimestamp} / ${durationTimestamp}`;
    }
    return null;
  }

  clearTimer(timer) {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  setCountDownTimer() {
    const remainingTime = this.props.playerStatus.clockStartTime - moment();
    if (remainingTime > 0) {
      this.startCountDownTimer(remainingTime);
    } else {
      this.clearTimer(this.countDownTimer);

      this.setState({
        videoStatus: {
          ...this.state.videoStatus,
          currSeconds: 0
        }
      });
    }
  }

  startCountDownTimer(remainingTime) {
    let waitTime = remainingTime % 1000;
    if (waitTime === 0) {
      waitTime = 1000;
    }

    this.clearTimer(this.countDownTimer);
    this.countDownTimer = setInterval(() => this.setCountDownTimer(), waitTime);

    const currSeconds = Math.ceil(remainingTime / 1000);

    this.setState({
      videoStatus: {
        ...this.state.videoStatus,
        currSeconds: currSeconds
      }
    });
  }

  setPlayTimer(ready) {
    this.clearTimer(this.playTimer);
    this.clearTimer(this.countDownTimer);

    let waitTime = this.props.playerStatus.clockStartTime - moment();

    waitTime = waitTime > 0 ? waitTime : BUFFER_TIME + waitTime;

    if (this.props.playerStatus.status === "Playing") {
      this.playTimer = setInterval(() => {
        this.setState({
          playing: true
        });

        this.clearTimer(this.playTimer);
      }, waitTime);

      this.startCountDownTimer(waitTime);
    }
    if (ready && this.props.playerStatus.videoStartTime) {
      this.reactPlayer.current.seekTo(
        this.props.playerStatus.videoStartTime,
        "seconds"
      );
    }

    this.setState({
      playing: false,
      progress: this.props.playerStatus.videoStartTime,
      videoStatus: {
        currSeconds: 0
      }
    });
  }

  componentDidMount() {
    this.setPlayTimer(this.state.ready);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.playerStatus.clockStartTime !==
        this.props.playerStatus.clockStartTime ||
      prevProps.playerStatus.status !== this.props.playerStatus.status
    ) {
      const ready = prevProps.url === this.props.url && this.state.ready;
      if (prevProps.url !== this.props.url) {
        this.setState({ ready: false });
        this.setPlayTimer(ready);
      } else {
        if (
          Math.abs(
            this.props.playerStatus.videoStartTime -
              this.state.progress -
              BUFFER_TIME
          ) > 3 ||
          this.props.playerStatus.status !== prevProps.playerStatus.status
        ) {
          this.setPlayTimer(ready);
        }
      }
    }
  }

  componentWillUnmount() {
    this.clearTimer(this.playTimer);
    this.clearTimer(this.countDownTimer);
  }

  render() {
    const showPlay =
      !this.state.playing && this.state.videoStatus.currSeconds === 0;

    const videoStatusCard = (
      <div className="absolute flex items-start justify-start m-2 w-full h-full">
        {!this.state.playing && this.state.videoStatus.currSeconds === 0 && (
          <VideoPlayerStatusCard
            systemMessage={strings.pausedPopup}
            icon="pause"
          />
        )}
        {this.state.videoStatus.currSeconds > 0 && (
          <VideoPlayerStatusCard
            systemMessage={`${strings.startingIn} ${this.state.videoStatus.currSeconds}`}
          />
        )}
      </div>
    );

    if (!this.props.url) {
      return (
        <div ref={this.videoPlayer} className="relative pb-16/9 h-full w-full">
          <div className="absolute flex space-x-4 items-center justify-center bg-black h-full w-full">
            <FontAwesomeIcon
              icon="info-circle"
              className="text-copy-secondary text-4xl sm:text-6xl"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-copy-tertiary text-xl lg:text-2xl font-bold">
                {strings.nothingPlaying}
              </p>
              <p className="text-copy-secondary text-sm sm:text-md">
                {strings.nothingPlayingSubtitle}
              </p>
            </div>
          </div>
        </div>
      );
    }
    const controlsClassName =
      "flex items-center justify-center w-8 h-8 rounded-full";

    return (
      <>
        <div
          ref={this.videoPlayer}
          className="relative pb-16/9 h-full w-full bg-background-primary"
        >
          <div className="absolute h-full w-full z-20">
            {videoStatusCard}
            {/* Click background to play or pause the video - with ripple animation */}
            {this.props.displayControls && (
              <Ripples
                className="w-full h-full focus:outline-none cursor-pointer"
                onClick={() => this.setBothPlaying()}
                role="button"
                during={2200}
              />
            )}
          </div>
          <ReactPlayer
            ref={this.reactPlayer}
            url={this.props.url}
            width="100%"
            height="100%"
            className="absolute"
            playing={this.state.playing}
            volume={this.props.volume.volume}
            muted={this.props.volume.muted}
            onReady={() => {
              this.reactPlayer.current.seekTo(
                this.props.playerStatus.videoStartTime,
                "seconds"
              );
              this.setState({ ready: true });
            }}
            onProgress={({ playedSeconds }) => {
              this.setState({ progress: playedSeconds });
            }}
            progressInterval={100}
            onEnded={() => {
              this.props.dispatchPlayNextVideo();
            }}
            onDuration={s => {
              this.setState({ duration: s });
            }}
            caption="false"
          />
        </div>
        <div className="flex flex-col bg-background-primary justify-end w-full h-12 transition-colors rounded-b-md">
          <div // Set the mouse hovering state
            onMouseEnter={() => this.setState({ isHovering: true })}
            onMouseLeave={() => this.setState({ isHovering: false })}
          >
            <Slider
              max={this.state.duration * 10}
              value={this.state.progress * 10}
              onChange={
                this.props.displayControls &&
                (s => {
                  this.handleProgressSliderChange(s / 10);
                })
              }
              handleStyle={
                this.props.displayControls && this.state.isHovering
                  ? {
                      backgroundColor: "#1DA4FE",
                      borderColor: "#1DA4FE",
                      cursor: "pointer",
                      width: 15,
                      height: 15
                    }
                  : {
                      width: 0,
                      height: 0,
                      border: 0
                    }
              }
              trackStyle={
                this.props.displayControls && this.state.isHovering
                  ? {
                      backgroundColor: "#1DA4FE",
                      height: 6
                    }
                  : {
                      backgroundColor: "#1DA4FE",
                      height: 4
                    }
              }
              railStyle={
                this.props.displayControls && this.state.isHovering
                  ? {
                      backgroundColor: "#1DA4FE",
                      opacity: 0.25,
                      height: 6
                    }
                  : {
                      backgroundColor: "#1DA4FE",
                      opacity: 0.25,
                      height: 4
                    }
              }
              className={`-mb-px ${
                this.props.displayControls &&
                "cursor-pointer transition-all opacity-100 hover:opacity-100 duration-150"
              }`}
            />
          </div>
          <div className="flex items-center justify-between w-full px-2">
            <div className="flex space-x-2 items-center">
              {/* Play & Pause button */}
              {this.props.displayControls && (
                <Ripples className="transition transform hover:scale-110 duration-100 p-px rounded-full">
                  <Button
                    styleNone
                    styleNoneIconClassName="text-copy-primary"
                    hoverable
                    icon={showPlay ? "play" : "pause"}
                    className={controlsClassName}
                    onClick={() => this.setBothPlaying()}
                    data-tip={showPlay ? strings.play : strings.pause}
                    data-place="top"
                    analyticsString="Play/Pause Button: VideoPlayer"
                  />
                </Ripples>
              )}
              {/* Volume button & slider hover effect */}
              <div
                className="flex flex-row px-2 pr-4 h-10 items-center space-x-2 rounded-lg"
                onMouseEnter={() => this.setState({ isHoveringVolume: true })}
                onMouseLeave={() => this.setState({ isHoveringVolume: false })}
              >
                {/* Volume button */}
                <Button
                  styleNone
                  icon={
                    this.props.volume.volume === 0 || this.props.volume.muted
                      ? "volume-mute"
                      : "volume-up"
                  }
                  styleNoneIconClassName="text-copy-primary text-xl"
                  className={controlsClassName}
                  hoverable
                  onClick={() => this.toggleMute()}
                  data-tip={
                    this.props.volume.muted ? strings.unmute : strings.mute
                  }
                  data-place="top"
                  analyticsString="Volume Button: VideoPlayer"
                />
                {/* Volume slider */}
                <div
                  className={`flex justify-center items-center transition-all duration-100 ${
                    this.state.isHoveringVolume ? "w-16" : "w-0 opacity-0 "
                  }`}
                >
                  <Slider
                    max={100}
                    value={
                      this.props.volume.muted
                        ? 0
                        : this.props.volume.volume * 100
                    }
                    onChange={v => this.handleVolumeSliderChange(v / 100)}
                    handleStyle={{
                      borderColor: "#1DA4FE",
                      backgroundColor: "#1DA4FE",
                      cursor: "pointer"
                    }}
                    trackStyle={{ backgroundColor: "#1DA4FE" }}
                    railStyle={{
                      backgroundColor: "#1DA4FE",
                      opacity: 0.1
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <span className="text-copy-primary text-xs font-bold">
                {/* Video timestamp */}
                {this.generateTimestamp()}
              </span>
            </div>
            <Button
              styleNone
              icon="expand"
              styleNoneIconClassName="text-copy-primary"
              hoverable
              className={controlsClassName}
              onClick={() => this.handleFullScreen()}
              data-tip={strings.fullScreen}
              data-place="top"
              analyticsString="Full Screen Button: VideoPlayer"
            />
          </div>
        </div>
        <ReactTooltip
          effect="solid"
          backgroundColor="#F2F2F2"
          textColor="black"
          className="shadow-lg rounded-md py-1 px-3"
          arrowColor="transparent"
        />
      </>
    );
  }
}

export default VideoPlayer;
