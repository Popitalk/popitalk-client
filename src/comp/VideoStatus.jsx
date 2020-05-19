import React from "react";
import Button from "./Button";
import "./VideoStatus.css";

export default function VideoStatus({
  status,
  statusMessage = "",
  size = "sm",
  shape = "pill",
  type = "button"
}) {
  if (type === "button") {
    return (
      <>
        {status === "playing" && (
          <Button size={size} shape={shape} className="btn-playing shadow-md">
            Playing
          </Button>
        )}
        {status === "paused" && (
          <Button
            size={size}
            shape={shape}
            className="btn-paused shadow-md z-20"
          >
            Paused
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
      </>
    );
  } else if (type === "text") {
    return (
      <>
        {status === "playing" && (
          <p className="mx-1 text-base btn-playing font-semibold">Playing</p>
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
