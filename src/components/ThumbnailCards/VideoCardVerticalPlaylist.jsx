import React from "react";
import Button from "../Controls/Button";
import VideoStatus from "../VideoStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import strings from "../../localization/strings";

export default function VideoCardVerticalPlaylist({
  title,
  duration,
  status,
  statusMessage,
  handleRemove,
  handleFindMore
}) {
  if (!title) {
    return (
      <Button
        styleNone
        styleNoneContent={strings.searchAddVideos}
        styleNoneContentClassName="text-center text-copy-secondary text-sm"
        className="h-12 w-full bg-background-primary my-1 hover:shadow-sm hover:bg-hover-highlight transition duration-100 rounded-lg"
        analyticsString="Direct to search Button: VideoCardVerticalPlaylist"
        onClick={handleFindMore}
      />
    );
  }
  return (
    <div className="relative px-4 rounded-lg h-12 my-1 w-full hover:shadow-md flex items-center justify-between bg-background-primary cursor-pointer space-x-4">
      <FontAwesomeIcon
        icon="bars"
        className="text-copy-secondary cursor-move"
      />
      {status === "playing" && (
        <VideoStatus
          status={status}
          type="text"
          statusMessage={statusMessage}
        />
      )}
      <p
        className="text-sm text-copy-primary w-full truncate"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="absolute right-0 top-0 -mt-1">
        <Button
          hoverable
          styleNone
          icon="minus"
          styleNoneIconClassName="text-copy-tertiary"
          className="w-6 h-6 bg-copy-error rounded-circle"
          onClick={handleRemove}
          analyticsString="Delete Video Button: VideoCardVerticalPlaylist"
          tooltip="Remove Video"
          tooltipPlace="left"
        />
      </div>
    </div>
  );
}
