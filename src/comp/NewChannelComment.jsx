import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function NewChannelComment({
  handleUploadImg,
  handleEmot,
  handleSubmit
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-center bg-secondaryBackground content-center py-2"
    >
      <input
        type="text"
        placeholder="Add a comment"
        className="rounded-full mx-2 w-full px-3 py-2 ml-10 shadow text-sm"
      />
      <input
        type="submit"
        value="Send"
        className="mx-4 bg-transparent text-highlightText font-bold pr-3"
      />
    </form>
  );
}
