import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Transition from "./Transition";
import ReactPlayer from "react-player";
function VideoPlayer() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      {/* <div className="relative bg-gray-900"> */}
      {/* <div
          onMouseEnter={() => setIsHovering(!isHovering)}
          onMouseLeave={() => setIsHovering(!isHovering)}
          className="absolute flex flex-col justify-end w-full h-full p-4 transition-colors duration-150 hover:bg-gradient-t-player"
        >
          <Transition
            show={isHovering}
            enter="transition ease-out duration-150 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <>
              <div className="w-full h-1 rounded-full bg-quaternaryBackground"></div>
              <div className="flex items-center justify-between w-full mt-2">
                <div className="space-x-4">
                  <button className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none">
                    <FontAwesomeIcon
                      icon="play"
                      className="text-tertiaryText"
                      size="md"
                    />
                  </button>
                  <button className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none">
                    <FontAwesomeIcon
                      icon="volume-up"
                      className="text-tertiaryText"
                      size="md"
                    />
                  </button>
                  <span className="text-tertiaryText">0:11 / 5:04</span>
                </div>
                <button className="w-8 p-1 rounded-full hover:bg-playerControlsHover focus:outline-none">
                  <FontAwesomeIcon
                    icon="compress"
                    className="text-tertiaryText"
                    size="md"
                  />
                </button>
              </div>
            </>
          </Transition>
        </div> */}
      {/* <iframe
          title="youtube"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/mBw3qzf4s18?showinfo=0&rel=0&controls=0&disablekb=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        controls
      />
      {/* </div> */}
    </>
  );
}

export default VideoPlayer;
