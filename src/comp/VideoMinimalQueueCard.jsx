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
        <button
          className="flex flex-row justify-center items-center cursor-pointer focus:outline-none 
          h-12 px-4 py-2 my-1 w-full bg-tertiaryBackground hover:shadow-sm hover:bg-highlightBackground transition duration-100 rounded-lg"
        >
          <p className={"text-center mr-2 text-secondaryText text-sm"}>
            Search and add more videos below!
          </p>
        </button>
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
              onClickEvent={handleRemove}
              analyticsString="Delete Video Button: VideoMinimalQueueCard"
            />
          </div>
        </div>
      )}
    </>
  );
}
