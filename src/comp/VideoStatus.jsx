import React from "react";
import Button from "./Button";
import "./VideoStatus.css";

export default function VideoStatus({
  status,
  queueInfo = null,
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
        <Button size={size} shape={shape} className="btn-paused shadow-md">
          Paused
        </Button>
      )}
    </>
  );
}
