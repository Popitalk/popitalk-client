import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function NewChannelPost({
  handleUploadImg,
  handleEmot,
  handleSubmit
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-center bg-secondaryBackground content-center py-2"
    >
      <button className="text-highlightText text-2xl" onClick={handleEmot}>
        <FontAwesomeIcon icon={["far", "smile"]} />
      </button>
      <input
        type="text"
        placeholder="Post something..."
        className="rounded-md mx-4 pl-3 pr-10 shadow"
      />
      <button className="text-highlightText text-2xl" onClick={handleUploadImg}>
        <FontAwesomeIcon icon={["fa", "image"]} />
      </button>
      <input
        type="submit"
        value="Send"
        className="mx-4 bg-transparent text-highlightText font-bold"
      />
    </form>
  );
}
