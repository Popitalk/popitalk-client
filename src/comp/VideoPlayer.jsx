import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import VideoPlayerStatusCard from "./VideoPlayerStatusCard";
import defaultImage from "../assets/default/user-default.png";

function VideoPlayer() {
  const player = useRef(null);

  //Determine if the mouse is hovering over the video player
  const [isHovering, setIsHovering] = useState(false);

  //Determine state for pasue & play & playingIcon
  const [playingIcon, playStatus] = useState(false);
  const [playing, handlePause] = useState(true);

  //Determine state for volume & muteIcon
  const [muted, handleMute] = useState(false);
  const [mutedIcon, muteStatus] = useState(true);

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleVideoSliderChange = s => {
    player.current.seekTo(s, "seconds");
  };

  //sync playIcon and play states
  const setBothPlaying = () => {
    playStatus(!playingIcon);
    handlePause(!playing);
  };

  //sync volumeIcon and muted states
  const setMuted = () => {
    handleMute(!muted);
    muteStatus(!mutedIcon);
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

    const seconds = Math.round(s % 60);
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
      <div className="relative pb-16/9 h-full w-full">
        <div className="absolute bg-black h-full w-full"></div>
        <div className="hover:select-none">
          <ReactPlayer
            ref={player}
            url="https://www.youtube.com/watch?v=LHODkrToLM8"
            width="100%"
            height="100%"
            className="absolute t-0 l-0"
            playing={playing}
            muted={muted}
            onReady={() => {
              setDuration(player.current.getDuration());
            }}
            onProgress={({ playedSeconds }) => {
              setProgress(playedSeconds);
            }}
          />
        </div>
        <div className="absolute flex flex-col justify-end w-full h-full transition-colors">
          <div className="p-2 w-auto inline-block select-none">
            <VideoPlayerStatusCard
              defaultAvatar={defaultImage}
              username="Andrew"
              message="skipped to 0:11"
              systemMessage="Starting 10s"
            />
          </div>
          <div
            //Always show the video controls while the video is at pause.
            className={
              playingIcon === true
                ? "flex flex-col justify-end w-full h-full transition-colors bg-gradient-t-player"
                : "flex flex-col justify-end w-full h-full transition-colors bg-gradient-t-player transition-opacity opacity-0 hover:opacity-100 duration-200"
            }
          >
            <button
              className="bg-transparent w-full h-full focus:outline-none"
              onClick={() => setBothPlaying()}
            />
            <div
              className="flex flex-col px-2 w-full"
              //Set the mouse hovering state
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Slider
                max={duration}
                value={progress}
                onChange={handleVideoSliderChange}
                handleStyle={
                  isHovering === true
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
                  isHovering === true
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
                  isHovering === true
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
                className="-mb-1 cursor-pointer transition-opacity opacity-75 hover:opacity-100 duration-150"
              />
              <div className="flex items-center justify-between w-full my-1">
                <div className="flex space-x-4 items-center">
                  {/* Play button */}
                  <button
                    className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none duration-100 transition transform ease-in-out hover:scale-110"
                    onClick={() => setBothPlaying()}
                  >
                    <FontAwesomeIcon
                      icon={playingIcon === true ? "play" : "pause"}
                      className="text-tertiaryText"
                    />
                  </button>
                  {/* Volume button */}
                  <button
                    className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none duration-100 transition transform ease-in-out hover:scale-110"
                    onClick={() => setMuted()}
                  >
                    <FontAwesomeIcon
                      icon={mutedIcon === true ? "volume-up" : "volume-mute"}
                      className="text-tertiaryText"
                    />
                  </button>
                  <span className="text-tertiaryText text-xs">
                    {/* Video timestamp */}
                    {generateTimestamp()}
                  </span>
                </div>
                {/* Full screen button */}
                <button className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none transition transform ease-in-out hover:scale-110 duration-100">
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
    </>
  );
}

export default VideoPlayer;
