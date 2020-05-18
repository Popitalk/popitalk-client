import React from "react";
import Button from "./Button";
import Text from "./Text";
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
    <div className="px-4 rounded-lg py-2 my-2 w-full flex items-center flex-row bg-primaryBackground cursor-move">
      <div className={"flex w-64 justify-between items-center mr-4"}>
        <div className={"mx-2"}>
          <FontAwesomeIcon icon={"bars"} color={"gray"} />
        </div>
        <div className={"mr-2"}>
          <VideoStatus status={status} statusMessage={statusMessage} />
        </div>
        <Text variant={"small2"} color={"secondaryText"}>
          {duration}
        </Text>
      </div>
      <Text variant={"text1"} className={"w-full"}>
        {title}
      </Text>
      <Button
        icon="minus"
        className="btn-no-mr"
        shape="pill"
        background="cancel"
        size="sm"
        onClick={handleRemove}
      />
    </div>
  );
}