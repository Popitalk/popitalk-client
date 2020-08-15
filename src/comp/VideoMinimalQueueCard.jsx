import React from "react";
import Button from "./Controls/Button";
import VideoStatus from "./VideoStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VideoMinimalQueueCard({
  title,
  duration,
  status,
  statusMessage,
  handleRemove
}) {
  return (
    <>
      {!title && (
        <Button
          styleNone
          styleNoneContent="Search and add more videos below!"
          styleNoneContentClassName="text-center text-secondaryText text-sm"
          className="h-12 w-full bg-tertiaryBackground hover:shadow-sm hover:bg-highlightBackground transition duration-100 rounded-lg"
          analyticsString="Direct to search Button: VideoMinimalQueueCard"
        />
      )}
      {title && (
        <div className="relative px-4 rounded-lg h-12 my-1 w-full hover:shadow-md flex flex-row items-center justify-between bg-primaryBackground cursor-pointer">
          <FontAwesomeIcon
            icon="bars"
            className="text-secondaryText cursor-move"
          />
          <div className="flex flex-row w-full justify-between items-center space-x-2">
            <VideoStatus status={status} statusMessage={statusMessage} />
            <p className="text-sm text-secondaryText">{duration}</p>
            <p
              className="text-sm w-full mx-2 truncate"
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
            />
          </div>
        </div>
      )}
    </>
  );
}
