import React from "react";
import Button from "./Button";
import "./VideoStatus.css";

export default function VideoStatus({
  status,
  statusMessage = null,
  size = "sm",
  shape = "pill"
}) {
  return (
    <>
      {status === "playing" && (
        <Button size={size} shape={shape} className="btn-playing shadow-md">
          Playing
        </Button>
      )}
      {status === "paused" && (
        <Button size={size} shape={shape} className="btn-paused shadow-md z-20">
          Paused
        </Button>
      )}
      {(status === "queued") | (status === "ended") && statusMessage && (
        <Button size={size} shape={shape} className="btn-paused shadow-md z-20">
          {statusMessage}
        </Button>
      )}
    </>
  );
}
