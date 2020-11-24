import React from "react";
import Button from "./Controls/Button";
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
            className="text-copy-tertiary font-bold shadow-md z-10"
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
            className="shadow-md z-10"
            background="bgColor"
          >
            {strings.paused}
          </Button>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <Button
            actionButton
            size={size}
            shape={shape}
            className="shadow-md z-10"
            background="bgColor"
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
          <span className="bg-gradient-r-primary rounded-md px-2 py-1 shadow-md text-copy-tertiary text-xs font-semibold select-none z-10">
            {strings.playing}
          </span>
        )}
        {status === "paused" && (
          <span className="text-copy-secondary text-xs font-semibold select-none z-10">
            {strings.paused}
          </span>
        )}
        {(status === "queued" || status === "ended") && statusMessage && (
          <span className="text-copy-secondary text-xs font-semibold select-none z-10">
            {statusMessage}
          </span>
        )}
      </>
    );
  }
}
