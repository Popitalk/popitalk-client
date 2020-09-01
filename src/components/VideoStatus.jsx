import React from "react";
import Button from "./Controls/Button";
// import "./VideoStatus.css";
import strings from "../helpers/localization";

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
            actionButton
            size={size}
            shape={shape}
            className="text-tertiaryText font-bold shadow-md z-10"
            background="gradient"
          >
            {strings.playing}
          </Button>
        )}
        {status === "paused" && (
          <Button
            actionButton
            size={size}
            shape={shape}
            className="btn-paused shadow-md z-10"
          >
            {strings.paused}
          </Button>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <Button
            actionButton
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
          <span className="bg-gradient-r-primary rounded-lg px-2 py-1 shadow-md text-tertiaryText text-xs font-semibold select-none z-10">
            {strings.playing}
          </span>
        )}
        {status === "paused" && (
          <span className="text-secondaryText text-xs font-semibold select-none z-10">
            {strings.paused}
          </span>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <span className="text-secondaryText text-xs font-semibold select-none z-10">
            {statusMessage}
          </span>
        )}
      </>
    );
  }
}
