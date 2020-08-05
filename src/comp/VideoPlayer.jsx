import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import Slider from "rc-slider";
import screenfull from "screenfull";
import ReactTooltip from "react-tooltip";
import "rc-slider/assets/index.css";
import VideoPlayerStatusCard from "./VideoPlayerStatusCard";
import defaultImage from "../assets/default/user-default.png";
import useLocalStorage from "../hooks/useLocalStorage";

function VideoPlayer({
  url,
  playerStatus,
  dispatchPlay,
  dispatchPause,
  dispatchSkip,
  dispatchPlayNextVideo
}) {
  const videoPlayer = useRef(null);
  const reactPlayer = useRef(null);

  // Determine if the mouse is hovering over the video player
  const [isHovering, setIsHovering] = useState(false);

  // Determine if the mouse is hovering over the volume button
  const [isHoveringVolume, setIsHoveringVolume] = useState(false);

  //Determine state for pause & play & playingIcon
  const playing = playerStatus.status === "Playing";

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [{ volume, muted }, setVolume] = useLocalStorage("volume", {
    volume: 1,
    muted: true
  });

  const handleProgressSliderChange = s => {
    dispatchSkip(playerStatus.queueStartPosition, s);
    reactPlayer.current.seekTo(s, "seconds");
  };

  const handleVolumeSliderChange = v => {
    setVolume({ volume: v, muted: false });
  };

  const handleFullScreen = () => {
    if (screenfull.isEnabled) screenfull.toggle(videoPlayer.current);
  };

  //sync playIcon and play states
  const setBothPlaying = () => {
    if (playing) {
      dispatchPause(playerStatus.queueStartPosition, progress);
    } else {
      dispatchPlay(playerStatus.queueStartPosition, progress);
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume({ volume: 0.1, muted: false });
      return;
    }

    setVolume({ volume, muted: !muted });
  };

  // formats seconds into HH:MM:SS string
  const formatSeconds = s => {
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
  };

  // generate video timestamp if video has finite duration
  const generateTimestamp = () => {
    if (duration > 0) {
      const progressTimestamp = formatSeconds(progress);
      const durationTimestamp = formatSeconds(duration);
      return `${progressTimestamp} / ${durationTimestamp}`;
    }
    return null;
  };
  return (
    <>
      {url ? (
        <div ref={videoPlayer} className="relative pb-16/9 h-full w-full">
          <ReactTooltip effect="solid" className="tooltip truncate" />
          <div className="absolute bg-black h-full w-full"></div>
          <div className="hover:select-none">
            <ReactPlayer
              ref={reactPlayer}
              url={url}
              width="100%"
              height="100%"
              className="absolute t-0 l-0"
              playing={playing}
              volume={volume}
              muted={muted}
              onReady={() => {
                reactPlayer.current.seekTo(
                  playerStatus.videoStartTime,
                  "seconds"
                );
              }}
              onProgress={({ playedSeconds }) => {
                setProgress(playedSeconds);
              }}
              progressInterval={100}
              onEnded={() => {
                console.log("ended");
                dispatchPlayNextVideo();
              }}
              onDuration={s => {
                setDuration(s);
              }}
            />
          </div>
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
                !playing
                  ? "flex flex-col justify-end w-full h-full transition-colors bg-gradient-t-player"
                  : "flex flex-col justify-end w-full h-full transition-colors bg-gradient-t-player transition-opacity opacity-0 hover:opacity-100 duration-200"
              }
            >
              <button
                className="bg-transparent w-full h-full focus:outline-none"
                onClick={() => setBothPlaying()}
              />
              <div className="flex flex-col px-2 w-full">
                <div // Set the mouse hovering state
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Slider
                    max={duration * 10}
                    value={progress * 10}
                    onChange={s => {
                      handleProgressSliderChange(s / 10);
                    }}
                    handleStyle={
                      isHovering
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
                      isHovering
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
                      isHovering
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
                    className="-mb-1 cursor-pointer transition-all opacity-75 hover:opacity-100 duration-150"
                  />
                </div>
                <div className="flex items-center justify-between w-full my-1">
                  <div className="flex space-x-4 items-center">
                    {/* Play button */}
                    <button
                      className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none duration-100 transition transform ease-in-out hover:scale-110"
                      onClick={() => setBothPlaying()}
                      data-tip={playing === false ? "Play" : "Pause"}
                      data-place="top"
                    >
                      <FontAwesomeIcon
                        icon={!playing ? "play" : "pause"}
                        className="text-tertiaryText"
                      />
                    </button>

                    {/* Volume button & slider hover effect */}
                    <div
                      className="flex flex-row hover:bg-playerControlsHover py-1 pl-2 pr-4 rounded-xl"
                      onMouseEnter={() => setIsHoveringVolume(true)}
                      onMouseLeave={() => setIsHoveringVolume(false)}
                    >
                      {/* Volume button */}
                      <button
                        className="w-8 p-1 rounded-full focus:outline-none duration-100 transition transform ease-in-out hover:scale-110"
                        onClick={toggleMute}
                        data-tip={muted ? "Unmute" : "Mute"}
                        data-place="top"
                      >
                        <FontAwesomeIcon
                          icon={
                            volume === 0 || muted ? "volume-mute" : "volume-up"
                          }
                          className="flex text-tertiaryText text-lg items-center"
                        />
                      </button>
                      {/* Volume slider */}
                      <div
                        className={
                          isHoveringVolume
                            ? "flex w-16 justify-center items-center ml-1 transition-all duration-100"
                            : "flex w-0 opacity-0 items-center transition-all duration-100"
                        }
                      >
                        <Slider
                          max={100}
                          value={muted ? 0 : volume * 100}
                          onChange={v => handleVolumeSliderChange(v / 100)}
                          handleStyle={{
                            borderColor: "#fff",
                            cursor: "pointer"
                          }}
                          trackStyle={{ backgroundColor: "#fff" }}
                          railStyle={{ backgroundColor: "#fff", opacity: 0.25 }}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>

                    <span className="text-tertiaryText text-xs">
                      {/* Video timestamp */}
                      {generateTimestamp()}
                    </span>
                  </div>
                  {/* Full screen button */}
                  <button
                    className={`w-8 p-1 rounded-full hover:bg-playerControlsHover
                      focus:outline-none transition transform ease-in-out
                      hover:scale-110 duration-100`}
                    onClick={handleFullScreen}
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
        <div ref={videoPlayer} className="relative pb-16/9 h-full w-full">
          <div className="absolute flex space-x-4 items-center justify-center bg-black h-full w-full">
            <FontAwesomeIcon
              icon="info-circle"
              className="text-secondaryText text-4xl sm:text-6xl"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-tertiaryText text-xl sm:text-2xl font-bold">
                Nothing is playing at the moment.
              </p>
              <p className="text-tertiaryText text-sm sm:text-md">
                Channel admins can add videos Up Next!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoPlayer;
