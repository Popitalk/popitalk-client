import React from "react";
import Button from "../Controls/Button";
import VideoStatus from "../VideoStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import strings from "../../helpers/localization";

export default function VideoMinimalQueueCard({
  title,
  duration,
  status,
  statusMessage,
  handleRemove,
  handleFindMore
}) {
  return (
    <>
      {!title && (
        <Button
          styleNone
          styleNoneContent={strings.searchAddVideos}
          styleNoneContentClassName="text-center text-copy-secondary text-sm"
          className="h-12 w-full bg-background-primary my-1 hover:shadow-sm hover:bg-hover-highlight transition duration-100 rounded-lg"
          analyticsString="Direct to search Button: VideoMinimalQueueCard"
          onClick={handleFindMore}
        />
      )}
      {title && (
        <div className="relative px-4 rounded-lg h-12 my-1 w-full hover:shadow-md flex items-center justify-between bg-background-primary cursor-pointer">
          <FontAwesomeIcon
            icon="bars"
            className="text-copy-secondary cursor-move mr-4"
          />
          <div className="flex flex-row w-full justify-between items-center space-x-2">
            <VideoStatus
              status={status}
              type="text"
              statusMessage={statusMessage}
            />
            <p className="text-sm text-copy-secondary">{duration}</p>
            <p
              className="text-sm text-copy-primary w-full mx-2 truncate"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className="absolute right-0 mr-2 flex">
            <Button
              actionButton
              icon="minus"
              background="cancel"
              size="sm"
              onClick={handleRemove}
              analyticsString="Delete Video Button: VideoMinimalQueueCard"
              tooltip="Remove Video"
              tooltipPlace="left"
            />
          </div>
        </div>
      )}
    </>
  );
}
