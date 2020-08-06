import React, { createRef, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import Slider from "rc-slider";
import screenfull from "screenfull";
import ReactTooltip from "react-tooltip";
import "rc-slider/assets/index.css";
import useLocalStorage from "../hooks/useLocalStorage";
import moment from "moment";
// import VideoPlayerStatusCard from "./VideoPlayerStatusCard";
// import defaultImage from "../assets/default/user-default.png";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      isHoveringVolume: false,
      playing: false,
      progress: 0,
      duration: 0,
      //TODO: Re-add local storage functionality
      volume: {
        volume: 1,
        muted: true
      }
    };

    this.reactPlayer = createRef();
    this.videoPlayer = createRef();

    this.playTimer = null;
  }

  handleProgressSliderChange(s) {
    this.props.dispatchSkip(this.props.playerStatus.queueStartPosition, s);
    this.reactPlayer.current.seekTo(s, "seconds");
  }

  handleVolumeSliderChange(v) {
    this.setState({ volume: { volume: v, muted: false } });
  }

  handleFullScreen() {
    if (screenfull.isEnabled) screenfull.toggle(this.videoPlayer.current);
  }

  //sync playIcon and play states
  setBothPlaying() {
    if (this.state.playing) {
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
    if (this.state.volume.volume === 0) {
      this.setState({ volume: { volume: 0.1, muted: false } });
      return;
    }

    this.setState({
      volume: {
        volume: this.state.volume.volume,
        muted: !this.state.volume.muted
      }
    });
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

  setPlayTimer() {
    if (this.playTimer) {
      clearInterval(this.playTimer);
      this.playTimer = null;
    }

    const waitTime = this.props.playerStatus.clockStartTime - moment();
    if (waitTime > 0) {
      this.playTimer = setInterval(() => {
        this.setState({
          playing: this.props.playerStatus.status === "Playing"
        });

        clearInterval(this.playTimer);
        this.playTimer = null;
      }, waitTime);
    }

    this.setState({
      playing: false
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.playerStatus.clockStartTime !==
      this.props.playerStatus.clockStartTime
    ) {
      this.setPlayTimer();
    }
  }

  componentWillUnmount() {
    if (this.playTimer) {
      clearInterval(this.playTimer);
      this.playTimer = null;
    }
  }

  render() {
    return (
      <>
        {/* When nothing is in the queue, it should hide the VideoPlayer for both admin & followers (and show the default placeholder). 
        I added displayControls below to hide the play button and take away scroll control for followers. 
        Sound & Full screen control is still accessible to followers*/}
        {this.props.url ? (
          <div
            ref={this.videoPlayer}
            className="relative pb-16/9 h-full w-full"
          >
            <ReactTooltip effect="solid" className="tooltip truncate" />
            <div className="absolute bg-black h-full w-full"></div>
            <div className="hover:select-none">
              <ReactPlayer
                ref={this.reactPlayer}
                url={this.props.url}
                width="100%"
                height="100%"
                className="absolute t-0 l-0"
                playing={this.state.playing}
                volume={this.state.volume.volume}
                muted={this.state.volume.muted}
                onReady={() => {
                  this.reactPlayer.current.seekTo(
                    this.props.playerStatus.videoStartTime,
                    "seconds"
                  );
                  this.setPlayTimer();
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
              />
            </div>
            {/* Pause indicator on the background */}
            {this.state.playing === false && (
              <div className="absolute flex items-center justify-center w-full h-full">
                <p className="flex items-center justify-center text-tertiaryText text-2xl px-8 py-4 bg-black bg-opacity-50 rounded-xl shadow-xl space-x-4">
                  <FontAwesomeIcon icon="pause" className="text-tertiaryText" />
                  <p>Paused</p>
                </p>
              </div>
            )}
            <div className="absolute flex flex-col justify-end w-full h-full transition-colors">
              {/* <div className="p-2 w-auto inline-block select-none">
                <VideoPlayerStatusCard
                  defaultAvatar={defaultImage}
                  username="Andrew"
                  message="skipped to 0:11"
                  systemMessage="Starting 10s"
                />
              </div> */}
              <div
                // Always show the video controls while the video is at pause.
                className={
                  !this.state.playing
                    ? "flex flex-col justify-end w-full h-full transition-colors bg-gradient-t-player"
                    : "flex flex-col justify-end w-full h-full transition-colors bg-gradient-t-player transition-opacity opacity-0 hover:opacity-100 duration-200"
                }
              >
                {/* Click background to play or pause the video */}
                {this.props.displayControls && (
                  <button
                    className="bg-transparent w-full h-full focus:outline-none"
                    onClick={() => this.setBothPlaying()}
                  />
                )}
                <div className="flex flex-col px-2 w-full">
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
                              height: 3
                            }
                      }
                      railStyle={
                        this.props.displayControls && this.state.isHovering
                          ? {
                              backgroundColor: "#fff",
                              opacity: 0.25,
                              height: 6
                            }
                          : {
                              backgroundColor: "#fff",
                              opacity: 0.25,
                              height: 3
                            }
                      }
                      className={`-mb-1 ${
                        this.props.displayControls &&
                        "cursor-pointer transition-all opacity-75 hover:opacity-100 duration-150"
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between w-full my-1">
                    <div className="flex space-x-4 items-center">
                      {/* Play button */}
                      {this.props.displayControls && (
                        <button
                          className={`w-8 p-1 rounded-full focus:outline-none ${
                            this.props.displayControls &&
                            "hover:bg-playerControlsHover duration-100 transition transform ease-in-out hover:scale-110"
                          }`}
                          onClick={() => this.setBothPlaying()}
                          data-tip={
                            this.state.playing === false ? "Play" : "Pause"
                          }
                          data-place="top"
                        >
                          <FontAwesomeIcon
                            icon={!this.state.playing ? "play" : "pause"}
                            className="text-tertiaryText"
                          />
                        </button>
                      )}
                      {/* Volume button & slider hover effect */}
                      <div
                        className="flex flex-row hover:bg-playerControlsHover py-1 pl-2 pr-4 rounded-xl"
                        onMouseEnter={() =>
                          this.setState({ isHoveringVolume: true })
                        }
                        onMouseLeave={() =>
                          this.setState({ isHoveringVolume: false })
                        }
                      >
                        {/* Volume button */}
                        <button
                          className="w-8 p-1 rounded-full focus:outline-none duration-100 transition transform ease-in-out hover:scale-110"
                          onClick={this.toggleMute}
                          data-tip={this.state.volume.muted ? "Unmute" : "Mute"}
                          data-place="top"
                        >
                          <FontAwesomeIcon
                            icon={
                              this.state.volume.volume === 0 ||
                              this.state.volume.muted
                                ? "volume-mute"
                                : "volume-up"
                            }
                            className="flex text-tertiaryText text-lg items-center"
                          />
                        </button>
                        {/* Volume slider */}
                        <div
                          className={
                            this.state.isHoveringVolume
                              ? "flex w-16 justify-center items-center ml-1 transition-all duration-100"
                              : "flex w-0 opacity-0 items-center transition-all duration-100"
                          }
                        >
                          <Slider
                            max={100}
                            value={
                              this.state.volume.muted
                                ? 0
                                : this.state.volume.volume * 100
                            }
                            onChange={v =>
                              this.handleVolumeSliderChange(v / 100)
                            }
                            handleStyle={{
                              borderColor: "#fff",
                              cursor: "pointer"
                            }}
                            trackStyle={{ backgroundColor: "#fff" }}
                            railStyle={{
                              backgroundColor: "#fff",
                              opacity: 0.25
                            }}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>

                      <span className="text-tertiaryText text-xs">
                        {/* Video timestamp */}
                        {this.generateTimestamp()}
                      </span>
                    </div>
                    {/* Full screen button */}
                    <button
                      className={`w-8 p-1 rounded-full hover:bg-playerControlsHover
                        focus:outline-none transition transform ease-in-out
                        hover:scale-110 duration-100`}
                      onClick={this.handleFullScreen}
                      data-tip="Full screen"
                      data-place="top"
                    >
                      <FontAwesomeIcon
                        icon="compress"
                        className="text-tertiaryText"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            ref={this.videoPlayer}
            className="relative pb-16/9 h-full w-full"
          >
            <div className="absolute flex space-x-4 items-center justify-center bg-black h-full w-full">
              <FontAwesomeIcon
                icon="info-circle"
                className="text-secondaryText text-4xl sm:text-6xl"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-tertiaryText text-xl sm:text-2xl font-bold">
                  Nothing is playing at the moment.
                </p>
                <button className="bg-gradient-r-button font-bold rounded-md py-2 text-tertiaryText text-sm sm:text-md focus:outline-none transition transform ease-in-out hover:scale-102 duration-150">
                  {this.props.displayControls
                    ? "Search and add videos Up Next!"
                    : "Request <channel> to play something fun!"}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default VideoPlayer;
