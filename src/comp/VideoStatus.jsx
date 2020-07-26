import React from "react";
import Button from "./Controls/Button";
// import "./VideoStatus.css";

export default function VideoStatus({
  status = "none",
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
            className="btn-paused shadow-md z-10"
          >
            Paused
          </Button>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <Button
            size={size}
            shape={shape}
            className="btn-paused shadow-md z-10"
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
          <span className="rainbow-text text-sm font-semibold">Playing</span>
        )}
        {status === "paused" && (
          <p className="text-secondaryText font-semibold">Paused</p>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <p className="text-xs text-secondaryText font-semibold">
            {statusMessage}
          </p>
        )}
      </>
    );
  }
}
