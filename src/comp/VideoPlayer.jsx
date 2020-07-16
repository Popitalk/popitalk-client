import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function VideoPlayer() {
  const [playingIcon, playStatus] = useState(false);
  const [playing, handlePause] = useState(true);
  const [muted, handleMute] = useState(false);
  const [mutedIcon, muteStatus] = useState(true);

  const setBothPlaying = () => {
    playStatus(!playingIcon);
    handlePause(!playing);
  };

  const setMuted = () => {
    muteStatus(!mutedIcon);
    handleMute(!muted);
  };

  return (
    <>
      <div className="relative pb-16/9 h-full w-full">
        <div className="hover:select-none">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=5qap5aO4i9A"
            width="100%"
            height="100%"
            className="absolute t-0 l-0"
            playing={playing}
            muted={muted}
          />
        </div>
        <div className="absolute flex flex-col justify-end w-full h-full transition-colors">
          <div className="flex flex-col justify-end w-full h-full transition-colors bg-gradient-t-player transition-opacity opacity-0 hover:opacity-100 duration-200">
            <button
              className="bg-transparent w-full h-full focus:outline-none"
              onClick={() => setBothPlaying()}
            >
              {/* <div className="flex h-full justify-center items-center">
                <FontAwesomeIcon
                  icon={playingIcon === true ? "pause" : "play"}
                  className="text-tertiaryText"
                />
              </div> */}
            </button>
            <div className="flex flex-col px-2 w-full">
              <Slider
                trackStyle={{ backgroundColor: "#1DA4FE" }}
                handleStyle={{
                  backgroundColor: "#1DA4FE",
                  borderColor: "#1DA4FE"
                }}
                railStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#1DA4FE",
                  opacity: 0.25
                }}
                className="-mb-1 cursor-pointer transition-opacity opacity-75 hover:opacity-100 duration-150"
              ></Slider>
              {/* <button className="w-full h-1 rounded-xs bg-quaternaryBackground transition transform ease-in-out hover:scale-y-150 duration-100 focus:outline-none" /> */}
              <div className="flex items-center justify-between w-full my-1">
                <div className="space-x-4">
                  <button
                    className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none duration-100 transition transform ease-in-out hover:scale-110"
                    onClick={() => setBothPlaying()}
                  >
                    <FontAwesomeIcon
                      icon={playingIcon === true ? "play" : "pause"}
                      className="text-tertiaryText"
                    />
                  </button>
                  <button
                    className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none duration-100 transition transform ease-in-out hover:scale-110"
                    onClick={() => setMuted()}
                  >
                    <FontAwesomeIcon
                      icon={mutedIcon === true ? "volume-up" : "volume-mute"}
                      className="text-tertiaryText"
                    />
                  </button>
                  <span className="text-tertiaryText text-sm">0:11 / 5:04</span>
                </div>
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
