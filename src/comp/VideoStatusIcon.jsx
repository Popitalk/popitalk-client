import React from "react";
import Button from "./Button";
// import "./VideoStatus.css";

export default function VideoStatus({
  status = "none",
  statusMessage = "",
  size = "sm",
  shape = "circle",
  type = "button"
}) {
  if (type === "button") {
    return (
      <>
        {status === "playing" && (
          <Button
            size={size}
            shape={shape}
            className="btn-playing shadow-m h-8 w-8 p-0 m-0 bg-rainbow"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="play"
              className="svg-inline--fa fa-play fa-w-14 h-4 w-4 text-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              ></path>
            </svg>
          </Button>
        )}
        {status === "paused" && (
          <Button
            size={size}
            shape={shape}
            className="btn-paused shadow-md z-20"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="pause"
              className="svg-inline--fa fa-pause fa-w-14 h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
              ></path>
            </svg>
          </Button>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <Button
            size={size}
            shape={shape}
            className="btn-paused shadow-md z-20"
          >
            {statusMessage}
          </Button>
        )}
        {status === "none" && <p></p>}
      </>
    );
  } else if (type === "text") {
    return (
      <>
        {status === "playing" && (
          <span className="mx-1 text-base rainbow-text font-semibold">
            Playing
          </span>
        )}
        {status === "paused" && (
          <p className="mx-1 text-base text-secondaryText font-semibold">
            Paused
          </p>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <p className="text-xs mx-1 text-base text-secondaryText font-semibold">
            {statusMessage}
          </p>
        )}
      </>
    );
  }
}
