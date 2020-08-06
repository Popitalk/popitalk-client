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
          <Button
            size={size}
            shape={shape}
            className="text-tertiaryText font-bold shadow-md z-10"
            background="gradient"
          >
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
          <span className="bg-gradient-r-primary rounded-xl px-2 py-1 shadow-md text-tertiaryText text-xs font-semibold select-none z-10">
            Playing
          </span>
        )}
        {status === "paused" && (
          <p className="text-secondaryText text-xs font-semibold select-none z-10">
            Paused
          </p>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <p className="text-secondaryText text-xs font-semibold select-none z-10">
            {statusMessage}
          </p>
        )}
      </>
    );
  }
}
