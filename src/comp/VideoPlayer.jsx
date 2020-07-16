import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";

function VideoPlayer() {
  const [isHovering, setIsHovering] = useState(false);
  const [playing, handlePause] = useState(true);

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
          />
        </div>
        <div
          onMouseEnter={() => setIsHovering(!isHovering)}
          onMouseLeave={() => setIsHovering(!isHovering)}
          className="absolute flex flex-col justify-end w-full h-full transition-colors"
        >
          <div className="flex flex-col justify-end w-full h-full transition-colors bg-gradient-t-player transition-opacity opacity-0 hover:opacity-100 duration-200">
            <div
              className="bg-transparent w-full h-full"
              onClick={() => handlePause(!playing)}
              role="button"
            />
            <div className="flex flex-col px-2">
              <button className="w-full h-1 rounded-xs bg-quaternaryBackground transition transform ease-in-out hover:scale-y-150 duration-100 focus:outline-none" />
              <div className="flex items-center justify-between w-full my-1">
                <div className="space-x-4">
                  <button
                    className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none duration-50"
                    onClick={() => handlePause(!playing)}
                  >
                    <FontAwesomeIcon
                      icon="play"
                      className="text-tertiaryText"
                      size="md"
                    />
                  </button>
                  <button className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none duration-50">
                    <FontAwesomeIcon
                      icon="volume-up"
                      className="text-tertiaryText"
                      size="md"
                    />
                  </button>
                  <span className="text-tertiaryText text-sm">0:11 / 5:04</span>
                </div>
                <button className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none duration-50">
                  <FontAwesomeIcon
                    icon="compress"
                    className="text-tertiaryText"
                    size="md"
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
