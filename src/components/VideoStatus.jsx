import React from "react";
import strings from "../helpers/localization";

export default function VideoStatus({
  status = "none",
  statusMessage = "",
  additionalComponent
}) {
  return (
    <div className="rounded-md border-2 border-outline-image2 py-2 px-3 bg-background-secondary flex flex-shrink-0 text-copy-primary text-xs font-bold space-x-2 items-center cursor-pointer">
      {status === "playing" ? (
        <>
          <span className="rainbow-text text-xs font-bold select-none z-10 flex-shrink-0">
            {strings.playing}
          </span>
          {additionalComponent && (
            <div className="flex-shrink-0">{additionalComponent}</div>
          )}
        </>
      ) : status === "paused" ? (
        <>
          <span className="text-copy-secondary text-xs font-bold select-none z-10 flex-shrink-0">
            {strings.paused}
          </span>
          {additionalComponent && (
            <div className="flex-shrink-0">{additionalComponent}</div>
          )}
        </>
      ) : (status === "queued" || status === "ended") && statusMessage ? (
        <span className="text-copy-secondary text-xs font-semibold select-none z-10">
          Inactive
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
